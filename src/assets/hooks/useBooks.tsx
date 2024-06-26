import { useState, useEffect } from 'react';
import { getBooks } from '../services/BookService';
import { Book } from '../types';

const useBooks = (searchQuery = '') => {
  const [books, setbooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const libraryBooks = await getBooks();
        const filteredBooks = libraryBooks.filter((book: Book) =>
            book.title.toLowerCase().includes(searchQuery.toLowerCase())
          );
        setbooks(filteredBooks);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [searchQuery]);  

  return { books, loading, error };
};

export default useBooks;
