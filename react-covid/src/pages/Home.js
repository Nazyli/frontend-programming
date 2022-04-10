import { useState } from "react";
import Footer from "../components/Footer/Footer";
import GlobalSection from "../components/GlobalSection/GlobalSection";
import Provinces from "../components/Provinces/Provinces";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import data from "../utils/constants/provinces"
import AddCovidForm from "../components/AddCovidForm/AddCovidForm";

function Main() {
  const [provinces, setProvinces] = useState(data.provinces);

  return (
    <main>
      <Hero />
      <GlobalSection />
      <Provinces provinces={provinces} setProvinces={setProvinces} />
      <AddCovidForm provinces={provinces} setProvinces={setProvinces} />
    </main>
  );
}

function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}

export default Home;
