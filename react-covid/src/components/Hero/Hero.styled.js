import styled from "styled-components";

const StyledHero = styled.div`
  margin: 1rem;
  section {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  blockquote {
    margin-bottom: 2rem;
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
    }
  }
`;

const HeroLeft = styled.div`
  margin-bottom: 1rem;
  align-items: center;
  text-align: left;
  @media (min-width: 992px) {
    flex-basis: 40%;
  } ;
`;

const HeroRight = styled.div`
  margin-bottom: 1rem;
  text-align: center;
  @media (min-width: 992px) {
    flex-basis: 60%;
    text-align: right;
  }
`;

export { StyledHero, HeroLeft, HeroRight };
