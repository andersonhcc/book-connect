import { useState } from "react";
import { HomeViewModel } from "./models";
import { DrawerActions } from "@react-navigation/native";
import { useThemeProvider } from "@global/styles/theme";
import { useNavigation } from '@react-navigation/native';
import { ThemeType } from "@global/styles/theme";
import { IBook } from "@dtos/index";


const useHomeInViewModel = (): HomeViewModel => {
  const navigation = useNavigation();
  const [search, setSearch] = useState('');
  const [books, setBooks] = useState<IBook[]>([]);
  const [categorySelect, setCategorySelect] = useState('programming');
  const [loading, setLoading] = useState(false);
  const { theme } = useThemeProvider();
  const isDarkTheme = theme === ThemeType.dark;

  const openMenu = () => {
    navigation.dispatch(DrawerActions.openDrawer);
  }

  return {
    openMenu,
    books,
    setBooks,
    categorySelect,
    setCategorySelect,
    loading,
    setLoading,
    isDarkTheme,
    search,
    setSearch,
  }

}

export { useHomeInViewModel };