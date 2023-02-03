import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import * as S from './styles';

interface Props extends TouchableOpacityProps {
  icon?: string;
  color?: string;
  marginTop?: number;
}

export function ButtonBack({
    icon, 
    color,
    marginTop,
    ...rest} 
    : Props) {
  return (
    <S.Container 
    marginTop={marginTop}
    {...rest}
    >
      <S.IconBack name="left" color={color} size={20}/>
    </S.Container>
  );
}