import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import CreateMovie from "./pages/movie/Create";
import NowPlayingMovie from "./pages/movie/NowPlaying";
import PopularMovie from "./pages/movie/Popular";
import TopRatedMovie from "./pages/movie/TopRated";
import { ThemeProvider } from "styled-components";
import theme from "./utils/constants/theme"

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/create" element={<CreateMovie />} />
            <Route path="/movie/popular" element={<PopularMovie />} />
            <Route path="/movie/now" element={<NowPlayingMovie />} />
            <Route path="/movie/top" element={<TopRatedMovie />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </div>
  );
}

export default App;
