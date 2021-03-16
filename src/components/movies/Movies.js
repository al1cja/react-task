import styled from 'styled-components';
import Movie from './Movie';

const MoviesWrapper = styled.div`
    > h2 {
        text-align: left;
        padding: 1rem 1rem 0 1rem;
    }
`;

const Movies = (props) => (
    <MoviesWrapper>
        <h2>Top 10 iMDb Movies</h2>
        {props.movies.map(movie =>
            <Movie key={movie.title} movie={movie} />
        )}
    </MoviesWrapper>
);

export default Movies;