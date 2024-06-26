import React, { useEffect, useState } from "react";
import BookContainer from "../book/BookContainer";
import { getGenres } from "../../services/GenreService";
import GenreFilter from "../book/Genre";

const HomePage = ({ searchQuery }) => {
    const [selectedGenre, setSelectedGenre] = useState('Todos');
    const [genres, setGenres] = useState<string[]>(['Todos']);

    useEffect(() => {
        const fetchGenres = async () => {
            const fetchedGenres = await getGenres();
            setGenres(['Todos', ...fetchedGenres]);
        };

        fetchGenres();
    }, []);

    return (
        <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
            <GenreFilter genres={genres} selectedGenre={selectedGenre} onGenreChange={setSelectedGenre} />
            <BookContainer searchQuery={searchQuery} genre={selectedGenre} />
        </div>
    );
};

export default HomePage;
