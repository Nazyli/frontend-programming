import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import AddCovidForm from "../../components/AddCovidForm/AddCovidForm";
import Hero from "../../components/Hero/Hero";
import Provinces from "../../components/Provinces/Provinces";
import { updateProvinces } from "../../features/provinceSlice";
import data from "../../utils/constants/provinces";

function Provinsi() {
  const dispatch = useDispatch();
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("provinces-database-items"))
  );
  if (items == null) {
    setItems(data.provinces);
    localStorage.setItem(
      "provinces-database-items",
      JSON.stringify(items)
    );
  }
  useEffect(() => {
    dispatch(updateProvinces(items));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

  return (
    <>
      <Hero />
      <Provinces />
      <AddCovidForm />
    </>
  );
}

export default Provinsi;
