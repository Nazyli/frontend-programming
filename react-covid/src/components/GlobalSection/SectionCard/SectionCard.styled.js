import styled from "styled-components";

const StyledSectionCard = styled.div`
  margin: 0 auto;
  width: 80%;
  text-align: center;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  margin-bottom: 2rem;
  background-color: #fff;
  padding: 2rem 0;
  h3 {
    color: #353b48;
    font-weight: bold;
    font-size: 30px;
    margin-bottom: 1rem;
  }
  h4 {
    font-weight: bold;
    font-size: 50px;
    margin-top: 1rem;
  }

  /* Medium Screen */
  @media (min-width: 768px) {
  }
  /* Large Screen */
  @media (min-width: 992px) {
    flex-basis: 30%;
  }
`;

export { StyledSectionCard };
