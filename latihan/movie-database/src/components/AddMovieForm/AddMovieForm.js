import { nanoid } from "nanoid";
import { useState } from "react";
import Alert from "../Alert/Alert";
import Button from "../ui/button";
import styles from "./AddMovieForm.module.css"
function AddMovieForm(props) {
    const { movies, setMovies } = props;

    // membuat state object
    const [formData, setFormData] = useState({
        title: "",
        date: "",
        poster: "",
        type: ""
    });
    const { title, date, poster, type } = formData;

    // membuat state object validasi
    const [isError, setIsError] = useState({
        isTitleError: false,
        isDateError: false,
        isPosterError: false,
        isTypeError: false
    })
    const { isTitleError, isDateError, isPosterError, isTypeError } = isError;

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }
    function validation() {
        if (title === "") {
            setIsError({ ...isError, isTitleError: true })
            return false;
        } else if (date === "") {
            setIsError({ ...isError, isDateError: true, isTitleError: false })
            return false;
        } else if (poster === "") {
            setIsError({ ...isError, isPosterError: true, isDateError: false })
            return false;
        } else if (type === "") {
            setIsError({ ...isError, isTypeError: true, isPosterError: false })
            return false;
        } else {
            setIsError({
                isTitleError: false,
                isDateError: false,
                isPosterError: false,
                isTypeError: false,
            })
            return true
        }
    }
    function addMovie() {
        const movie = {
            id: nanoid(),
            title: title,
            year: date,
            type: type,
            poster: poster,
        }

        setMovies([...movies, movie])
        return true;
    }
    function resetForm() {
        setFormData({
            title: "",
            date: "",
            poster: "",
            type: ""
        })
    }
    function handleSubmit(e) {
        // mencegah perilaku default: refersh
        e.preventDefault();
        validation() && addMovie() && resetForm();
    }

    return (
        <div className={styles.container}>
            <section className={styles.addmovie}>
                <div className={styles.addmovie__left}>
                    <img
                        className={styles.addmovie__image}
                        src="https://picsum.photos/536/354?grayscale"
                        alt="placeholder"
                    />
                </div>
                <div className={styles.addmovie__right}>
                    <div className={styles.addmovie_form}>
                        <h2 className={styles.addmovie__title}>Add Movie</h2>
                        <form onSubmit={handleSubmit}>
                            <div className={styles.form__group}>
                                <label htmlFor="title" className={styles.form__label}>
                                    Title
                                </label>
                                <input
                                    id="title"
                                    className={styles.form__input}
                                    type="text"
                                    name="title"
                                    value={title}
                                    onChange={handleChange}
                                />
                                {isTitleError && <Alert>Title Wajib Diisi</Alert>}
                            </div>
                            <div className={styles.form__group}>
                                <label htmlFor="date" className={styles.form__label}>
                                    Date
                                </label>
                                <input
                                    id="date"
                                    className={styles.form__input}
                                    type="text"
                                    name="date"
                                    value={date}
                                    onChange={handleChange}
                                />
                                {isDateError && <Alert>Date Wajib Diisi</Alert>}
                            </div>
                            <div className={styles.form__group}>
                                <label htmlFor="poster" className={styles.form__label}>
                                    Poster
                                </label>
                                <input
                                    onChange={handleChange}
                                    id="poster"
                                    className={styles.form__input}
                                    name="poster"
                                    type="text"
                                    value={poster}
                                />
                                {isPosterError && <Alert>Poster Wajib Diisi</Alert>}
                            </div>
                            <div className={styles.form__group}>
                                <label htmlFor="type" className={styles.form__label}>
                                    Type
                                </label>
                                <select
                                    id="type"
                                    className={styles.form__select}
                                    name="type"
                                    value={type}
                                    onChange={handleChange}
                                >
                                    <option value="Action">Action</option>
                                    <option value="Drama">Drama</option>
                                    <option value="Horor">Horor</option>
                                </select>
                                {isTypeError && <Alert>Type Wajib Diisi</Alert>}
                            </div>
                            <div>
                                <Button variant="secondary" full>Add Movie</Button>
                            </div>
                        </form>
                    </div>

                </div>
            </section>
        </div>
    );
}

export default AddMovieForm;