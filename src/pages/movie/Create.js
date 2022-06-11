
import AddMovieForm from "../../components/AddMovieForm/AddMovieForm";
import Hero from "../../components/Hero/Hero";



function CreateMovie({movies, setMovies}) {
    return (
        <>
            <Hero />
            <AddMovieForm />
        </>
    );
}

export default CreateMovie;