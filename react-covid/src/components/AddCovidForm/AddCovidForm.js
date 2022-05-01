import { useState } from "react";
import styles from "./AddCovidForm.module.css"
import formLogo from "../../assets/img/conceptual_idea.png"
import Alert from "../Alert/Alert"

function AddCovidForm(props) {
    const { provinces, setProvinces } = props;

    const [state, setState] = useState({
        provinsi: "",
        status: "",
        jumlah: "",
    })
    const { provinsi, status, jumlah } = state;

    const [isError, setIsError] = useState({
        provinsi: false,
        status: false,
        jumlah: false,
    })

    const handleChange = e => {
        setState({
            ...state, [e.target.name]: e.target.value
        })
    }

    const validation = () => {
        if (provinsi === "") {
            setIsError({ ...isError, provinsi: true })
            return false;
        } else if (status === "") {
            setIsError({ ...isError, status: true })
            return false;
        } else if (jumlah === "") {
            setIsError({ ...isError, jumlah: true })
            return false;
        } else {
            setIsError({ provinsi: false, status: false, jumlah: false, })
            return true;
        }
    }
    const findProvincesByKota = (kota) => provinces.find(e => e.kota === kota);

    const updateTotalStatus = () => {
        const province = findProvincesByKota(provinsi);
        if (province) {
            let jml = parseInt(jumlah);
            if (status === "positif") {
                province.kasus += jml;
            } else if (status === "sembuh") {
                province.sembuh += jml;
            } else if (status === "meninggal") {
                province.meninggal += jml;
            } else if (status === "dirawat") {
                province.dirawat += jml;
            }
            setProvinces([...provinces])
            return true;
        }
        return false;
    }

    const resetForm = () => {
        setState({ provinsi: "", status: "", jumlah: "" });
        return true;
    }
    function handleSubmit(e) {
        e.preventDefault();
        validation() && updateTotalStatus() && resetForm();
    }

    return (
        <div className={styles.container}>
            <section className={styles.addcovid__form}>
                <div className={styles.addcovid__form_left}>
                    <img
                        className={styles.addcovid__image}
                        src={formLogo}
                        alt="placeholder"
                    />
                </div>
                <div className={styles.addcovid__form_right}>
                    <h2 className={styles.addcovid__title}>Form Covid</h2>
                    <form onSubmit={handleSubmit} >
                        <div className={styles.form__group}>
                            <label htmlFor="provinsi" className={styles.form__label}>
                                Provinsi
                            </label>
                            <select onChange={handleChange} className={styles.form__select} name="provinsi" value={provinsi}>
                                <option value=""></option>
                                {
                                    provinces.map(function (data, index) {
                                        return (
                                            <option key={index} value={data.kota}>{data.kota}</option>
                                        )
                                    })
                                }
                            </select>
                            {isError.provinsi && <Alert>Provinsi Wajib Diisi</Alert>}
                        </div>

                        <div className={styles.form__group}>
                            <label htmlFor="status" className={styles.form__label}>
                                Status
                            </label>
                            <select onChange={handleChange} className={styles.form__select} name="status" value={status}>
                                <option value=""></option>
                                <option value="positif">Positif</option>
                                <option value="sembuh">Sembuh</option>
                                <option value="dirawat">Dirawat</option>
                                <option value="meninggal">Meninggal</option>
                            </select>
                            {isError.status && <Alert>Status Wajib Diisi</Alert>}
                        </div>

                        <div className={styles.form__group}>
                            <label htmlFor="jumlah" className={styles.form__label}>
                                Jumlah
                            </label>
                            <input
                                onChange={handleChange}
                                name="jumlah"
                                id="jumlah"
                                className={styles.form__input}
                                type="number"
                                value={jumlah}
                            />
                            {isError.jumlah && <Alert>Jumlah Wajib Diisi</Alert>}
                        </div>
                        <input type="submit" value="Submit" className={styles.form__submit} />
                    </form>

                </div>
            </section>
        </div>
    );
}

export default AddCovidForm;