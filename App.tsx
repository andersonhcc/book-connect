import React, { useCallback } from 'react';
import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-gesture-handler';

import * as SplashScreen from "expo-splash-screen";

import { ThemeType, useThemeProvider } from '@global/styles/theme';


import { Routes } from './src/routes';
import { ThemeProvider } from '@global/styles/theme';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_700Bold
} from "@expo-google-fonts/poppins";


SplashScreen.preventAutoHideAsync();
SplashScreen.hideAsync();

export default function App() {
  const { theme } = useThemeProvider();
  const isDarkTheme = theme === ThemeType.dark;


  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_700Bold
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);


  if (!fontsLoaded) return null;

  console.log(isDarkTheme)


  return (
    <ThemeProvider>

      <GestureHandlerRootView style={{ flex: 1 }}>
        <Routes />

      </GestureHandlerRootView>

    </ThemeProvider>


  );
}
