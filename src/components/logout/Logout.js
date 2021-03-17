import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';

const LogoutBtn = styled.button`
    font-size: 20px;
    height: auto;
    align-self: center;
    margin: 10px;
    padding: .5rem 2rem;
    border: 3px solid #ebf3f7;
    border-radius: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;

    > svg {
        margin-right: 1rem;
    }

    &:hover {
        background: #05405e;
        color: #ebf3f7;
    }

    &:focus {
        outline: none;
    }
`

const Logout = (props) => {
    const history = useHistory();
    
    const handleLogout = () => {
        fetch('http://localhost:3001/logout', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: props.username
        })
    })
        .then(() => {localStorage.clear(); history.push("/login");});
    }

    return (
        <LogoutBtn onClick={handleLogout}>
            <FiLogOut />
            Logout
        </LogoutBtn>
    );
}

export default Logout;