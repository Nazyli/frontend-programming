import { useState } from "react";
import styles from "./AddCovidForm.module.css"
import formLogo from "../../assets/img/conceptual_idea.png"

function AddCovidForm(props) {
    const { provinces, setProvinces } = props;

    const [state, setState] = useState({
        provinsi: "",
        status: "",
        jumlah: "",
    })
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
    function handleSubmit(e) {
        e.preventDefault();
        if (state.provinsi === "") {
            setIsError({ ...isError, provinsi: true })
        } else if (state.status === "") {
            setIsError({ ...isError, status: true })
        } else if (state.jumlah === 0) {
            setIsError({ ...isError, jumlah: true })
        } else {
            const province = provinces.find(function (data) {
                return data.kota === state.provinsi;
            });
            if (province) {
                let jml = parseInt(state.jumlah);
                if (state.status === "positif") {
                    province.kasus += jml;
                } else if (state.status === "sembuh") {
                    province.sembuh += jml;
                } else if (state.status === "meninggal") {
                    province.meninggal += jml;
                } else if (state.status === "dirawat") {
                    province.dirawat += jml;
                }
                setProvinces([...provinces])
            }
            setIsError({
                provinsi: false,
                status: false,
                jumlah: false,
            })
        }
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
                            <select onChange={handleChange} className={styles.form__select} name="provinsi">
                                <option></option>
                                {
                                    provinces.map(function (data) {
                                        return (
                                            <option value={data.kota}>{data.kota}</option>
                                        )
                                    })
                                }
                            </select>
                            {isError.provinsi && <p>Provinsi Wajib Diisi</p>}
                        </div>

                        <div className={styles.form__group}>
                            <label htmlFor="status" className={styles.form__label}>
                                Status
                            </label>
                            <select onChange={handleChange} className={styles.form__select} name="status">
                                <option></option>
                                <option value="positif">Positif</option>
                                <option value="sembuh">Sembuh</option>
                                <option value="dirawat">Dirawat</option>
                                <option value="meninggal">Meninggal</option>
                            </select>
                            {isError.status && <p>Status Wajib Diisi</p>}
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
                            />
                            {isError.jumlah && <p>Jumlah Wajib Diisi</p>}
                        </div>
                        <input type="submit" value="Submit" className={styles.form__submit} />
                    </form>

                </div>
            </section>
        </div>
    );
}

export default AddCovidForm;