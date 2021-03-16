import { useEffect, useState } from 'react';
import Header from '../components/movies/Header';
import Movies from '../components/movies/Movies';

const Home = () => {
    const[movies, setMovies] = useState([]);
    const[isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        fetch('http://localhost:3001/movies', {method: 'get'})
            .then(response => response.json())
            .then(data => {
                setMovies(data);
                console.log(data);
                setIsLoading(false);
            });
    }, []);

    return (
        <>
            <Header />
            {!isLoading && 
                <Movies movies={movies} />
            }
        </>
    )
}

export default Home;