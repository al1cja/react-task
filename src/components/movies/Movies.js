import styled from 'styled-components';
import Movie from './Movie';

const MoviesWrapper = styled.div`
    > h2 {
        text-align: left;
        padding: 1rem 1rem 0 1rem;
    }
`;

const Movies = (props) => {
    const movies = props.allCategories ? props.movies : props.categoryMovies;

    return(
        <MoviesWrapper>
            <h2>Top 10 iMDb Movies</h2>
            {movies.map(movie =>
                <Movie key={movie.title} movie={movie} />
            )}
        </MoviesWrapper>
    );
}

export default Movies;