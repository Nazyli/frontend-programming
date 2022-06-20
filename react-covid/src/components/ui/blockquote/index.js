import styled from "styled-components";

const Blockquote = styled.blockquote`
  background-color: #fff;
  border-left: 0.7rem solid
    ${({ variant, theme }) =>
      variant ? theme.colors[variant] : theme.colors.primary};
  margin: 1.5em 0.7rem;
  padding: 0 0.7rem;
  p {
    color: #64748b;
    font-size: 16px;
    line-height: 38px;
    text-align: justify;
  }
`;

export default Blockquote;
