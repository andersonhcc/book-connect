import { AntDesign } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  padding-top: 25px;
  padding-bottom: 25px;
`;
export const WrapperTitle = styled.View`
  align-items: center;
  flex-direction: row;
  margin: 0 auto;
`;

export const Main = styled.View`
  flex: 1;
`;

export const BoxOption = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 10px;
`;

export const WrapperElements = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const TextOption = styled.Text`
  margin-left: 7px;
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(13)}px;
`;

export const IconAnt = styled(AntDesign).attrs({
  name: 'right',
})`
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.gray};
  position: absolute;
  right: 5px;
`;

export const IconAntElement = styled(AntDesign).attrs({
  name: 'right',
})`
  font-size: ${RFValue(18)}px;
  color: #000;
  position: absolute;
  left: 95%;
`;


export const TextAtt = styled.Text`
  margin-left: 7px;
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(12)}px;
`;

export const TextVersion = styled.Text`
  margin-right: 50px;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(12)}px;
`;
export const BoxVersion = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const BoxMain = styled.View`
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.gray};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(20)}px;
`;