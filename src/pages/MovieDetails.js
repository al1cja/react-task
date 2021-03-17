import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/movies/Header';
import IsLoading from '../components/loading/IsLoading';
import MovieDetailsPage from '../components/movies/MovieDetailsPage';

const MovieDetails = (props) => {
    const [movie, setMovie] = useState([]);
    const movieTitle = useParams();

    useEffect(() => {
        fetch('http://localhost:3001/movies', {method: 'get'})
            .then(response => response.json())
            .then(data => data.filter(data => data.title === movieTitle.title))
            .then(data => setMovie(data));
    }, []);

    const content = movie.length > 0
        ? <MovieDetailsPage movie={movie[0]} />
        : <IsLoading />;

    return(
        <>
            <Header />
            {content}
        </>
    );
}

export default MovieDetails;