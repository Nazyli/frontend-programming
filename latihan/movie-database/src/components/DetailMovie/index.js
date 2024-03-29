import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../ui/button";
import ENDPOINTS from "../../utils/constants/endpoints";
import StyledDetailMovie from "./DetailMovie.styled";

function DetailMovie() {
    const [movie, setMovie] = useState("");
    const { id } = useParams();
    const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
    const trailer = movie && `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`;

    useEffect(() => {
        getDetailMovie();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    async function getDetailMovie() {
        const response = await axios(ENDPOINTS.DETAIL(id));
        setMovie(response.data);
    }

    return (
        <StyledDetailMovie>
            <div className="poster">
                <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt="" />
            </div>
            <div className="info">
                <h2>{movie.title}</h2>
                <h3>{genres}</h3>
                <p>{movie.overview}</p>
                <Button as="a" href={trailer}> Watch</Button>
            </div>
        </StyledDetailMovie>
    );
} 

export default DetailMovie;