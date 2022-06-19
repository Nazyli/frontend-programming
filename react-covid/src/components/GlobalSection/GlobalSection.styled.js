import styled from "styled-components";

const StyledGlobalSection = styled.div`
  background-color: #ecf0f1;
  margin: 1rem;
  padding-top: 1rem;
  padding-bottom: 3rem;
  h3{
    margin-bottom: 3rem;
  }
  section {
    text-align: center;
  }

  /* Medium Screen */
  @media (min-width: 768px) {
  }
  /* Large Screen */
  @media (min-width: 992px) {
    margin: 3rem auto;
  }
`;

const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  @media (min-width: 992px) {
    max-width: 1200px;
    margin: 0 auto;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: left;
  }
`;

export { StyledGlobalSection, StyledSection };
