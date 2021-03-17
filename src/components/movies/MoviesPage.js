import Categories from "./Categories";
import Movies from "./Movies";
import styled from 'styled-components';

const PageWrapper = styled.div`
    display: grid;
    grid-template-columns: 70% 30%;
`;

const MoviesPage = (props) => (
    <PageWrapper>
        <Movies 
            movies={props.movies}
            categoryMovies={props.categoryMovies}
            allCategories={props.allCategories} />
        <Categories 
            categories={props.categories}
            search={props.search}
            searchValue={props.searchValue}
            selectAllCategories={props.selectAllCategories}
            allCategories={props.allCategories}
            selectCategory={props.selectCategory}
            selectedCategory={props.selectedCategory} />
    </PageWrapper>
)

export default MoviesPage