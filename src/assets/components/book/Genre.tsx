import React from 'react';

const GenreFilter = ({ genres, selectedGenre, onGenreChange }) => {
  return (
    <div className="flex justify-center space-x-4 bg-white p-4">
      {genres.map((genre) => (
        <button
          key={genre}
          onClick={() => onGenreChange(genre)}
          className={`px-4 py-2 rounded-full ${genre === selectedGenre ? 'bg-primary text-white' : 'bg-tertiary text-white'}`}
        >
          {genre}
        </button>
      ))}
    </div>
  );
};

export default GenreFilter