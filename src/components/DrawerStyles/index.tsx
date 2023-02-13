import React, { useContext, useState } from 'react';
import { Switch } from 'react-native';

import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';

import { SceneName } from '@routes/scene-name';
import * as S from './styles';

import {
  DrawerContentScrollView,
  DrawerItem
} from '@react-navigation/drawer';

import { ThemeContext, ThemeType } from '@global/styles/theme';

const DrawerStyles = (props: any) => {

  const theme = useTheme();
  const navigation = useNavigation();
  const [isEnabled, setIsEnabled] = useState(false);
  const { toggleTheme, theme: themes } = useContext(ThemeContext);

  const isDarkTheme = themes === ThemeType.dark;

  return (
    <S.Container>
      <DrawerContentScrollView {...props}>
        <S.Content>
          <S.Header>
            <S.WrapperData>
              <S.Avatar source={{ uri: "https://ui-avatars.com/api/?background=random&name=anderson" }} />
              <S.WrapperInfos>
                <S.Title>Anderson</S.Title>
                <S.TitleEmail>anderson@anderson.com</S.TitleEmail>
              </S.WrapperInfos>
            </S.WrapperData>
          </S.Header>

        </S.Content>

        <S.ContentDrawer>

          <S.BoxItems>

            <DrawerItem icon={() => (
              <S.IconIo name="home" />
            )}
              label="Início"
              labelStyle={{
                color: theme.colors.gray
              }}
              onPress={() => navigation.navigate(SceneName.Home)}
            />

            <DrawerItem icon={() => (
              <S.IconMaterial name="share-outline" />
            )}
              label="Compartilhar"
              labelStyle={{
                color: theme.colors.gray
              }}
              onPress={() => navigation.navigate(SceneName.Home)}
            />

            <DrawerItem icon={() => (
              <S.IconAnt name="infocirlceo" />
            )}
              label="Sobre"
              labelStyle={{
                color: theme.colors.gray
              }}
              onPress={() => navigation.navigate(SceneName.Home)}
            />

          </S.BoxItems>

          <S.TitlePreferences>Preferências</S.TitlePreferences>

          <S.BoxThemeMode>
            <S.TItleTheme>Tema Light</S.TItleTheme>
            <Switch
              trackColor={{ false: '#767577', true: `${theme.colors.title}` }}
              thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleTheme}
              value={isDarkTheme}
              style={{ marginRight: 5 }}
            />
          </S.BoxThemeMode>

          <S.ButtonLogout>
            <S.IconExit />
            <S.TitleLogout>Sair</S.TitleLogout>
          </S.ButtonLogout>

        </S.ContentDrawer>

      </DrawerContentScrollView>
    </S.Container >
  );
};

export default DrawerStyles;

