import styled from 'styled-components';
import { FiArrowRight } from 'react-icons/fi';

const CategoryWrapper = styled.div`
    margin: .7rem 0;
    width: 80%;
    padding: .2rem 1rem;
    cursor: pointer;
    font-weight: bold;
    border: 1px solid #ebf3f7;

    &.selected {
        background: #05405e;
        color: #ebf3f7!important;
        cursor: default;
    }

    > span {
        margin-left: 1rem;
    }

    &:hover {
        color: #05405e;
        border-color: #05405e;
    }
`;

const Category = (props) => (
    <CategoryWrapper 
        onClick={() => props.click(props.id)}
        className={props.isSelected ? "selected" : ""}>
        <FiArrowRight />
        <span>{props.name}</span>
    </CategoryWrapper>
)

export default Category;