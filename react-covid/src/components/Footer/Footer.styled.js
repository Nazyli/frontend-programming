import styled from "styled-components";

const StyledFooter = styled.div`
  background-color: #1e90ff;
  padding: 1rem;
  color: #fff;
  nav {
    display: flex;
    flex-direction: column;
  }
  h1 {
    font-size: 2rem;
  }
  p {
    font-size: 14px;
    text-align: center;
  }
  ul {
    font-size: 16px;
    font-weight: bold;
    list-style: none;
  }
  li {
    margin-bottom: 1rem;
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
    ul {
      display: flex;
    }
    li {
      margin: 0 1rem;
    }
  }
`;

export default StyledFooter;
