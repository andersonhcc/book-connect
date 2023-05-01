import { IBook } from "@models/IBook";

export interface BooksFavoriteViewModel {
    books: IBook[]
    getBooksFavorite:() => void;
    isLoading: boolean
}