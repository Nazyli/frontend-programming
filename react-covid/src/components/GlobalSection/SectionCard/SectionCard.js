import Heading from "../../ui/heading";
import { StyledSectionCard } from "./SectionCard.styled";

function SectionCard(props) {
  const { dataCovid } = props;

  let variantColor;
  if (dataCovid.status === "Positif") {
    variantColor = "primary";
  } else if (dataCovid.status === "Sembuh") {
    variantColor = "success";
  } else if (dataCovid.status === "Meninggal") {
    variantColor = "danger";
  }

  return (
    <StyledSectionCard>
      <Heading level="3" variant="primary" align="center">
        {dataCovid.status}
      </Heading>
      <Heading level="4" variant={variantColor} align="center">
        {dataCovid.total.toLocaleString("id-ID")}
      </Heading>
    </StyledSectionCard>
  );
}

export default SectionCard;
