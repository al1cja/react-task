import styled from 'styled-components';
import LoginBox from '../components/login/LoginBox';

const LoginWrapper = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
`;

const Login = () => {
    return (
        <LoginWrapper>
            <LoginBox />
        </LoginWrapper>
    )
}

export default Login;