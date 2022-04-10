import Footer from "../components/Footer/Footer";
import Hello from "../components/Hello";
import Navbar from "../components/Navbar/Navbar";

function Main() {
  return (
    <main>
      <h1>Final Project - Covid ID</h1>
      <h2>Good Luck, Bestie</h2>
      <Hello />
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
