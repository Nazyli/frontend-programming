import Heading from "../ui/heading";
import StyledFooter from "./Footer.styled";

function Footer() {
  return (
    <StyledFooter>
      <nav>
        <div>
          <Heading level="1" variant="light" align="left">
            Covid Id
          </Heading>
          <p>Developed by Evry Nazyli Ciptanto</p>
        </div>
        <div>
          <ul>
            <li>Global</li>
            <li>Indonesia</li>
            <li>Provinsi</li>
            <li>About</li>
          </ul>
        </div>
      </nav>
    </StyledFooter>
  );
}

export default Footer;
