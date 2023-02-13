import React, { useEffect } from 'react';

import { Container, Header, Title, Main } from './styles';
import { FlatList } from 'react-native';
import { useHomeInViewModel } from '@screens/Home/view.models';
import { Book } from '@components/Book';
import { FadeAnimation } from '@animations/FadeAnimation/index';

const BooksFavorite: React.FC = () => {
   const { getBooks, books } = useHomeInViewModel();

   useEffect(() => {
      getBooks();
   }, [])

   return (
      <Container>
         <Header>
            <Title>Livros favoritos 📚</Title>
         </Header>

         <Main>
            <FadeAnimation>

               <FlatList
                  data={books}
                  keyExtractor={item => item.id}
                  renderItem={({ item }) => (
                     <Book data={item} />
                  )}
               />
            </FadeAnimation>

         </Main>
      </Container>
   );

};

export { BooksFavorite };