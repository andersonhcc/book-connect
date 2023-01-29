import React, { useState } from 'react';
import { Modal } from 'react-native';

import { InfoBook } from '@components/InfoBook';

import {
  Container,
  ImageBook,
  TitleBook,
  AuthorBook,
} from './styles'

import { IBook } from 'src/dtos';

type Props = {
  data: any;
}


function Book({ data }: Props) {

  const [visible, setVisible] = useState(false);


  return (
    <Container onPress={() => setVisible(true)}>
      <ImageBook source={{ uri: `${data.volumeInfo.imageLinks.thumbnail}` }} />
      <TitleBook>{data.volumeInfo.title}</TitleBook>
      <AuthorBook>{data.volumeInfo.authors[0]}</AuthorBook>


      <Modal
        animationType='fade'
        visible={visible}
      >

        <InfoBook
          closeModal={() => setVisible(false)}
          data={data}
        />

      </Modal>



    </Container>
  );

};

export { Book };