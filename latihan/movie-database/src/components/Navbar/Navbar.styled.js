import styled from "styled-components";

const StyledNavbar = styled.div`
  background-color: #d63031;
  padding: 1rem;
  color: #fff;
  
  nav {
    margin-bottom: 1rem;
  }
  ul {
    list-style: none;
  }
  li {
    margin-bottom: 1rem;
  }
  a {
    text-decoration: none;
    color: #fff;
    font-weight: bold;
  }

  @media (min-width: 768px) {
    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    h1 {
      margin: 0;
    }
    ul {
      display: flex;
    }
    li {
      margin: 0 1rem;
    }
  }
`;
export default StyledNavbar;
