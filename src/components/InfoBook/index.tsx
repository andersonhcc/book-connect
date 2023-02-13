import React, { useState } from 'react';
import { StatusBar } from 'react-native';

import { ButtonBack } from '@components/ButtonBack';
import { useTheme } from 'styled-components';

import * as S from './styles';
import { Props } from './types';

const InfoBook = ({ closeModal, data }: Props) => {
  const { colors } = useTheme();
  const [isFavorite, setFavorite] = useState(false);

  const handleFavorite = () => {
    setFavorite(e => !e)
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