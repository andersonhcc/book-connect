import React from 'react';

import * as S from './styles';

import { Props } from './types';

export function ButtonBack({
  icon,
  color,
  marginTop,
  ...rest }
  : Props) {
  return (
    <S.Container
      marginTop={marginTop}
      {...rest}
    >
      <S.IconBack name="left" color={color} size={20} />
    </S.Container>
  );
}