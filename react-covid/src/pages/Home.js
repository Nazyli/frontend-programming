import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import GlobalSection from "../components/GlobalSection/GlobalSection";
import Hero from "../components/Hero/Hero";
import Spinner from "../components/Spinner/Spinner";
import Summary from "../components/Summary/Summary";
import { updateGlobal, updateSummary } from "../features/globalSlice";
import ENDPOINTS from "../utils/constants/endpoints";

function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    getGlobal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getGlobal = async () => {
    setIsLoading(true)
    await axios(ENDPOINTS.GLOBAL).then((res) => {
      dispatch(updateGlobal(res.data));
      dispatch(updateSummary(ENDPOINTS.SUMMARY_GLOBAL));
      setTimeout(() => {
           setIsLoading(false);
         }, 1000);
    });
  };

  return (
    <>
      {isLoading ? <Spinner /> : <Hero />}
      {isLoading ? <Spinner /> : <GlobalSection title="Global" />}
      {isLoading ? <Spinner /> : <Summary title="Global" />}
    </>
  );
}
export default Home;
