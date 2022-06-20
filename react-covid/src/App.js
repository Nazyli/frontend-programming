import { ThemeProvider } from "styled-components";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import theme from "./utils/constants/theme";
import Indonesia from "./pages/covid/Indonesia";
import Provinsi from "./pages/covid/Provinsi";
import About from "./pages/covid/About/About";

function App() {
  return (
    <div>
      {/*
       * Render Halaman Home
       * Jika ingin diubah, maka ubah di Halaman Home.
       */}
      <ThemeProvider theme={theme}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/indonesia" element={<Indonesia />} />
            <Route path="/provinsi" element={<Provinsi />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </div>
  );
}

export default App;
