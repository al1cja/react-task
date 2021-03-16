import { useState } from 'react';
import styled from 'styled-components';
import LoginBox from '../components/login/LoginBox';

const LoginWrapper = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
`;

const Login = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [userDara, setUserData] = useState();

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

    const handleData = (data) => {
        if (data.status === "success") {
            setUserData(data.player);
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

    return (
        <LoginWrapper>
            <LoginBox 
                changeUsername={handleUsername}
                changePassword={handlePassword}
                login={handleLogin}
                message={message}/>
        </LoginWrapper>
    )
}

export default Login;