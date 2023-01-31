import { api } from "./api";
import { AxiosResponse } from "axios";

export class BooksAsync {
  async get(category: string): Promise<AxiosResponse> {
    return await api.get(`books/v1/volumes?q=${category}`);
  }
}