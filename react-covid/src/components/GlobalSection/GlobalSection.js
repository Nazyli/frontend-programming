import SectionCard from "./SectionCard/SectionCard";
import Heading from "../ui/heading";
import { StyledGlobalSection, StyledSection } from "./GlobalSection.styled";
import { useSelector } from "react-redux";

function GlobalSection({ title }) {
  const global = useSelector((store) => store.globalReducer.global);
  return (
    <StyledGlobalSection>
      <section>
        <Heading level="2" variant="primary" align="center">
          {title}
        </Heading>
        <Heading level="3" variant="secondary" align="center">
          Data Covid Berdasarkan {title}
        </Heading>
        <StyledSection>
          <SectionCard total={global.confirmed.value} status="Confirmed" />
          <SectionCard total={global.recovered.value} status="Recovered" />
          <SectionCard total={global.deaths.value} status="Death" />
        </StyledSection>
      </section>
    </StyledGlobalSection>
  );
}

export default GlobalSection;
