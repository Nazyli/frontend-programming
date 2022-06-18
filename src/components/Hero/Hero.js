import axios from "axios";
import { useEffect, useState } from "react";
import ENDPOINTS from "../../utils/constants/endpoints";
import Button from "../ui/button";
import { StyledHero, ComponentOne, ComponentTwo } from "./Hero.styled";

function Hero() {
  // membuat state movie
  const [movie, setMovie] = useState("");
  const genres = movie && movie.genres.map((genre) => genre.name).join(", ")
  const trailer = movie && movie.videos.results && `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(getDetailMovie, []);

  // GET 1 Trending
  async function getTrendingMovie() {
    const response = await axios(ENDPOINTS.TRENDING);
    return response.data.results[Math.floor((Math.random() * 20) + 1)];
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function getDetailMovie() {
    // get id trending
    const trendingMovie = await getTrendingMovie();
    const id = trendingMovie.id;

    // get detail
    const response = await axios(ENDPOINTS.DETAIL(id));
    setMovie(response.data);
  }

  return (
    <StyledHero>
      <section>
        <ComponentOne>
          <h2>{movie.title}</h2>
          <h3> {genres} </h3>
          <p>{movie.overview}</p>
          <Button as ="a" href ={trailer} target="_blank" variant="primary" size="lg">Watch</Button>
        </ComponentOne>
        <ComponentTwo>
          <img
            src={
              movie && `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
            }
            alt={movie.title}
          />
        </ComponentTwo>
      </section>
    </StyledHero>
  );
}

export default Hero;