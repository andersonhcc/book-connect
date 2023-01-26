import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { ReactNode } from 'react';
import { createContext, useContext } from 'react';

import { ThemeProvider as ThemeProviderStyled } from 'styled-components';
import { darkTheme } from './dark';
import { lightTheme } from './light';

export enum ThemeType {
  light = 'light',
  dark = 'dark',
}

interface Props {
  children: ReactNode
}

const themes = {
  [ThemeType.light]: lightTheme,
  [ThemeType.dark]: darkTheme,
};

export const ThemeContext = createContext({
  theme: ThemeType.light,
  toggleTheme: () => { },
});

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState(ThemeType.light);

  useEffect(() => {
    loadTheme();
  }, []);

  async function loadTheme() {
    const savedTheme = await AsyncStorage.getItem('@theme') as string;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }

  function toggleTheme() {
    let newTheme;
    if (theme === ThemeType.light) {
      newTheme = ThemeType.dark;
    } else {
      newTheme = ThemeType.light;
    }

    AsyncStorage.setItem('@theme', newTheme);
    setTheme(newTheme);
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProviderStyled theme={themes[theme]}>
        {children}
      </ThemeProviderStyled>
    </ThemeContext.Provider>
  );
};

function useThemeProvider(){
  const context = useContext(ThemeContext);

  return context;
}

export { useThemeProvider };