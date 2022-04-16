import { nanoid } from "nanoid";
import { useState } from "react";
import Alert from "../Alert/Alert";
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

    // membuat state validasi
    const [isTitleError, setIsTitleError] = useState(false);
    const [isDateError, setIsDateError] = useState(false);
    const [isPosterError, setIsPosterError] = useState(false);
    const [isTypeError, setIsTypeError] = useState(false);

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }
    function validation() {
        if (title === "") {
            setIsTitleError(true)
            return false;
        } else if (date === "") {
            setIsDateError(true)
            setIsTitleError(false)
            return false;
        } else if (poster === "") {
            setIsPosterError(true)
            setIsDateError(false)
            return false;
        } else if (type === "") {
            setIsTypeError(true)
            setIsPosterError(false)
            return false;
        } else {
            setIsTitleError(false)
            setIsDateError(false)
            setIsPosterError(false)
            setIsTypeError(false)
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
                            <label for="title" className={styles.addmovie__label}>Title</label><br />
                            <input
                                name="title"
                                onChange={handleChange}
                                type="text"
                                id="title"
                                className={styles.addmovie__input}
                                value={title} /><br />
                            {isTitleError && <Alert>Title Wajib Diisi</Alert>}
                            <label for="year" className={styles.addmovie__label}>Year</label><br />
                            <input
                                name="date"
                                onChange={handleChange}
                                type="number "
                                id="date"
                                className={styles.addmovie__input}
                                value={date} /><br />
                            {isDateError && <Alert>Date Wajib Diisi</Alert>}
                            <label for="poster" className={styles.addmovie__label}>Poster</label><br />
                            <input
                                name="poster"
                                onChange={handleChange}
                                type="text"
                                id="poster"
                                className={styles.addmovie__input}
                                value={poster} /><br />
                            {isPosterError && <Alert>Poster Wajib Diisi</Alert>}
                            <label for="type" className={styles.addmovie__label}>Type</label><br />
                            <select onChange={handleChange} className={styles.addmovie__select} name="type">
                                <option></option>
                                <option value="action">Action</option>
                                <option value="drama">Drama</option>
                                <option value="comedy">Comedy</option>
                                <option value="romantic">Romantic</option>
                            </select>
                            {isTypeError && <Alert>Type Wajib Diisi</Alert>}

                            <input type="submit" value="Submit" className={styles.addmovie__submit} />

                        </form>
                    </div>

                </div>
            </section>
        </div>
    );
}

export default AddMovieForm;