import React, { useEffect } from 'react';
import { Container, Header, Title, Main } from './styles';
import { FlatList } from 'react-native';
import { Book } from '@components/Book';
import { FadeAnimation } from '@animations/FadeAnimation/index';
import useBooksFavoriteInViewModel from '../view.models';
import { Loading } from '@components/Loading';
const BooksFavorite: React.FC = () => {
   const { getBooksFavorite, books, isLoading } = useBooksFavoriteInViewModel();

   useEffect(() => {
      getBooksFavorite();
   },[])

   return (
      <Container>
         <Header>
            <Title>Livros favoritos 📚</Title>
         </Header>

         {isLoading ? <Loading /> :  
         <Main>

        <FlatList
        data={books}
        horizontal={true}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Book data={item} isFavorite />
        )}
        
        />
        </Main>
         }
      </Container>
   );

};

export { BooksFavorite };