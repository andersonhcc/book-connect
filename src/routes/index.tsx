import React, { useState } from 'react';

import { AuthRoutes } from './auth.routes';
import { AppDrawer } from './app-drawer.routes';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from '@global/context/AuthContext';

import { useTheme } from 'styled-components';
import { Loading } from '../components/Loading';
import { useAuth } from '../hooks/useAuth';

export function Routes() {
  const theme = useTheme();
  const {isAuthenticated} = useAuth();
  const [loading, setLoading] = useState(false);

  console.log(isAuthenticated);
  
  if (loading) {
    return (
      <Loading color={theme.colors.white} size='large' />
    )
  }
  return (
      <NavigationContainer>
        {isAuthenticated ? <AppDrawer /> : <AuthRoutes />}
      </NavigationContainer>
  )

}