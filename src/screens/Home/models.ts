import { IBook } from "@models/IBook";

export interface HomeViewModel {
  openMenu(): void;
  books: IBook[];
  setBooks: React.Dispatch<React.SetStateAction<IBook[]>>
  categorySelect: string;
  setCategorySelect: React.Dispatch<React.SetStateAction<string>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  isDarkTheme: boolean;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  getBooks():void;
  searchBook():void;
}