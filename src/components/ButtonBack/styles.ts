import styled, { css } from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

interface Props {
  color?: string;
  marginTop?: number;
}

export const Container = styled.TouchableOpacity<Props>`
  margin-left: 7px;
  width: 40px;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  ${({marginTop}) =>  marginTop ? css`margin-top: ${marginTop}px;` : 0}
`;


export const IconBack = styled(AntDesign)<Props>`
  ${({color, theme}) => color ? 
  css`color: ${color}` : css`${theme.colors.title}`  
}
`;

