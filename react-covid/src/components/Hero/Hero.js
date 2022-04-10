import styles from "./Hero.module.css";
import mainLogo from "../../assets/img/medical.png"


function Hero() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.hero__left}>
          <h2 className={styles.hero__title}>Covid ID</h2>
          <h3 className={styles.hero__sub_title}>
            Monitoring Perkembangan Covid
          </h3>
          <p className={styles.hero__description}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since.
          </p>
          <button className={styles.hero__button}>Vaccine</button>
        </div>
        <div className="hero__right">
          <img
            className={styles.hero__image}
            src={mainLogo}
            width="536"
            height="354"
            alt="placeholder"
          />
        </div>
      </section>
    </div>
  );
}

export default Hero;