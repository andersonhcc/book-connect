import React, { useContext, useState } from 'react';
import { Switch, Share, Modal } from 'react-native';

import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import { About } from '@components/About';
import { SceneName } from '@routes/scene-name';
import * as S from './styles';
import { useAuth } from '../../hooks/useAuth';

import {
  DrawerContentScrollView,
  DrawerItem
} from '@react-navigation/drawer';

import { ThemeContext, ThemeType } from '@global/styles/theme';

const DrawerStyles = (props: any) => {

  const theme = useTheme();
  const navigation = useNavigation();
  const [isEnabled, setIsEnabled] = useState(false);
  const [visibleAbout, setVisibleAbout] = useState(false);
  const { toggleTheme, theme: themes } = useContext(ThemeContext);
  const {user, logout} = useAuth();

  const isDarkTheme = themes === ThemeType.dark;


  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'App Library Dev | Compartilhe o app com seus amigos!',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
        } else {
        }
      } else if (result.action === Share.dismissedAction) {
      }
    } catch (error) {
      console.log(error);
    }
  };

  const openAbout = () => {
    setVisibleAbout(true)
  }

  const closeAbout = () => {
    setVisibleAbout(false)
  }

  return (
    <S.Container>
      <DrawerContentScrollView {...props}>
        <S.Content>
          <S.Header>
            <S.WrapperData>
              <S.Avatar source={{ uri: user?.photo }} />
              <S.WrapperInfos>
                <S.Title>Anderson</S.Title>
                <S.TitleEmail>{user?.email}</S.TitleEmail>
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
              onPress={onShare}
            />

            <DrawerItem icon={() => (
              <S.IconAnt name="infocirlceo" />
            )}
              label="Sobre"
              labelStyle={{
                color: theme.colors.gray
              }}
              onPress={openAbout}
            />

          </S.BoxItems>

          <S.TitlePreferences>Preferências</S.TitlePreferences>

          <S.BoxThemeMode>
            <S.TItleTheme>Modo Dark</S.TItleTheme>
            <Switch
              trackColor={{ false: '#767577', true: `${theme.colors.title}` }}
              thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleTheme}
              value={isDarkTheme}
              style={{ marginRight: 5 }}
            />
          </S.BoxThemeMode>

          <S.ButtonLogout onPress={logout}>
            <S.IconExit />
            <S.TitleLogout>Sair</S.TitleLogout>
          </S.ButtonLogout>

        </S.ContentDrawer>

        <Modal visible={visibleAbout} animationType='slide'
          presentationStyle="pageSheet"
          onRequestClose={closeAbout} >
          <About closeAbout={closeAbout} />

        </Modal>


      </DrawerContentScrollView>
    </S.Container >
  );
};

export default DrawerStyles;

