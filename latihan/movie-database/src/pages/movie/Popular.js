import axios from "axios";
import { useEffect, useState } from "react";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";

function PopularMovie() {
    const API_KEY = process.env.REACT_APP_API_KEY
    const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`

    const [ movies, setMovies ] = useState([]);


    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect( () => {
        getPopularMovies()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    async function getPopularMovies(){
        const response = await axios(URL)
        setMovies(response.data.results)
    }
    console.log(movies)
    return (
        <div>
            <Hero />
            <Movies movies={movies} title="Popular Movie" />
        </div>
    );
}

export default PopularMovie;