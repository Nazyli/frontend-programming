import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import GlobalSection from "../../components/GlobalSection/GlobalSection";
import Hero from "../../components/Hero/Hero";
import { updateGlobal } from "../../features/globalSlice";
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
  };
  return (
    <>
      <Hero />
      <GlobalSection title="Indonesia" />
    </>
  );
}

export default Indonesia;