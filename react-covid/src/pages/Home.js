import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import GlobalSection from "../components/GlobalSection/GlobalSection";
import Hero from "../components/Hero/Hero";
import Summary from "../components/Summary/Summary";
import { updateGlobal, updateSummary } from "../features/globalSlice";
import ENDPOINTS from "../utils/constants/endpoints";

function Home() {
  const dispatch = useDispatch();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    getGlobal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getGlobal = async () => {
    await axios(ENDPOINTS.GLOBAL).then((res) => {
      dispatch(updateGlobal(res.data));
    });
    dispatch(updateSummary(ENDPOINTS.SUMMARY_GLOBAL));
  };

  return (
    <>
      <Hero />
      <GlobalSection title="Global" />
      <Summary title="Global" />
    </>
  );
}
export default Home;
