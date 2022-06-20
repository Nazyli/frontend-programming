import Heading from "../../ui/heading";
import { StyledSectionCard } from "./SectionCard.styled";

function SectionCard(props) {
  const { total, status } = props;

  let variantColor;
  if (status === "Confirmed") {
    variantColor = "primary";
  } else if (status === "Recovered") {
    variantColor = "success";
  } else if (status === "Death") {
    variantColor = "danger";
  }

  return (
    <StyledSectionCard>
      <Heading level="3" variant="navy" align="center">
        {status}
      </Heading>
      <Heading level="4" variant={variantColor} align="center">
        {total.toLocaleString("id-ID")}
      </Heading>
    </StyledSectionCard>
  );
}

export default SectionCard;
