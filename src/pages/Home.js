import { useEffect, useState } from 'react';
import Header from '../components/movies/Header';
import MoviesPage from '../components/movies/MoviesPage';
import IsLoading from '../components/loading/IsLoading';

const Home = () => {
    const[movies, setMovies] = useState([]);
    const[categories, setCategories] = useState([]);
    const[searchValue, setSearchValue] = useState("");
    
    useEffect(() => {
        fetch('http://localhost:3001/movies', {method: 'get'})
            .then(response => response.json())
            .then(data => setMovies(data));

        fetch('http://localhost:3001/categories', {method: 'get'})
            .then(response => response.json())
            .then(data => setCategories(data));
    }, []);

    const handleSearch = (e) => {
        setSearchValue(e);
    }

    const filteredMovies = movies.filter(movie => 
        movie.title.toLowerCase().includes(searchValue.toLowerCase()));


    const content = (movies.length>0 && categories.length>0) 
    ? <MoviesPage 
        movies={filteredMovies} 
        categories={categories}
        search={handleSearch}
        searchValue={searchValue} />
    : <IsLoading />

    return (
        <>
            <Header />
            {content}
            {console.log(filteredMovies)}
        </>
    )
}

export default Home;