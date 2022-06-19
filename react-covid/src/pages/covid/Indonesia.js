import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import GlobalSection from "../../components/GlobalSection/GlobalSection";
import Hero from "../../components/Hero/Hero";
import Summary from "../../components/Summary/Summary";
import { updateGlobal, updateSummary } from "../../features/globalSlice";
import ENDPOINTS from "../../utils/constants/endpoints";

function Indonesia() {
  const dispatch = useDispatch();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    getIndonesia();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getIndonesia = async () => {
    await axios(ENDPOINTS.INDONESIA).then((res) => {
      dispatch(updateGlobal(res.data));
    });
    dispatch(updateSummary(ENDPOINTS.SUMMARY_INDONESIA));
  };
  return (
    <>
      <Hero />
      <GlobalSection title="Indonesia" />
      <Summary title="Indonesia" />
    </>
  );
}

export default Indonesia;