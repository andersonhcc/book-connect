import React from 'react';

import { useHomeInViewModel } from './view.models';
import { categories } from '@utils/categories';

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
} from './styles'

const Home: React.FC = () => {
  
  const { openMenu } = useHomeInViewModel();
 

  return (
    <Container>
      <Header>
        <ButtonMenu onPress={openMenu}>
          <IconMenu />
        </ButtonMenu>

        <ImageProfile source={{ uri: 'https://ui-avatars.com/api/?background=random&name=anderson'}}/>
      </Header>

      <Content>
        <Title>Bem vindo de volta, Anderson!</Title>
        <TitleReady>O que você deseja {"\n"}ler hoje?</TitleReady>
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
          <TitleCategory key={category.key}>{category.name}</TitleCategory>
        ))}

      </Categories>

    </Container>
  );

};

export { Home };