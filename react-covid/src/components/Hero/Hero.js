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
            Pandemi Covid-19 adalah peristiwa menyebarnya Penyakit koronavirus 2019
            (Bahasa Inggris: Coronavirus disease 2019, disingkat Covid-19) di seluruh dunia untuk semua Negara.
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