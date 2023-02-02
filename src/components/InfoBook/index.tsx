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
        backgroundColor="transparent"
      />

      <Header>
        <WrapperButton>
          <ButtonBack onPress={closeModal}/>
        </WrapperButton>

        <ImageBook source={{ uri: `${data.volumeInfo?.imageLinks.thumbnail}` }} />
        <Title>{data.volumeInfo.title}</Title>
        <Author></Author>
      </Header>

      <Main>
        <BoxAbout>
          <TitleAbout>Data de publicação</TitleAbout>
          <About>{data.volumeInfo.publishedDate}</About>
        </BoxAbout>

        <BoxDescription>
          <TitleDescription>Descrição</TitleDescription>
          <Description>{data.volumeInfo.description}</Description>
        </BoxDescription>

      </Main>

    </Container>
  );

};

export { InfoBook };