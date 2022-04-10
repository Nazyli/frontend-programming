import styles from "./SectionCard.module.css";

function SectionCard(props) {
    const { dataCovid } = props;

    let classNameStatus;
    if (dataCovid.status === "Positif") {
        classNameStatus = styles.section__card__total_positif;
    } else if (dataCovid.status === "Sembuh") {
        classNameStatus = styles.section__card__total_sembuh;
    } else if (dataCovid.status === "Meninggal") {
        classNameStatus = styles.section__card__total_meninggal;
    }

    return (
        <div className={styles.section__card}>
            <h4 className={styles.section__card__status}>{dataCovid.status}</h4>
            <h4 className={`${styles.section__card__total} ${classNameStatus}`}>{dataCovid.total.toLocaleString("id-ID")}</h4>
        </div>

    );
}

export default SectionCard;