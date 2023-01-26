import React, { useContext, useState } from 'react';

import { Switch } from 'react-native';

import { useTheme } from 'styled-components';

import { useNavigation } from '@react-navigation/native';
import { SceneName } from '@routes/scene-name';

import {
  DrawerContentScrollView,
  DrawerItem
} from '@react-navigation/drawer';

import {
  Container,
  Content,
  Header,
  Avatar,
  Title,
  TitleEmail,
  WrapperData,
  WrapperInfos,
  ContentDrawer,
  IconAnt,
  IconIo,
  IconMaterial,
  BoxItems,
  TitlePreferences,
  BoxThemeMode,
  TItleTheme,
  ButtonLogout,
  TitleLogout,
  IconExit,

} from './styles';
import { ThemeContext, ThemeType } from '@global/styles/theme';


const DrawerStyles = (props: any) => {

  const theme = useTheme();
  const navigation = useNavigation();
  const [isEnabled, setIsEnabled] = useState(false);
  const { toggleTheme, theme: themes } = useContext(ThemeContext);

  function toggleSwitch() {

    setIsEnabled(prevState => !prevState)
  }

  const isDarkTheme = themes === ThemeType.dark;

  return (
    <Container>
      <DrawerContentScrollView {...props}>
        <Content>
          <Header>
            <WrapperData>
              <Avatar source={{ uri: "https://ui-avatars.com/api/?background=random&name=anderson" }} />
              <WrapperInfos>
                <Title>Anderson</Title>
                <TitleEmail>anderson@anderson.com</TitleEmail>
              </WrapperInfos>
            </WrapperData>
          </Header>

        </Content>

        <ContentDrawer>

          <BoxItems>

            <DrawerItem icon={() => (
              <IconIo name="home" />
            )}
              label="Início"
              labelStyle={{
                color: theme.colors.gray
              }}
              onPress={() => navigation.navigate(SceneName.Home)}
            />

            <DrawerItem icon={() => (
              <IconMaterial name="share-outline" />
            )}
              label="Compartilhar"
              labelStyle={{
                color: theme.colors.gray
              }}
              onPress={() => navigation.navigate(SceneName.Home)}
            />

            <DrawerItem icon={() => (
              <IconAnt name="infocirlceo" />
            )}
              label="Sobre"
              labelStyle={{
                color: theme.colors.gray
              }}
              onPress={() => navigation.navigate(SceneName.Home)}
            />

          </BoxItems>

          <TitlePreferences>Preferências</TitlePreferences>

          <BoxThemeMode>
            <TItleTheme>Tema Light</TItleTheme>
            <Switch
              trackColor={{ false: '#767577', true: `${theme.colors.title}` }}
              thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleTheme}
              value={isDarkTheme}
              style={{ marginRight: 5 }}
            />
          </BoxThemeMode>

          <ButtonLogout>
            <IconExit />
            <TitleLogout>Sair</TitleLogout>
          </ButtonLogout>

        </ContentDrawer>

      </DrawerContentScrollView>
    </Container >
  );
};

export default DrawerStyles;

