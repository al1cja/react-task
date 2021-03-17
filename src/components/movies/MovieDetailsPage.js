import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { BsFillPlayFill } from 'react-icons/bs';

const MovieWrapper = styled.div`
    display: flex;
    flex-flow: column;
    text-align: left;

    > a.goBack {
        text-decoration: none;
        border: 2px solid #05405e;
        border-radius: 20px;
        max-width: 150px;
        margin: 1rem;
        padding: .2rem 1rem;
        color: #ebf3f7;
        cursor: pointer;
        background: #05405e;
        display: flex;
        align-items: center;
        font-size: 20px;

        &:hover {
            color: #05405e;
            background: #ebf3f7;
        }

        > svg {
            margin-right: 1rem;
        }
    }

    > div {
        display: flex;
        padding: 1rem;

        @media (max-width: 700px) {
            flex-flow: column;

            > img {
                align-self: center;
            }
        }

        > div {
            padding: 0 1rem;
        
            > a {
                width: 200px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-top: 2rem;
                text-decoration: none;
            }
        }
    }
`

const MovieDetailsPage = (props) => (
    <MovieWrapper>
        <Link to="/" className="goBack">
            <FiArrowLeft />
            Go back
        </Link>
        <div>
            <img alt="cover" src={props.movie.cover}/>
            <div>
                <h2>{props.movie.title}</h2>
                <p>{props.movie.storyline}</p>
                <a className="primaryBtn" target="_blank" href={props.movie.trailer}>
                    <BsFillPlayFill />
                    Play trailer
                </a>
            </div>
        </div>
    </MovieWrapper>
);

export default MovieDetailsPage;