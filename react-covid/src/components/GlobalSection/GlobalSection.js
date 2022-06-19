import styles from "./GlobalSection.module.css";
import data from "../../utils/constants/indonesia"
import { useState } from "react";
import SectionCard from "./SectionCard/SectionCard"
import Heading from "../ui/heading";

function GlobalSection() {
  const [indonesia] = useState(data.indonesia);

  return (
    <div className={styles.container}>
      <section className={styles.global__section}>
      <Heading level="2" variant="primary" align="center">Indonesia</Heading>
      <Heading level="3" variant="secondary" align="center">Data Covid Berdasarkan Global</Heading>
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