import styled from 'styled-components';

const MovieWrapper = styled.div`
    margin: 1rem;
    box-shadow: 0 0 1em #bec9cf;
    display: flex;

    > div {
        display: flex;
        flex-flow: column;
        text-align: left;
        padding: 0 1rem;
    }
`;

const Movie = (props) => (
    <MovieWrapper>
        <img alt="cover" src={props.movie.cover}/>
        <div>
            <h3>{props.movie.title}</h3>
            {console.log(props.movie)}
        </div>
    </MovieWrapper>
)

export default Movie;