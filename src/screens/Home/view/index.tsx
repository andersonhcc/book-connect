import React, { useEffect } from 'react';

import { FlatList, TouchableOpacity, StatusBar } from 'react-native';

import { categories } from '@utils/categories';

import { useHomeInViewModel } from '../view.models';
import { useTheme } from 'styled-components';

import { Book } from '@components/Book';
import { Loading } from '@components/Loading';

import { booksAsync } from '@services/index';

import * as S from './styles';

const Home: React.FC = () => {

  const {
    openMenu,
    books,
    setBooks,
    categorySelect,
    setCategorySelect,
    loading,
    setLoading,
    isDarkTheme,
    search,
    setSearch
  } = useHomeInViewModel();

  const themes = useTheme();

  useEffect(() => {
    getBooks();
    searchBook();
  }, [categorySelect])

  async function getBooks() {
    setLoading(true);

    try {
      const { data } = await booksAsync.get(`${categorySelect}`)
      setBooks(data.items);
      setLoading(false);

    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  }

  function handleCategory(category: string) {
    setCategorySelect(category)
  }

  async function searchBook() {
    try {
      const { data } = await booksAsync.get(`${search}`)
      setBooks(data.items);
      setLoading(false);

    } catch (err) {
      console.log(err);
      setLoading(false);
    }

  }

  return (
    <S.Container>
      <StatusBar
        barStyle={isDarkTheme ? 'light-content' : 'dark-content'}
        backgroundColor="transparent"
        translucent
      />

      <S.Header>
        <S.ButtonMenu onPress={openMenu}>
          <S.IconMenu />
        </S.ButtonMenu>

        <S.ImageProfile source={{ uri: 'https://ui-avatars.com/api/?background=random&name=anderson' }} />
      </S.Header>

      <S.Content>
        <S.Title>Bem vindo de volta, Anderson!</S.Title>
        <S.TitleReady>O que você deseja {"\n"}pesquisar hoje?</S.TitleReady>
      </S.Content>

      <S.BoxSearch>
        <S.IconSearch />
        <S.InputSearch
          value={search}
          onChangeText={setSearch}
          placeholder="Digite o nome do livro"
          returnKeyType="done"
          onSubmitEditing={searchBook}
        />
        <S.IconMicro />
      </S.BoxSearch>

      <S.Categories
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingLeft: '5%',
          paddingTop: 20,
        }}
      >
        {categories.map(category => (
          <TouchableOpacity onPress={() => handleCategory(category.id)} key={category.key}>
            <S.TitleCategory isActive={categorySelect === category.id}>{category.name}</S.TitleCategory>
          </TouchableOpacity>
        ))}

      </S.Categories>

      {loading ?

        <Loading color={themes.colors.primary} />
        :
        <FlatList
          data={books}
          horizontal={true}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Book data={item} />
          )}
        />
      }

    </S.Container>
  );

};

export { Home };