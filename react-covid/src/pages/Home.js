import axios from "axios";
import { useEffect } from "react";
import GlobalSection from "../components/GlobalSection/GlobalSection";
import Hero from "../components/Hero/Hero";
import ENDPOINTS from "../utils/constants/endpoints";

function Home() {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    getGlobal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getGlobal = async () => {
    const response = await axios(ENDPOINTS.GLOBAL).then((res) => {
      return res.data;
    });
    console.log(response);
  };

  return (
    <>
      <Hero />
      <GlobalSection title="Global" />
    </>
  );
}
export default Home;
