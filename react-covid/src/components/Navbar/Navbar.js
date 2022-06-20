import { Link } from "react-router-dom";
import Heading from "../ui/heading";
import StyledNavbar from "../ui/navbar";

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
            <li>
              <Link to="/">Global</Link>
            </li>
            <li>
              <Link to="/indonesia">Indonesia</Link>
            </li>
            <li>
              <Link to="/provinsi">Provinsi</Link>
            </li>
            <li>
              <Link to="/negara">Negara</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </nav>
    </StyledNavbar>
  );
}

export default Navbar;
