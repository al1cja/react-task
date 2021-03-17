import styled from 'styled-components';
import Category from './Category';

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

    > div {
        margin-top: 1rem;
    }
`;

const Categories = (props) => (
    <CategoriesWrapper>
        <h2>Categories</h2>
        <input 
            type="text" 
            placeholder="Search movie"
            value={props.searchValue}
            onChange={(e) => props.search(e.target.value)} />
        <div>
            <Category 
                name="All" 
                click={props.selectAllCategories}
                isSelected={props.allCategories}/>
            {props.categories.map(category => 
                <Category 
                    key={category.id} 
                    name={category.name}
                    id={category.id}
                    click={props.selectCategory}
                    isSelected={!props.allCategories && props.selectedCategory === category.id} />
            )}
        </div>
    </CategoriesWrapper>
);

export default Categories;