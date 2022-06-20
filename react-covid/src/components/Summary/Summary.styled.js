import styled from "styled-components";

const StyledSummary = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;

  img {
    margin-top: 2rem;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
    height: auto;
    box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
    border-radius: 20px;
  }
  /* Medium Screen */
  @media (min-width: 768px) {
  }
  /* Large Screen */
  @media (min-width: 992px) {
    margin: 3rem auto;
  }
`;

export default StyledSummary;
