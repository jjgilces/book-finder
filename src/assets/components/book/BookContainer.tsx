import React from 'react';
import BookCard from './BookCard';
import useBooks from '../../hooks/useBooks'; 

const BookContainer = ({ searchQuery, genre }) => {
  const { books, loading, error } = useBooks(searchQuery); 

  const filteredBooks = genre === 'Todos' ? books : books.filter(book => book.genre === genre);

  if (loading) {
    return <p>Cargando...</p>; 
  }

  if (error) {
    return <p>Se ha producido un error: {error.message}</p>; 
  }

  return (
    <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
      {filteredBooks.map((book) => (
        <BookCard
        book= {book}
        key={book.ISBN}
        />
      ))}
    </section>
  );
};

export default BookContainer;
