import { getBooks } from './BookService';

export const getGenres = async (): Promise<string[]> => {
  try {
    const books = await getBooks();
    const uniqueGenres = new Set(books.map(book => book.genre));
    return Array.from(uniqueGenres);
  } catch (error) {
    console.error('Error al traer los generos:', error);
    return [];
  }
};
