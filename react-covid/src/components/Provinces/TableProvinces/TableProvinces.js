import TableBody from "../TableBody/TableBody";
import TableHead from "../TableHead/TableHead";
import styles from "./TableProvinces.module.css";

function TableProvinces(props) {
  const { provinces } = props;
  return (
    <div className={styles.provinces_container}>
      <table className={styles.provinces_table}>
        <thead>
          <TableHead />
        </thead>
        <tbody>
          {
            provinces.map(function (data, index) {
              return <TableBody key={index} index={index} data={data} />
            })
          }
        </tbody>
        <tfoot></tfoot>
      </table>
    </div>
  );
};

export default TableProvinces;