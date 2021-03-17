import styled from 'styled-components';
import { FiArrowRight } from 'react-icons/fi';

const CategoryWrapper = styled.div`
    margin: .7rem 0;
    cursor: pointer;
    font-weight: bold;

    > span {
        margin-left: 1rem;
    }

    &:hover {
        color: #05405e;
    }
`;

const Category = (props) => (
    <CategoryWrapper>
        <FiArrowRight />
        <span>{props.name}</span>
    </CategoryWrapper>
)

export default Category;