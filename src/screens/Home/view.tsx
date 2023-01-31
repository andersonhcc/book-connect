import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';

import { useHomeInViewModel } from './view.models';
import { categories } from '@utils/categories';
import { StatusBar } from 'react-native';

import { useTheme } from 'styled-components';

import { useThemeProvider } from '@global/styles/theme';
import { ThemeType } from '@global/styles/theme';
import { IBook } from '@dtos/index';

import { Book } from '@components/Book';

import { booksAsync } from '@services/index';

import {
  Container,
  Header,
  ButtonMenu,
  ImageProfile,
  IconMenu,
  Content,
  Title,
  TitleReady,
  BoxSearch,
  IconSearch,
  InputSearch,
  IconMicro,
  Categories,
  TitleCategory,
  Main,
} from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Loading } from '@components/Loading';


const Home: React.FC = () => {

  const { openMenu } = useHomeInViewModel();
  const { theme } = useThemeProvider();
  const isDarkTheme = theme === ThemeType.dark;
  const [book, setBooks] = useState<IBook[]>([]);
  const [categorySelect, setCategorySelect] = useState('programming')
  const [loading, setLoading] = useState(false);
  const themes = useTheme();


  useEffect(() => {
    getBooks();
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


  return (
    <Container>
      <StatusBar
        barStyle={isDarkTheme ? 'light-content' : 'dark-content'}
        backgroundColor="transparent"
        translucent
      />

      <Header>
        <ButtonMenu onPress={openMenu}>
          <IconMenu />
        </ButtonMenu>

        <ImageProfile source={{ uri: 'https://ui-avatars.com/api/?background=random&name=anderson' }} />
      </Header>

      <Content>
        <Title>Bem vindo de volta, Anderson!</Title>
        <TitleReady>O que você deseja {"\n"}pesquisar hoje?</TitleReady>
      </Content>

      <BoxSearch>
        <IconSearch />
        <InputSearch />
        <IconMicro />
      </BoxSearch>

      <Categories
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingLeft: '5%',
          paddingTop: 20,
        }}
      >
        {categories.map(category => (
          <TouchableOpacity onPress={() => handleCategory(category.id)} key={category.key}>
            <TitleCategory>{category.name}</TitleCategory>
          </TouchableOpacity>
        ))}

      </Categories>

      {loading ? 
      
      <Loading color={themes.colors.primary}/> 
      :
        <FlatList
          data={book}
          horizontal={true}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Book data={item} />
          )}
        />
      }

    </Container>
  );

};

export { Home };