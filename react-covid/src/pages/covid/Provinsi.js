import { useState } from "react";
import AddCovidForm from "../../components/AddCovidForm/AddCovidForm";
import Hero from "../../components/Hero/Hero";
import Provinces from "../../components/Provinces/Provinces";
import data from "../../utils/constants/provinces";

function Provinsi() {
  const [provinces, setProvinces] = useState(data.provinces);

  return (
    <>
      <Hero />
      <Provinces provinces={provinces} setProvinces={setProvinces} />
      <AddCovidForm provinces={provinces} setProvinces={setProvinces} />
    </>
  );
}

export default Provinsi;
