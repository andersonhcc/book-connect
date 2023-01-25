import React, { useState } from 'react';

import { AuthRoutes } from './auth.routes';
import { AppDrawer } from './app-drawer.routes';
import { NavigationContainer } from '@react-navigation/native';

import { useTheme } from 'styled-components';
import { Loading } from '../components/Loading';


export function Routes() {
  const theme = useTheme();
  const [loading, setLoading] = useState(false);
  if (loading) {
    return (
      <Loading color={theme.colors.white} size='large' />
    )
  }
  return (
    <NavigationContainer>
      <AppDrawer />
    </NavigationContainer>
  )

}