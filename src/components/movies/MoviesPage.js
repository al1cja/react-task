import Categories from "./Categories";
import Movies from "./Movies";
import styled from 'styled-components';

const PageWrapper = styled.div`
    display: grid;
    grid-template-columns: 70% 30%;

    @media (max-width: 700px) {
        display: flex;
        flex-flow: column;

        > .categories {
            order: -1;
        }
    }
`;

const MoviesPage = (props) => (
    <PageWrapper>
        <Movies 
            movies={props.movies}
            categoryMovies={props.categoryMovies}
            allCategories={props.allCategories} />
        <span className="categories" >
        <Categories 
            categories={props.categories}
            search={props.search}
            searchValue={props.searchValue}
            selectAllCategories={props.selectAllCategories}
            allCategories={props.allCategories}
            selectCategory={props.selectCategory}
            selectedCategory={props.selectedCategory} />
        </span>
    </PageWrapper>
)

export default MoviesPage