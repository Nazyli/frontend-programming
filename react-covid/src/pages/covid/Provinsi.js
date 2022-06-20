import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import AddCovidForm from "../../components/AddCovidForm/AddCovidForm";
import Hero from "../../components/Hero/Hero";
import Provinces from "../../components/Provinces/Provinces";
import Spinner from "../../components/Spinner/Spinner";
import { updateProvinces } from "../../features/provinceSlice";
import data from "../../utils/constants/provinces";

function Provinsi() {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("provinces-database-items"))
  );
  if (items == null) {
    setItems(data.provinces);
    localStorage.setItem("provinces-database-items", JSON.stringify(items));
  }
  useEffect(() => {
    setIsLoading(true);
    dispatch(updateProvinces(items));
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

  return (
    <>
      {isLoading ? <Spinner /> : <Hero />}
      {isLoading ? <Spinner /> : <Provinces />}
      {isLoading ? <Spinner /> : <AddCovidForm />}
    </>
  );
}

export default Provinsi;
