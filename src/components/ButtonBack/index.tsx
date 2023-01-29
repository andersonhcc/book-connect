import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { 
  Container,
  IconBack 
} from './styles';

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
    <Container 
    marginTop={marginTop}
    {...rest}
    >
      <IconBack name="left" color={color} size={20}/>
    </Container>
  );
}