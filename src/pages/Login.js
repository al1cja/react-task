import { useEffect, useState } from 'react';
import { withRouter, useHistory, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import IsLoading from '../components/loading/IsLoading';
import LoginBox from '../components/login/LoginBox';

const LoginWrapper = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
`;

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    const isAuth = localStorage.getItem('User') === null
        ? false
        : true;

    const handleLogin = (e) => {
        e.preventDefault();

        if(password!=="" && username!=="") {
            fetch('http://localhost:3001/login', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            })
                .then(response => response.json())
                .then(data => handleData(data));
            }
        else {
            setMessage("Input Username and Password");
            fadeMessage();
        }
    }

    const handleUsername = (e) => {
        setUsername(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const setData = (data) => {
        localStorage.setItem('User', JSON.stringify(data.player));
        localStorage.setItem('UserName', username);
    }

    const handleData = (data) => {
        if (data.status === "success") {
            setIsLoading(true);
            setData(data);
            history.push("/");
        }
        else {
            setMessage("Wrong Username or Password");
            fadeMessage();
        }
    }

    const fadeMessage = () => {
        const timer = setTimeout(() => {
            setMessage("");
        }, 2000);
        return () => clearTimeout(timer);
    }

    const content = isLoading
    ? <IsLoading />
    : <LoginBox 
        changeUsername={handleUsername}
        changePassword={handlePassword}
        login={handleLogin}
        message={message}/>

    return (
        <>
            {!isAuth && <LoginWrapper>
                {content}
            </LoginWrapper> }
            {isAuth && <Redirect to="/" />}
        </>
    )
}

export default withRouter(Login);