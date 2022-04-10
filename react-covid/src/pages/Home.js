import Footer from "../components/Footer/Footer";
import GlobalSection from "../components/GlobalSection/GlobalSection";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";

function Main() {
  return (
    <main>
      <Hero />
      <GlobalSection />
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
