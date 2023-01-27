import React from 'react';

import {
  Container,
  ImageBook,
  TitleBook,
  AuthorBook,
} from './styles'

import { IBook } from 'src/dtos';


const Book = (data: any) => {
console.log('oi' + data.items[0].volumeInfo.title);

  return (
    <Container>
      <ImageBook source={{ uri: 'https://books.google.com/books/content?id=gRMsAAAAYAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api' }} />
      <TitleBook>{data.items[0].volumeInfo.title}</TitleBook>
      <AuthorBook>{data.items.volumeInfo.authors[0]}</AuthorBook>
    </Container>
  );

};

export { Book };