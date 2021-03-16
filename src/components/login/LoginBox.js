import styled from 'styled-components';

const LoginWrapper = styled.div`
    margin-top: 2rem;
    padding: 3rem 0;
    width: 45%;
    min-width: 300px;
    display: flex;
    flex-flow: column;
    align-items: center;
    background: #fff;
    box-shadow: 0 0 1em #bec9cf;

    > h2 {
        margin: 0;
        font-size: 40px;
    }

    > div {
        margin: 2rem 0;
        width: 50%;

        > label {
            width: 100%;
            margin-top: .7rem;
            display: flex;
            flex-flow: column;

            > input {
                border: 1px solid #05405e;
                border-radius: 20px;
                padding: .3rem 1rem;
                margin-top: .2rem;

                &:focus {
                    outline: none;
                }
            }
        }

        > input[type='submit'] {
            margin-top: 2rem;
            width: 100%;
        }
    }
`;

const LoginBox = (props) => (
    <LoginWrapper>
        <h2>Login</h2>
        <div>
            <label>
                Username: 
                <input type="text" />
            </label>
            <label>
                Password: 
                <input type="password" />
            </label>
            <input className="primaryBtn" type="submit" value="Login" />
        </div>
    </LoginWrapper>
)

export default LoginBox;