import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import DetailMovie from "../../components/DetailMovie";
import Movies from "../../components/Movies/Movies";
import { updateMovie } from "../../features/moviesSlice";
import ENDPOINTS from "../../utils/constants/endpoints";

function Detail() {
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        getRecommendationMovies();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    async function getRecommendationMovies() {
        const response = await axios(ENDPOINTS.RECOMMENDATION(id));
        dispatch(updateMovie(response.data.results))

    }

    return (
        <>
            <DetailMovie />
            <Movies title="Recommendations" />
        </>
    );
}

export default Detail;