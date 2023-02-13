import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../@types/react-navigation';
import { SceneName } from './scene-name';

import { SignIn } from '@screens/SignIn/view';
import { Home } from '@screens/Home/view';


const Stack = createNativeStackNavigator<RootStackParamList>();

export function AuthRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, headerLeft: undefined, gestureEnabled: false, }}
      initialRouteName={SceneName.Home}
    >

      <Stack.Screen
        name={SceneName.SignIn}
        component={SignIn}
      />


      <Stack.Screen
        name={SceneName.Home}
        component={Home}
      />


    </Stack.Navigator>
  );
}