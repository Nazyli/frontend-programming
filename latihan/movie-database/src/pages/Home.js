import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import { updateMovie } from "../features/moviesSlice";
import data from "../utils/constants/data";

function Home() {
  const dispatch = useDispatch();
  const [items, setItems] = useState(JSON.parse(localStorage.getItem("movie-database-items")));
  if (items == null) {
    localStorage.setItem("movie-database-items", JSON.stringify(data));
    setItems(data);
  }
  useEffect(() => { 
    dispatch(updateMovie(items));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <main>
        <Hero />
        <Movies title="Latest Movies" />
      </main>
    </div>
  );
}

export default Home;
