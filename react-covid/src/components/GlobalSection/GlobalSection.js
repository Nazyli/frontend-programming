import data from "../../utils/constants/indonesia";
import { useState } from "react";
import SectionCard from "./SectionCard/SectionCard";
import Heading from "../ui/heading";
import { StyledGlobalSection, StyledSection } from "./GlobalSection.styled";

function GlobalSection({ title }) {
  const [indonesia] = useState(data.indonesia);

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
          {indonesia.map(function (dataCovid, i) {
            return <SectionCard dataCovid={dataCovid} key={i} />;
          })}
        </StyledSection>
      </section>
    </StyledGlobalSection>
  );
}

export default GlobalSection;
