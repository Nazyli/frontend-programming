import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailMovie from "../../components/DetailMovie";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoints";

function Detail() {
    const { id } = useParams();
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getRecommendationMovies();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    async function getRecommendationMovies() {
        const response = await axios(ENDPOINTS.RECOMMENDATION(id));
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