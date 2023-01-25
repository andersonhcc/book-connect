import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SceneName } from './scene-name';
import { useTheme } from 'styled-components';

import { Ionicons, FontAwesome } from '@expo/vector-icons';


import { Home } from '@screens/Home/view';

const Tab = createBottomTabNavigator();

export const AppRoutes: React.FC = () => {
  const theme = useTheme();

  return (
    <Tab.Navigator
      initialRouteName={SceneName.Home}
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: `${theme.colors.white}`,
        tabBarInactiveTintColor: `${theme.colors.gray}`,
        tabBarShowLabel: false,
        tabBarItemStyle: {
          borderRadius: 20,

        },

        tabBarStyle: {
          height: 60,
          position: 'absolute',
          bottom: 16,
          right: 16,
          left: 16,
          borderRadius: 20,
          backgroundColor: theme.colors.primary,

          borderTopColor: theme.colors.background,
        },
        tabBarActiveBackgroundColor: `${theme.colors.primary}`

      }}
    >


      <Tab.Screen
        name={SceneName.Home}
        component={Home}
        options={{
          tabBarIcon: ({ color }) => {
            return <Ionicons name="home" size={24} color={color} />
          }

        }}

      />


      <Tab.Screen
        name={"sas"}
        component={Home}
        options={{
          tabBarIcon: ({ color }) => {
            return <FontAwesome name="book" size={24} color={color} />
          }

        }}

      />






    </Tab.Navigator>
  )
}
