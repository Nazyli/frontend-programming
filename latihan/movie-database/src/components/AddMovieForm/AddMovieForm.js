import { nanoid } from "nanoid";
import { useState } from "react";
import Alert from "../Alert/Alert";
import styles from "./AddMovieForm.module.css"
function AddMovieForm(props) {
    const { movies, setMovies } = props;

    // membuat state untuk title dan date

    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");

    // membuat state validasi
    const [isTitleError, setIsTitleError] = useState(false);
    const [isDateError, setIsDateError] = useState(false);

    function handleTitle(e) {
        setTitle(e.target.value);
    }
    function handleDate(e) {
        setDate(e.target.value);
    }
    function handleSubmit(e) {
        // mencegah perilaku default: refersh
        e.preventDefault();
        if (title === "") {
            setIsTitleError(true)
        } else if (date === "") {
            setIsDateError(true);
        } else {
            const movie = {
                id: nanoid(),
                title: title,
                year: date,
                type: "Mobie",
                poster: "https://picsum.photos/200/300?random=" + nanoid(2),
            }

            setMovies([...movies, movie])
            setIsTitleError(false)
            setIsDateError(false)
        }

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
                                onChange={handleTitle}
                                type="text"
                                id="title"
                                className={styles.addmovie__input}
                                value={title} /><br />
                            {isTitleError && <Alert>Title Wajib Diisi</Alert>}
                            <label for="year" className={styles.addmovie__label}>Year</label><br />
                            <input
                                onChange={handleDate}
                                type="number "
                                id="date"
                                className={styles.addmovie__input}
                                value={date} /><br />
                            {isDateError && <Alert>Date Wajib Diisi</Alert>}
                            <input type="submit" value="Submit" className={styles.addmovie__submit} />
                        </form>
                    </div>

                </div>
            </section>
        </div>
    );
}

export default AddMovieForm;