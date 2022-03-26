import styles from "./AddMovieForm.module.css"
function AddMovieForm() {
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
                        <form action="/handlelogin">
                            <label for="title" className={styles.addmovie__label}>Title</label><br />
                            <input type="text" name="title" className={styles.addmovie__input} /><br />
                            <label for="year" className={styles.addmovie__label}>Year</label><br />
                            <input type="text" name="year" className={styles.addmovie__input} /><br />
                            <input type="submit" value="Submit" className={styles.addmovie__submit} />
                        </form>
                    </div>

                </div>
            </section>
        </div>
    );
}

export default AddMovieForm;