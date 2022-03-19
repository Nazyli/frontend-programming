import style from "./Movies.module.css";

function Movies() {
  return (
    <div className={style.container}>
      <section className={style.movies}>
        <h2 className={style.movies__title}>Latest Movies</h2>
        <div className={style.movie__container}>
          {Array.apply(0, Array(11)).map(function (x, i) {
            let link = `https://picsum.photos/300/400?random=${i}`;
            return (
              <div className={style.movie}>
                <img
                  className={style.movie__image}
                  src={link}
                  alt=""
                />
                <h3 className={style.movie__title}>Movie Title {i}</h3>
                <p className={style.movie__date}>Date Title {i}</p>
              </div>
            );
          })}

        </div>
      </section>
    </div>
  );
}

export default Movies;