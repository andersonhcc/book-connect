import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AppRoutes } from "./app.routes";

import DrawerStyles from "@components/DrawerStyles";

const Drawer = createDrawerNavigator();


export const AppDrawer: React.FC = () => {

  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false, }}
      initialRouteName={"Initial"}
      drawerContent={props => <DrawerStyles {...props}/>}
      
    >
      <Drawer.Screen name="Início" component={AppRoutes} />


    </Drawer.Navigator>

  )
}