import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;


export const WrapperButton = styled.View`
  width: 100%;
  padding-bottom: 26px;
`;


export const Header = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-top: 50px;

`;


export const ImageBook = styled.Image`
  width: 220px;
  height: 300px;

`;

export const Title = styled.Text`
  width: 70%;
  text-align: center;

  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.title};

`;

export const Author = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.gray};

`;

export const Main = styled.View`
  padding-top: 35px;
  padding-left: 36px;

`;

export const BoxAbout = styled.View``;

export const TitleAbout = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.title};
`;

export const About = styled.Text``;

export const BoxDescription = styled.View``;

export const TitleDescription = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.title};
`;

export const Description = styled.Text``;
