import TableProvinces from "./TableProvinces/TableProvinces";
import Heading from "../ui/heading";
import StyledProvinces from "./Provinces.styled";
import { useSelector } from "react-redux";


function Provinces() {
  const provinces = useSelector((store) => store.provinceReducer.provinces);

  return (
    <StyledProvinces>
      <section>
        <Heading level="2" variant="primary" align="center">
          Provinsi
        </Heading>
        <Heading level="3" variant="secondary" align="center">
          Data Covid Berdasarkan Provinsi
        </Heading>
        <TableProvinces provinces={provinces} />
      </section>
      </StyledProvinces>
  );
}

export default Provinces;
