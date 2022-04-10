import styles from "./Provinces.module.css";

function Provinces(props) {
  const { provinces } = props;

  return (
    <div className={styles.container}>
      <section>
        <h2 className={styles.section__title}>Provinsi</h2>
        <h3 className={styles.section__description}>Data Covid Berdasarkan Provinsi</h3>
        <div className={styles.provinces_container}>
          <table className={styles.provinces_table}>
            <thead>
              <tr>
                <th>No</th>
                <th>Provinsi</th>
                <th>Positif</th>
                <th>Sembuh</th>
                <th>Dirawat</th>
                <th>Meninggal</th>
              </tr>
            </thead>
            <tbody>
              {
                provinces.map(function (data, index) {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{data.kota}</td>
                      <td>{data.kasus}</td>
                      <td>{data.sembuh}</td>
                      <td>{data.dirawat}</td>
                      <td>{data.meninggal}</td>
                    </tr>
                  )
                })
              }
            </tbody>
            <tfoot></tfoot>
          </table>
        </div>
      </section >
    </div >
  );
}

export default Provinces;