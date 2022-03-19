import style from "./Hero.module.css";

function Hero() {
  return (
    <div className={style.container}>
      <section className={style.hero}>
        <div className={style.hero__left}>
          <h2 className={style.hero__title}>Spiderman</h2>
          <h3 className={style.hero__genre}>
            Genre: Drama, Thriller
          </h3>
          <p className={style.hero__description}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
            cum accusamus quisquam earum velit ea nobis maiores exercitationem
            nam temporibus.
          </p>
          <button className={style.hero__button}>Watch</button>
        </div>
        <div className="hero__right">
          <img
            className={style.hero__image}
            src="https://picsum.photos/536/354"
            alt="placeholder"
          />
        </div>
      </section>
    </div>
  );
}

export default Hero;