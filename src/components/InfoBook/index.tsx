import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { ButtonBack } from '@components/ButtonBack';
import { useTheme } from 'styled-components';

import * as S from './styles';
import { Props } from './types';

const InfoBook = ({ closeModal, data, isFavorite: isFavoriteProps = false }: Props) => {
  const { colors } = useTheme();
  const [isFavorite, setFavorite] = useState(isFavoriteProps);

  

  // const handleFavorite = async () => {
  //   try {
  //     const books = await AsyncStorage.getItem("@applibrarydev");
  //     const booksFavoritesFormatted: [] = books !== null ? JSON.parse(books || "") : [];
  //    let booksFavorites = booksFavoritesFormatted.push(data);
  //     await AsyncStorage.setItem('@applibrarydev', JSON.stringify(booksFavorites));
  //     setFavorite(e => !e)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  async function handleFavorite() {
    try {
      const books = await AsyncStorage.getItem("@applibrarydev");
      let booksFavoritesFormatted = books != null ? JSON.parse(books) : [];
      
      if (!Array.isArray(booksFavoritesFormatted)) {
        booksFavoritesFormatted = [];
      }
      booksFavoritesFormatted.push(data);
  
      await AsyncStorage.setItem("@applibrarydev", JSON.stringify(booksFavoritesFormatted));
      setFavorite(e => !e)

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <S.Container>
      <StatusBar
        backgroundColor="transparent"
      />

      <S.Header>
        <S.WrapperButton>
          <ButtonBack onPress={closeModal} color={colors.gray} />

          {isFavorite ? <S.ButtonFavorite onPress={handleFavorite}>
            <S.IconFavorite name={"favorite"} />
          </S.ButtonFavorite> : <S.ButtonFavorite onPress={handleFavorite}>
            <S.IconFavorite name={"favorite-border"} />
          </S.ButtonFavorite>}


        </S.WrapperButton>

        <S.ImageBook source={{ uri: `${data.volumeInfo?.imageLinks.thumbnail}` }} />
        <S.Title>{data.volumeInfo.title}</S.Title>
      </S.Header>

      <S.Main>
        <S.BoxAbout>
          <S.TitleAbout>Data de publicação</S.TitleAbout>
          <S.About>{data.volumeInfo.publishedDate}</S.About>
        </S.BoxAbout>

        <S.BoxDescription>
          <S.TitleDescription>Descrição</S.TitleDescription>
          <S.Description>{data.volumeInfo.description}</S.Description>
        </S.BoxDescription>

      </S.Main>

    </S.Container>
  );

};

export { InfoBook };