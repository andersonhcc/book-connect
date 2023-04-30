import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background};

`;

export const WrapperBook = styled.View`
  width: 100%;
  padding: 0 70px;
  padding-top: 200px;

  justify-content: center;
  align-items: center;

`;

export const Content = styled.View`
  width: 100%;
  padding-top: 70px;
  align-items: center;

`;

export const Title = styled.Text`
  font-size: ${RFValue(22)}px;
  font-family: ${({ theme }) => theme.fonts.medium};

`;

export const SubTitle = styled.Text`
  font-size: ${RFValue(12)}px;
  margin: 10px 0px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.gray};
  text-align: center;
`;





export const ButtonAuth = styled(RectButton)`
  flex-direction: row;
  margin-top: 21px;
  background-color: ${({ theme }) => theme.colors.primary};
  width: ${RFValue(300)}px;
  height: 50px;

  justify-content: center;
  align-items: center;

  border-radius: 4px;

`;

export const TextAuth = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(12)}px;
  margin-left: 16px;
`;
