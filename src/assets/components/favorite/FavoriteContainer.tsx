import React from 'react';
import { useSelector } from 'react-redux';
import BookCard from '../book/BookCard';
import useBooks from '../../hooks/useBooks';
import { RootState } from '../../hooks/reducer'; 

const FavoriteContainer = ({ searchQuery }) => {
  const { books, loading, error } = useBooks(searchQuery); 
  const favoriteBooks = useSelector((state: RootState) =>
    state.readingList.books);


  if (loading) {
    return <p>Cargando...</p>; 
  }

  if (error) {
    return <p>Error: {error.message}</p>; 
  }

  return (
    <>
      <h1 className="text-center text-3xl font-bold mt-5 mb-10 text-tertiary">Lista de Lectura</h1>
      <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14">
        {favoriteBooks.map((book) => (
          <BookCard
            book={book}
            key={book.ISBN}
          />
        ))}
      </section>
    </>
  );
};


export default FavoriteContainer;
