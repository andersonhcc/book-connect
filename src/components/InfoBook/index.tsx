import React from 'react';
import { StatusBar } from 'react-native';

import { ButtonBack } from '@components/ButtonBack';


import {
  Container,
  WrapperButton,
  Header,
  ImageBook,
  Title,
  Author,
  Main,
  BoxAbout,
  TitleAbout,
  About,
  BoxDescription,
  TitleDescription,
  Description,
} from './styles'

type Props = {
  closeModal(): void;
  data: any;
}

const InfoBook = ({ closeModal, data }: Props) => {


  return (
    <Container>

      <StatusBar
        translucent
        backgroundColor="transparent"
      />

      <Header>
        <WrapperButton>
          <ButtonBack onPress={closeModal}/>
        </WrapperButton>

        <ImageBook source={{ uri: `${data.volumeInfo.imageLinks.thumbnail}` }} />
        <Title>{data.volumeInfo.title}</Title>
        <Author>{data.volumeInfo.authors[0]}</Author>
      </Header>

      <Main>
        <BoxAbout>
          <TitleAbout>Sobre o autor</TitleAbout>
          <About></About>
        </BoxAbout>

        <BoxDescription>
          <TitleDescription>Descrição</TitleDescription>
          <Description></Description>
        </BoxDescription>

      </Main>

    </Container>
  );

};

export { InfoBook };