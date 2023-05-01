import { BooksFavoriteViewModel } from "./models"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from "react";
import { IBook } from "@models/IBook";

const useBooksFavoriteInViewModel = (): BooksFavoriteViewModel => { 
    const [books, setBooks] = useState<IBook[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const getBooksFavorite = async () => {
        setIsLoading(true);
        try {
            const booksFavorite = await AsyncStorage.getItem('@applibrarydev');
            const booksFavoriteFormatted = JSON.parse(booksFavorite || '{}');
            setBooks(booksFavoriteFormatted)
        } catch (err) {
            console.log(err);
        } finally{
            setIsLoading(false);

        }
    }

    return {
        getBooksFavorite,
        books,
        isLoading,
    }
}

export default useBooksFavoriteInViewModel;
