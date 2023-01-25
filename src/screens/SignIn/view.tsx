import React from 'react';


import Book from '@assets/images/book.svg';
import Google from '@assets/images/Google.svg';

import {
  Container,
  WrapperBook,
  Content,
  Title,
  SubTitle,
  ButtonAuth,
  TextAuth
} from './styles'

const  SignIn: React.FC = () => {

return ( 
   <Container>
    <WrapperBook>
      <Book />
    </WrapperBook>

    <Content>
      <Title>Leia seus livros favoritos</Title>
      <SubTitle>
      Todos os seus livros favoritos em um só lugar,{"\n"} 
      leia qualquer livro, fique em casa, viaje ou em 
      {"\n"} qualquer outro lugar
      </SubTitle>

      
      <ButtonAuth>
          <Google />
          <TextAuth> Entrar com Google </TextAuth>
        </ButtonAuth>


    </Content>

   </Container>
);

};

export { SignIn };