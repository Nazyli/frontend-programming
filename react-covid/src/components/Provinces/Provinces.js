import TableProvinces from "./TableProvinces/TableProvinces";
import Heading from "../ui/heading";
import StyledProvinces from "./Provinces.styled";


function Provinces(props) {
  const { provinces } = props;

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
