import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import GlobalSection from "../../components/GlobalSection/GlobalSection";
import Hero from "../../components/Hero/Hero";
import Summary from "../../components/Summary/Summary";
import FormGroup from "../../components/ui/formgroup";
import { updateGlobal, updateSummary } from "../../features/globalSlice";
import ENDPOINTS from "../../utils/constants/endpoints";

function Negara() {
  const dispatch = useDispatch();
  const [countries, setCountries] = useState();
  const [url, setUrl] = useState(ENDPOINTS.GLOBAL);
  const [country, setCountry] = useState("Global");
  useEffect(() => {
    getIntitialData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getData(url);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  const getIntitialData = async () => {
    await axios(ENDPOINTS.COUNTRIES).then((res) => {
      setCountries(res.data.countries);
    });
    getData(ENDPOINTS.GLOBAL);
  };

  const handleChange = async (e) => {
    if (e.target.value !== "Global") {
      setUrl(ENDPOINTS.COUNTRIES + "/" + e.target.value);
    } else {
      setUrl(ENDPOINTS.GLOBAL);
    }
    setCountry(e.target.value);
  };
  const getData = async (e) => {
    await axios(e).then((res) => {
      dispatch(updateGlobal(res.data));
    });
    dispatch(updateSummary(e + "/og"));
  };

  return (
    <>
      <Hero />
      <FormGroup>
        <label htmlFor="country">Country</label>
        <select name="country" onChange={handleChange}>
          <option value="Global">Global</option>
          {countries &&
            countries.map(function (data, index) {
              return (
                <option key={index} value={data.name}>
                  {data.name}
                </option>
              );
            })}
        </select>
      </FormGroup>
      <GlobalSection title={country} />
      <Summary title={country} />
    </>
  );
}

export default Negara;
