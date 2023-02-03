import React from 'react';

import Book from '@assets/images/book.svg';
import Google from '@assets/images/Google.svg';

import * as S from './styles';

const  SignIn: React.FC = () => {

return ( 
   <S.Container>
    <S.WrapperBook>
      <Book />
    </S.WrapperBook>

    <S.Content>
      <S.Title>Encontre seus livros favoritos</S.Title>
      <S.SubTitle>
      Todos os seus livros favoritos em um só lugar,{"\n"} 
      leia qualquer livro, fique em casa, viaje ou em 
      {"\n"} qualquer outro lugar
      </S.SubTitle>

      
      <S.ButtonAuth>
          <Google />
          <S.TextAuth> Entrar com Google </S.TextAuth>
        </S.ButtonAuth>
    </S.Content>

   </S.Container>
);

};

export { SignIn };