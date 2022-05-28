import styled, { css } from "styled-components";

const Button = styled.button`
  padding: 1rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  color: #fff;
  text-decoration: none;

  /* Access Props Variant */
  background-color: ${({ variant, theme }) => (variant) ? theme.colors[variant] : theme.colors.primary};

  /* display : ${(props) => props.full && "block"}; */
  /* width : ${(props) => props.full && "100%"}; */

  ${(props) => props.full && css`
      display: block;
      width: 100%;
    `}
    ${({ theme, size }) => (size) ? theme.sizes[size] : theme.sizes.md};
`;

export default Button;