import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Ionicons, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';



export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.View`
  flex: 1;
  padding-top: 15px;
`;

export const Header = styled.View`
  padding-left: 20px;
`;

export const Avatar = styled.Image`
  width: 70px;
  height: 70px;

  border-radius: 50px;

`;

export const Title = styled.Text`
  font-size: ${RFValue(16)}px;
  margin-top: 3px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.title};
`;


export const TitleEmail = styled.Text`
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.gray};
  margin-top: 3px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const WrapperData = styled.View`
  flex-direction: row;
`;

export const WrapperInfos = styled.View`
  padding-left: 15px;
  justify-content: center;
`;

export const ContentDrawer = styled.View`
  padding-top: 10px;
  padding-left: 15px;
  justify-content: center;
`;

export const IconAnt = styled(AntDesign)`
  font-size: ${RFValue(22)}px;
  color: ${({ theme }) => theme.colors.gray};
`;

export const IconIo = styled(Ionicons)`
  font-size: ${RFValue(22)}px;
  color: ${({ theme }) => theme.colors.gray};
`;

export const IconMaterial = styled(MaterialCommunityIcons)`
  font-size: ${RFValue(22)}px;
  color: ${({ theme }) => theme.colors.gray};
`;


export const BoxItems = styled.View`
  border-bottom-width: 0.5px;
  border-bottom-color: ${({ theme }) => theme.colors.gray};
  padding-bottom: 20px;
`;


export const TitlePreferences = styled.Text`
  color: ${({ theme }) => theme.colors.gray};
  padding-top: 10px;
  padding-left: 20px;

  font-family: ${({ theme }) => theme.fonts.medium};

`;

export const BoxThemeMode = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  padding-top: 10px;
  padding-left: 20px;


`;

export const TItleTheme = styled.Text`
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.gray};

`;

export const ButtonLogout = styled(RectButton)`
    padding-top: 10px;
    padding-left: 20px;
    flex-direction: row;

    align-items: center;


`;

export const TitleLogout = styled.Text`
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.gray};
  margin-left: 10px;
  margin-top: 3px;
  font-family: ${({ theme }) => theme.fonts.medium};

`;

export const IconExit = styled(Ionicons).attrs({
  name: "ios-exit-outline"
})`
  font-size: ${RFValue(22)}px;
  color: ${({ theme }) => theme.colors.gray};
`;


