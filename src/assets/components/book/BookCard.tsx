import React from 'react';
import { BookCardProps } from '../../types';
import { useDispatch, useSelector } from 'react-redux';
import { addToReadingList, removeFromReadingList } from '../../features/readingListSlice';
import { FaBookBookmark } from "react-icons/fa6";
import { RootState } from '../../hooks/reducer'; 

const BookCard: React.FC<BookCardProps> = ({book }) => {

  const dispatch = useDispatch();
  const isFavorite = useSelector((state: RootState) =>
    state.readingList.books.some(b => b.ISBN === book.ISBN)
  );
  const handleReadingList = () => {
    if (isFavorite) {
      dispatch(removeFromReadingList(book));
    } else {
      dispatch(addToReadingList(book));
    }
  };
  return (
      <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl " key= {book.ISBN}>
        <a href="#">
          <img src={book.cover} alt={book.title} className="h-80 w-72 object-fill rounded-t-xl" />
          <div className="px-4 py-3 w-72">
            <p className="text-lg font-bold text-black truncate block capitalize">{book.title}</p>
            <span className="text-tertiary mr-3 uppercase text-xs">{book.author.name}</span>
            <div className="flex items-center justify-between my-3">
              <p className="text-sm text-gray-600"> <strong>Año: </strong> {book.year} - <strong>Genero: </strong>  {book.genre}</p>
              <div className="relative group">
              <button onClick={handleReadingList}>
              <span className={`${isFavorite ? 'text-primary' : 'text-gray-400'}`}>
                <FaBookBookmark className="text-2xl" />
              </span>            
                </button>
              <p className="tooltip">
              {isFavorite? 'Eliminar de favoritos': 'Agregar a Lista de lectura.'}
              </p>
            </div>
            </div>
          </div>
        </a>
      </div>
    );
  };
  
  export default BookCard;