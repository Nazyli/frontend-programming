import styled, { css } from "styled-components";

const Button = styled.button`
  border: none;
  border-radius: 10px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  background-color: ${({ variant, theme }) =>
    variant ? theme.colors[variant] : theme.colors.primary};
  font-size: ${({ theme, size }) =>
    size ? theme.fontsize[size] : theme.fontsize.md};
  padding: ${({ theme, size }) =>
    size ? theme.padding[size] : theme.padding.md};
  ${(props) =>
    props.full &&
    css`
      display: block;
      width: 100%;
    `}
  :hover {
    background-color: #fff;
    border: 1px solid
      ${({ variant, theme }) =>
        variant ? theme.colors[variant] : theme.colors.primary};
    color: ${({ variant, theme }) =>
      variant ? theme.colors[variant] : theme.colors.primary};
  }
`;

export default Button;
