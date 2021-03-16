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

        > a {
            text-decoration: none;
            margin-top: 1rem;
            width: 150px;
            text-align: center;
        }
    }
`;

const Movie = (props) => (
    <MovieWrapper>
        <img alt="cover" src={props.movie.cover}/>
        <div>
            <h3>{props.movie.title}</h3>
            <span>{props.movie.storyline}</span>
            <a className="primaryBtn" href={props.movie.trailer} target="_blank">
                Play trailer
            </a>
        </div>
    </MovieWrapper>
)

export default Movie;