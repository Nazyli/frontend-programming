import styles from "./Footer.module.css";
import Heading from "../ui/heading";

function Footer() {
  return (
    <div className={styles.container}>
      <nav className={styles.footer}>
        <div>
          <Heading level="1" variant="light" align="center">
            Covid Id
          </Heading>
          <p className={styles.footer__author}>
            Developed by Evry Nazyli Ciptanto
          </p>
        </div>
        <div>
          <ul className={styles.footer__list}>
            <li className={styles.footer__item}>Global</li>
            <li className={styles.footer__item}>Indonesia</li>
            <li className={styles.footer__item}>Provinsi</li>
            <li className={styles.footer__item}>About</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Footer;
