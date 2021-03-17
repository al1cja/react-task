import { useEffect, useState } from 'react';
import styled from 'styled-components';
import IsLoading from '../loading/IsLoading';
import Logout from '../logout/Logout';

const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    width: 100%;
    min-height: 100px; 
    background: #05405e;
    flex-wrap: wrap;

    > div {
        display: flex;
        color: #ebf3f7;

        > img {
            padding: 10px;
        }

        > div {
            padding: 10px;
            display: flex;
            flex-flow: column;
            align-items: flex-start;
            justify-content: space-around;

            > h3 {
                margin: 0;
            }

            > div {
                display: flex;
                flex-wrap: wrap;
                font-size: 15px;
                font-style: italic;

                > p:nth-of-type(1) {
                    font-weight: bold;
                    font-style: normal;
                }
                
                > p {
                    margin-right: .5rem;
                }
            }
        }
    }

    
`;

const Header = () => {
    const [userData, setUserData] = useState();
    const [username, setUsername] = useState();

    useEffect(() => {
        setUserData(JSON.parse(localStorage.getItem('User')));
        setUsername(localStorage.getItem('UserName'));
    }, []);

    const content = (userData === undefined || username === undefined )
    ? <IsLoading />
    : <div>
        <img alt="avatar" src={userData.avatar} />
        <div>
            <h3>{userData.name}</h3>
            <div>
                <p>@{username}</p>
                <p>{userData.event}</p>
            </div>
        </div>
    </div>

    return (
        <HeaderWrapper>
            {content}
            <div>
                <Logout username={username}/>
            </div>
        </HeaderWrapper>
    );
}

export default Header;