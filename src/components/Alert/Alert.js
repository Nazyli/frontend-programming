import styles from "./Alert.module.css";
function Alert({children}) {
    return (
        <div className={styles.alert}>
            <span className={styles.alert__title}>{children}</span>
        </div>
    );
}
export default Alert;