import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";
import { useEffect, useState } from "react";
import axios from "axios";
import ENDPOINTS from "../../utils/constants/endpoints";
function TopRatedMovie() {
    const [movies, setMovies] = useState([]);


    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        getPopularMovies()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    async function getPopularMovies() {
        const response = await axios(ENDPOINTS.TOP_RATED)
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