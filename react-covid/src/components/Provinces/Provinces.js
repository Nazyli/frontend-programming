import styles from "./Provinces.module.css";
import TableProvinces from "./TableProvinces/TableProvinces";

function Provinces(props) {
  const { provinces } = props;

  return (
    <div className={styles.container}>
      <section>
        <h2 className={styles.section__title}>Provinsi</h2>
        <h3 className={styles.section__description}>Data Covid Berdasarkan Provinsi</h3>
        <TableProvinces provinces={provinces} />
      </section >
    </div >
  );
}

export default Provinces;