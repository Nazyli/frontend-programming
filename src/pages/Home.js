// import { useDispatch } from "react-redux";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
// import { updateMovie } from "../features/moviesSlice";
// import data from "../utils/constants/data";

function Home() {
    // const dispatch = useDispatch();
    // dispatch(updateMovie(data))

    return (
        <div>
            <main>
                <Hero />
                <Movies title="Latest Movies" />
            </main>
        </div>
    );
};

export default Home;