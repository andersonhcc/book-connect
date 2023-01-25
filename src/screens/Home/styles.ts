import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather, FontAwesome } from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background};

`;

export const Header = styled.View`
  width: 100%;
  padding-top: 46px;
  padding-left: 2%;

  flex-direction: row;

  align-items: center;
  justify-content: space-around;
`;

export const ButtonMenu = styled(RectButton)``;

export const IconMenu = styled(Feather).attrs({
  name: "menu"
})`
  font-size: ${RFValue(35)}px;
  color: ${({ theme }) => theme.colors.title};
  margin-right: 20%;

`;

export const ImageProfile = styled.Image`
  width: 50px;
  height: 50px;

  border-radius: 50px;

`;

export const Content = styled.Text`
  padding-top: 34px;
  padding-left: 5%;
  padding-right: 100px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.gray};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(16)}px;

`;

export const TitleReady = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(26)}px;


`;

export const BoxSearch = styled.View`
  width: 90%;
  padding: 0 15px;
  height: 50px;
  align-items: center;
  flex-direction: row;
  border-radius: 10px;
  margin-left: 5%;

  background-color: ${({ theme }) => theme.colors.white};


`;

export const IconSearch = styled(Feather).attrs({
  name: "search"
})`
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.gray};
`;

export const InputSearch = styled.TextInput`
  width: 90%;

  color: ${({ theme }) => theme.colors.title};
  font-size: ${RFValue(16)}px;
  padding: 0 15px;

`

export const IconMicro = styled(FontAwesome).attrs({
  name: "microphone"
})`
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.gray};
`;


export const Categories = styled.ScrollView``;

export const TitleCategory = styled.Text`
  color: ${({ theme }) => theme.colors.gray};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(16)}px;
  margin-left: 10px;

`;



