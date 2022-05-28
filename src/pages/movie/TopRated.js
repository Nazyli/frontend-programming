import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";
import { useEffect, useState } from "react";
import axios from "axios";
function TopRatedMovie() {
    const API_KEY = process.env.REACT_APP_API_KEY
    const URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`

    const [movies, setMovies] = useState([]);


    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        getPopularMovies()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    async function getPopularMovies() {
        const response = await axios(URL)
        setMovies(response.data.results)
    }

    return (
        <div>
            <Hero />
            <Movies movies={movies} title="Top Rated" />
        </div>
    );
}

export default TopRatedMovie;