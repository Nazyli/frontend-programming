import { useEffect, useState } from "react";
import Button from "../ui/button";
import { StyledHero, ComponentOne, ComponentTwo } from "./Hero.styled";


function Hero() {
  // membuat state movie
  const [movie, setMovie] = useState("");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function fetchMovie() {
    const url = "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590";

    const response = await fetch(url);
    const data = await response.json();

    setMovie(data);
  }
  useEffect(fetchMovie, [])

  console.log(movie);

  return (
    <StyledHero>
      <section>
        <ComponentOne>
          <h2>{movie.Title}</h2>
          <h3>Genre : {movie.Genre} </h3>
          <p>{movie.Plot}</p>
          <Button variant="primary" size="lg">Watch</Button>
        </ComponentOne>
        <ComponentTwo>
          <img src={movie.Poster} alt={movie.Title}
          />
        </ComponentTwo>
      </section>
    </StyledHero>
  );
}

export default Hero;