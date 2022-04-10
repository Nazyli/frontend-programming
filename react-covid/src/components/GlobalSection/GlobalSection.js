import styles from "./GlobalSection.module.css";
import data from "../../utils/constants/indonesia"
import { useState } from "react";
import SectionCard from "./SectionCard/SectionCard"

function GlobalSection() {
  const [indonesia] = useState(data.indonesia);

  return (
    <div className={styles.container}>
      <section className={styles.global__section}>
        <h2 className={styles.section__title}>Indonesia</h2>
        <h3 className={styles.section__description}>Data Covid Berdasarkan Global</h3>
        <div className={styles.section__container}>
          {
            indonesia.map(function (dataCovid, i) {
              return <SectionCard dataCovid={dataCovid} key={i} />
            })
          }
        </div>
      </section>
    </div>
  );
}

export default GlobalSection;