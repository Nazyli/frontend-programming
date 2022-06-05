import axios from "axios";
import { useEffect, useState } from "react";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";
import ENDPOINTS from "../../utils/constants/endpoints";

function PopularMovie() {
    const [ movies, setMovies ] = useState([]);


    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect( () => {
        getPopularMovies()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    async function getPopularMovies(){
        const response = await axios(ENDPOINTS.POPULAR)
        setMovies(response.data.results)
    }
    return (
        <div>
            <Hero />
            <Movies movies={movies} title="Popular Movie" />
        </div>
    );
}

export default PopularMovie;