import styled from 'styled-components';

const CategoriesWrapper = styled.div`
    text-align: left;
    padding-left: 1rem;

    > h2 {
        padding-top: 1rem;
    }

    > input {
        border: 1px solid #05405e;
        border-radius: 20px;
        padding: .3rem 1rem;
        margin-top: .2rem;

        &:focus {
            outline: none;
        }
    }
`;

const Categories = (props) => (
    <CategoriesWrapper>
        <h2>Categories</h2>
        <input type="text"  placeholder="Search movie" />
    </CategoriesWrapper>
);

export default Categories;