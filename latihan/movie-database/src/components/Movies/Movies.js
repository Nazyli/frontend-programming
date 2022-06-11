import { useSelector } from "react-redux";
import Movie from "../Movie/Movie";
import style from "./Movies.module.css";

function Movies(props) {
  const movies = useSelector((store) => store.moviesReducer.movies);

  return (
    <div className={style.container}>
      <section className={style.movies}>
        <h2 className={style.movies__title}>{props.title}</h2>
        <div className={style.movie__container}>
        {movies.map((movie) => {
              return <Movie key={movie.id} movie={movie} />;
            })}
        </div>
      </section>
    </div>
  );
}

export default Movies;