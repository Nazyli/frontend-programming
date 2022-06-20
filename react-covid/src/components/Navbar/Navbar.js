import { useState } from "react";
import { Link } from "react-router-dom";
import Heading from "../ui/heading";
import  { StyledNavbar, FadeNavbar } from "../ui/navbar";

function Navbar() {
  
  const [visible, setVisible] = useState(false);
  const handleClick = (e) => {
    setVisible(!visible);
  };

  return (
    <StyledNavbar>
      <nav>
        <div>
          <Heading level="1" variant="light">
            Covid ID
            <span onClick={handleClick}>&#9776;</span>
          </Heading>
        </div>
        <FadeNavbar showpopup={String(visible)}>
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
        </FadeNavbar>
      </nav>
    </StyledNavbar>
  );
}

export default Navbar;
