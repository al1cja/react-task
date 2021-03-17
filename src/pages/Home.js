import { useEffect, useState } from 'react';
import Header from '../components/movies/Header';
import MoviesPage from '../components/movies/MoviesPage';
import IsLoading from '../components/loading/IsLoading';

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [categories, setCategories] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [selectedCategory, setSelectedCategory] = useState();
    const [allCategories, setAllCategories] = useState(true);
    
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

    const handleSelectCategory = (e) => {
        setSelectedCategory(e);
        setAllCategories(false);
    }

    const filteredMovies = movies.filter(movie => 
        movie.title.toLowerCase().includes(searchValue.toLowerCase()));

    const filteredByCategories = filteredMovies.filter(movie => 
        movie.categories.includes(selectedCategory));


    const content = (movies.length>0 && categories.length>0) 
    ? <MoviesPage 
        movies={filteredMovies}
        categoryMovies={filteredByCategories}
        allCategories={allCategories}
        categories={categories}
        search={handleSearch}
        searchValue={searchValue}
        selectAllCategories={() => setAllCategories(true)}
        allCategories={allCategories}
        selectCategory={handleSelectCategory}
        selectedCategory={selectedCategory} />
    : <IsLoading />

    return (
        <>
            <Header />
            {content}
        </>
    )
}

export default Home;