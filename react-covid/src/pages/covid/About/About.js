import Blockquote from "../../../components/ui/blockquote";
import Heading from "../../../components/ui/heading";
import StyledAbout from "./About.styled";

function About() {
  return (
    <>
      <StyledAbout>
        <Blockquote variant="orange">
          <Heading level="3" variant="orange" align="left">
            Sistem Informasi Covid ID
          </Heading>
          <ul>
            <li>Developed by Evry Nazyli Ciptanto</li>
            <li>Sekolah Tinggi Teknologi Terpadu Nurul Fikri</li>
            <li>Teknik Informatika</li>
          </ul>
        </Blockquote>
        <Blockquote variant="secondary">
          <p>
            <strong>Copyright © 2022</strong> Evry Nazyli Ciptanto{" "}
          <br />
            <strong>COVID-19 API </strong> <a href="https://github.com/mathdroid/covid-19-api">https://github.com/mathdroid/covid-19-api</a>
          </p>
        </Blockquote>
      </StyledAbout>
    </>
  );
}

export default About;
