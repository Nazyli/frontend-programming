import styles from "./Provinces.module.css";
import TableProvinces from "./TableProvinces/TableProvinces";
import Heading from "../ui/heading";


function Provinces(props) {
  const { provinces } = props;

  return (
    <div className={styles.container}>
      <section>
        <Heading level="2" variant="primary" align="center">
          Provinsi
        </Heading>
        <Heading level="3" variant="secondary" align="center">
          Data Covid Berdasarkan Provinsi
        </Heading>
        <TableProvinces provinces={provinces} />
      </section>
    </div>
  );
}

export default Provinces;
