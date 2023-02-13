import { useState } from "react";
import { HomeViewModel } from "./models";
import { DrawerActions } from "@react-navigation/native";
import { useThemeProvider } from "@global/styles/theme";
import { useNavigation } from '@react-navigation/native';
import { ThemeType } from "@global/styles/theme";
import { IBook } from "@models/IBook";
import { booksAsync } from '@services/index';

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


 const  getBooks = async () => {
    setLoading(true);

    try {
      const { data } = await booksAsync.get(`${categorySelect}`)
      setBooks(data.items);
      setLoading(false);

    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  }

 const  searchBook = async () => {
    try {
      const { data } = await booksAsync.get(`${search}`)
      setBooks(data.items);
      setLoading(false);

    } catch (err) {
      console.log(err);
      setLoading(false);
    }
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
    getBooks,
    searchBook,
  }

}

export { useHomeInViewModel };