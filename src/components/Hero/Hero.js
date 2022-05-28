import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../ui/button";
import { StyledHero, ComponentOne, ComponentTwo } from "./Hero.styled";

function Hero() {
  // membuat state movie
  const [movie, setMovie] = useState("");
  const API_KEY = process.env.REACT_APP_API_KEY;
  const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
  const trailer =
    movie && `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(getDetailMovie, []);

  // GET 1 Trending
  async function getTrendingMovie() {
    const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
    const response = await axios(URL);
    return response.data.results[Math.floor(Math.random() * 20 + 1)];
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function getDetailMovie() {
    // get id trending
    const trendingMovie = await getTrendingMovie();
    const id = trendingMovie.id;

    // get detail
    const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;
    const response = await axios(URL);
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
