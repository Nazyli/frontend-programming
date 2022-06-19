import Heading from "../ui/heading";
import StyledSummary from "./Summary.styled";
import { useSelector } from "react-redux";

function Summary({ title }) {
  const mainLogo = useSelector((store) => store.globalReducer.summary);

  return (
    <StyledSummary>
      <section>
        <Heading level="2" variant="primary" align="center">
          Summary
        </Heading>
        <Heading level="3" variant="secondary" align="center">
          Data Summary Covid Berdasarkan {title}
        </Heading>
        <img src={mainLogo} width="536" height="354" alt="placeholder" />
      </section>
    </StyledSummary>
  );
}

export default Summary;
