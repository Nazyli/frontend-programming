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
    font-size: ${({ theme, size }) => (size) ? theme.fontsize[size] : theme.fontsize.md};
    padding: ${({ theme, size }) => (size) ? theme.padding[size] : theme.padding.md};
`;

export default Button;