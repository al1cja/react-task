import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MovieWrapper = styled.div`
    margin: 1rem;
    box-shadow: 0 0 1em #bec9cf;
    display: flex;

    > div {
        display: flex;
        flex-flow: column;
        text-align: left;
        padding: 0 1rem;

        > a {
            text-decoration: none;
            color: #05405e;
        }
    }
`;

const MoreButton = styled(Link)``;

const Movie = (props) => (
    <MovieWrapper>
        <img alt="cover" src={props.movie.cover}/>
        <div>
            <h3>{props.movie.title}</h3>
            <MoreButton to={"/"+props.movie.title}>Read more</MoreButton>
        </div>
    </MovieWrapper>
)

export default Movie;