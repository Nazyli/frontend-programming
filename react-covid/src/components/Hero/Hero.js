import styles from "./Hero.module.css";
import mainLogo from "../../assets/img/medical.png"
import Button from "../ui/button";
import Heading from "../ui/heading";


function Hero() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.hero__left}>
          <Heading level="2" variant="primary">Covid ID</Heading>
          <Heading level="3" variant="secondary">Monitoring Perkembangan Covid</Heading>
          <p className={styles.hero__description}>
            Pandemi Covid-19 adalah peristiwa menyebarnya Penyakit koronavirus 2019
            (Bahasa Inggris: Coronavirus disease 2019, disingkat Covid-19) di seluruh dunia untuk semua Negara.
          </p>
          <Button as ="a" href ="#" target="_blank" variant="primary" size="lg">Vaccine</Button>
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