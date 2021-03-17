import { FaSpinner } from 'react-icons/fa';
import styled from 'styled-components';

const LoadingWrapper = styled.div`
    color: #05405e;

    > .spinner {
        animation: spin infinite 1s linear;
        color: #05405e;
        font-size: 50px;
        padding: 2rem;
      }
    
    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
`;

const IsLoading = () => (
    <LoadingWrapper>
        <FaSpinner className="spinner" />
    </LoadingWrapper>
)

export default IsLoading;