import { useEffect } from "react";


const Home = () => {

    useEffect(() => {
        let user = localStorage.getItem('User');
        console.log(user);
    }, []);
    return (
        <p>Home</p>
    )
}

export default Home;