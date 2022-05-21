import { useEffect, useState } from "react";
import Button from "../ui/button";
import style from "./Hero.module.css";

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
    <div className={style.container}>
      <section className={style.hero}>
        <div className={style.hero__left}>
          <h2 className={style.hero__title}>{movie.Title}</h2>
          <h3 className={style.hero__genre}>
           Genre : {movie.Genre}
          </h3>
          <p className={style.hero__description}>
            {movie.Plot}
          </p>
          <Button variant = "primary">Watch</Button>
        </div>
        <div className="hero__right">
          <img
            className={style.hero__image}
            src={movie.Poster}
            alt={movie.Title}
          />
        </div>
      </section>
    </div>
  );
}

export default Hero;