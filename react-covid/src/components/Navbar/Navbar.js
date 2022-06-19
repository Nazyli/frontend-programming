import Heading from "../ui/heading";
import styles from "./Navbar.module.css"

function Navbar() {
  return (
    <div className={styles.container}>
        <nav className={styles.navbar}>
            <div>
                <Heading level="1" variant="light">Covid ID</Heading>
            </div>
            <div>
                <ul className={styles.navbar__list}>
                    <li className={styles.navbar__item}>Global</li>
                    <li className={styles.navbar__item}>Indonesia</li>
                    <li className={styles.navbar__item}>Provinsi</li>
                    <li className={styles.navbar__item}>About</li>
                </ul>
            </div>
        </nav>
    </div>
)
}

export default Navbar;
