import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailMovie from "../../components/DetailMovie";
import Movies from "../../components/Movies/Movies";

function Detail() {
    const { id } = useParams();
    const [movies, setMovies] = useState([]);
    const API_KEY = process.env.REACT_APP_API_KEY;

    useEffect(() => {
        getRecommendationMovies();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    async function getRecommendationMovies() {
        const URL = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY}`;
        const response = await axios(URL);
        setMovies(response.data.results);
    }

    return (
        <>
            <DetailMovie />
            <Movies title="Recommendations" movies={movies} />
        </>
    );
}

export default Detail;