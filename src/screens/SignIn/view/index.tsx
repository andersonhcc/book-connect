import React from 'react';
import Book from '@assets/images/book.svg';
import Google from '@assets/images/Google.svg';
import { useAuth } from '../../../hooks/useAuth';
import * as GoogleAuth from "expo-auth-session/providers/google";

import * as S from './styles';

const  SignIn: React.FC = () => {
  const {signIn} = useAuth();

return ( 
   <S.Container>
    <S.WrapperBook>
      <Book  height={100}/>
    </S.WrapperBook>

    <S.Content>
      <S.Title>Encontre seus livros favoritos</S.Title>
      <S.SubTitle>
      Todos os seus livros favoritos em um só lugar,{"\n"} 
      leia qualquer livro, {"\n"}  fique em casa, viaje ou em 
      {"\n"} qualquer outro lugar
      </S.SubTitle>

      
      <S.ButtonAuth onPress={() => {
       signIn()
      }}>
          <Google />
          <S.TextAuth> Entrar com Google </S.TextAuth>
        </S.ButtonAuth>
    </S.Content>

   </S.Container>
);

};

export { SignIn };