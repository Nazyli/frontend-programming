import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import GlobalSection from "../../components/GlobalSection/GlobalSection";
import Hero from "../../components/Hero/Hero";
import Spinner from "../../components/Spinner/Spinner";
import Summary from "../../components/Summary/Summary";
import { updateGlobal, updateSummary } from "../../features/globalSlice";
import ENDPOINTS from "../../utils/constants/endpoints";

function Indonesia() {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    getIndonesia();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getIndonesia = async () => {
    setIsLoading(true);
    await axios(ENDPOINTS.INDONESIA).then((res) => {
      dispatch(updateGlobal(res.data));
      dispatch(updateSummary(ENDPOINTS.SUMMARY_INDONESIA));
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    });
  };
  return (
    <>
      {isLoading ? <Spinner /> : <Hero />}
      {isLoading ? <Spinner /> : <GlobalSection title="Indonesia" />}
      {isLoading ? <Spinner /> : <Summary title="Indonesia" />}
    </>
  );
}

export default Indonesia;
