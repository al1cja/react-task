import Categories from "./Categories";
import Movies from "./Movies";
import styled from 'styled-components';

const PageWrapper = styled.div`
    display: grid;
    grid-template-columns: 70% 30%;
`;

const MoviesPage = (props) => (
    <PageWrapper>
        <Movies movies={props.movies} />
        <Categories categories={props.categories} />
    </PageWrapper>
)

export default MoviesPage