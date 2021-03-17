import { useEffect, useState } from 'react';
import Header from '../components/movies/Header';
import MoviesPage from '../components/movies/MoviesPage';
import IsLoading from '../components/loading/IsLoading';

const Home = () => {
    const[movies, setMovies] = useState();
    const[categories, setCategories] = useState();
    
    useEffect(() => {
        fetch('http://localhost:3001/movies', {method: 'get'})
            .then(response => response.json())
            .then(data => setMovies(data));

        fetch('http://localhost:3001/categories', {method: 'get'})
            .then(response => response.json())
            .then(data => setCategories(data));
    }, []);

    const content = (movies && categories) 
    ? <MoviesPage movies={movies} categories={categories} />
    : <IsLoading />

    return (
        <>
            <Header />
            {content}
        </>
    )
}

export default Home;