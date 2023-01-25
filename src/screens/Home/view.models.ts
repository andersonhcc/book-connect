import { HomeViewModel } from "./models";
import { DrawerActions } from "@react-navigation/native";
import { useNavigation } from '@react-navigation/native';


const useHomeInViewModel = (): HomeViewModel => {

  const navigation = useNavigation();
  const openMenu = () => {
    navigation.dispatch(DrawerActions.openDrawer);
  }



  return {
    openMenu
  }

}

export { useHomeInViewModel };