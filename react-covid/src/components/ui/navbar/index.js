import styled, { css } from "styled-components";

const StyledNavbar = styled.div`
  background-color: #1e90ff;
  padding: 1rem;
  color: #fff;
  nav {
    display: flex;
    flex-direction: column;
  }
  h1 {
    display: flex;
    justify-content: space-between;
    font-size: 2rem;
  }
  span {
    display: block;
    margin-top: -5px;
  }
  ul {
    font-size: 16px;
    font-weight: bold;
    list-style: none;
    padding-left: 1rem;
  }
  li {
    margin-bottom: 1rem;
  }
  a {
    text-decoration: none;
    color: #fff;
  }
  @media (min-width: 768px) {
    nav {
      max-width: 1200px;
      margin: 0 auto;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    h1 {
      margin: 0;
    }
    span {
      display: none;
    }
    ul {
      display: flex;
    }
    li {
      margin: 0 1rem;
    }
  }
`;

const FadeNavbar = styled.div`
  /* display: ${({ showpopup }) =>
    showpopup === "true" ? "none" : "block"}; */
  opacity: ${({ showpopup }) => (showpopup === "true" ? "1" : "0")};
  transition: height 2s, 0.6s linear;
  ${({ showpopup }) =>
    showpopup === "true"
      ? css`
          height: 180px;
        `
      : css`
          height: 0;
        `}
  @media (min-width: 768px) {
    height: auto;
    opacity: 1;
  }
`;

export { StyledNavbar, FadeNavbar };
