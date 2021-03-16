import styled from 'styled-components';

const LoginWrapper = styled.div`
    margin-top: 2rem;
    padding: 3rem 0;
    width: 45%;
    max-width: 1000px;
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

    > form {
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

    > p {
        margin: 0;
        height: 30px;
        color: #05405e;
    }
`;

const LoginBox = (props) => {
    const message = props.message!="" 
    ? <p>{props.message}</p>
    : <p> </p>;

    return (
    <LoginWrapper>
        <h2>Login</h2>
        <form onSubmit={props.login}>
            <label>
                Username: 
                <input type="text" onChange={props.changeUsername} />
            </label>
            <label>
                Password: 
                <input type="password" onChange={props.changePassword} />
            </label>
            <input className="primaryBtn" type="submit" value="Login" />
        </form>
        {message}
    </LoginWrapper>
    )
}

export default LoginBox;