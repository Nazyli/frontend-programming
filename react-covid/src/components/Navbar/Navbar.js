import Heading from "../ui/heading";
import StyledNavbar from "./Navbar.styled";

function Navbar() {
  return (
    <StyledNavbar>
      <nav>
        <div>
          <Heading level="1" variant="light">
            Covid ID
          </Heading>
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
    </StyledNavbar>
  );
}

export default Navbar;
