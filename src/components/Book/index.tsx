import React, { useState } from 'react';
import { Modal } from 'react-native';

import { InfoBook } from '@components/InfoBook';

import * as S from './styles';

type Props = {
  data: any;
  isFavorite: boolean;
}

function Book({ data, isFavorite }: Props) {

  const [visible, setVisible] = useState(false);

  return (
    <S.Container onPress={() => setVisible(true)}>
      <S.ImageBook source={{ uri: `${data.volumeInfo.imageLinks?.thumbnail}` }} />
      <S.TitleBook>{data.volumeInfo?.title}</S.TitleBook>

      <Modal
        animationType='fade'
        visible={visible}
      >
        <InfoBook
          closeModal={() => setVisible(false)}
          data={data}
          isFavorite={isFavorite}
        />

      </Modal>
    </S.Container>
  );

};

export { Book };