import styled from "styled-components";

const StyleAddCovidForm = styled.div`
  margin: 1rem;

  section {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 25px;
  }

  /* Medium Screen */
  @media (min-width: 768px) {
  }

  /* Large Screen */
  @media (min-width: 992px) {
    max-width: 1200px;
    margin: 3rem auto;

    section {
      margin: 0 1rem;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      text-align: left;
    }
  }
`;

const FormLeft = styled.div`
  @media (min-width: 992px) {
    flex-basis: 60%;
  } ;
`;

const FormRight = styled.div`
  padding: 1rem;
  text-align: left;
  @media (min-width: 992px) {
    flex-basis: 40%;
  }
`;

export { StyleAddCovidForm, FormLeft, FormRight };
