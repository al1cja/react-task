import { useEffect, useState } from 'react';
import Categories from '../components/movies/Categories';
import Header from '../components/movies/Header';
import Movies from '../components/movies/Movies';
import MoviesPage from '../components/movies/MoviesPage';

const Home = () => {
    const[movies, setMovies] = useState([]);
    const[categories, setCategories] = useState([]);
    const[isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        fetch('http://localhost:3001/movies', {method: 'get'})
            .then(response => response.json())
            .then(data => {
                setMovies(data);
                setIsLoading(false);
            });

        fetch('http://localhost:3001/categories', {method: 'get'})
            .then(response => response.json())
            .then(data => {
                setCategories(data);
                setIsLoading(false);
            });
    }, []);

    return (
        <>
            <Header />
            {!isLoading && 
                <MoviesPage 
                    movies={movies}
                    categories={categories} />
            }
        </>
    )
}

export default Home;