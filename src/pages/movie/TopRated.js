import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";
import { useEffect } from "react";
import axios from "axios";
import ENDPOINTS from "../../utils/constants/endpoints";
import { updateMovie } from "../../features/moviesSlice";
import { useDispatch } from "react-redux";

function TopRatedMovie() {
    const dispatch = useDispatch();


    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        getPopularMovies()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    async function getPopularMovies() {
        const response = await axios(ENDPOINTS.TOP_RATED)
        dispatch(updateMovie(response.data.results))
    }

    return (
        <div>
            <Hero />
            <Movies title="Top Rated" />
        </div>
    );
}

export default TopRatedMovie;