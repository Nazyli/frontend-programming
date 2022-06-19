import styled, { css } from "styled-components";

const StyledHeading = styled.h1`
  font-family: "Poppins", sans-serif;
  margin: 10px 0;
  color: ${({ variant, theme }) =>
    variant ? theme.colors[variant] : theme.colors.primary};
  text-align: ${({ align }) => (align ? align : "left")};
  ${({ as }) =>
    as === "h1" &&
    css`
      font-size: 3.1rem;
    `}
  ${({ as }) =>
    as === "h2" &&
    css`
      font-size: 3rem;
    `}
  ${({ as }) =>
    as === "h3" &&
    css`
      font-size: 1.59rem;
    `}
`;

const Heading = ({ level, ...rest }) => {
  return <StyledHeading as={`h${level}`} {...rest} />;
};

Heading.defaultProps = {
  level: 1,
};

export default Heading;
