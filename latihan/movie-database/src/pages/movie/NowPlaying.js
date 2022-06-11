import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";
import { useEffect } from "react";
import axios from "axios";
import ENDPOINTS from "../../utils/constants/endpoints";
import { useDispatch } from "react-redux";
import { updateMovie } from "../../features/moviesSlice";

function NowPlayingMovie() {
  const dispatch = useDispatch();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    getPopularMovies()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async function getPopularMovies() {
    const response = await axios(ENDPOINTS.NOW_PLAYING)
    dispatch(updateMovie(response.data.results))
  }

  return (
    <div>
      <Hero />
      <Movies title="Now Playing Movie" />
    </div>
  );
}

export default NowPlayingMovie;