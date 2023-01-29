import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.Pressable`
  width: 170px;
  margin-bottom: 40px;
  margin-left: 20px;
  
`;

export const ImageBook = styled.Image`
  width: 160px;
  height: 250px;
`;

export const TitleBook = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.title};
  margin-top: 5px;
`;

export const AuthorBook = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.title};
`;
