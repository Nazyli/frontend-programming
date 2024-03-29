import axios from "axios";
import { useEffect } from "react";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";
import ENDPOINTS from "../../utils/constants/endpoints";
import { useDispatch } from "react-redux";
import { updateMovie } from "../../features/moviesSlice";


function PopularMovie() {
    const dispatch = useDispatch();


    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect( () => {
        getPopularMovies()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    async function getPopularMovies(){
        const response = await axios(ENDPOINTS.POPULAR)
        dispatch(updateMovie(response.data.results))
    }
    return (
        <div>
            <Hero />
            <Movies title="Popular Movie" />
        </div>
    );
}

export default PopularMovie;