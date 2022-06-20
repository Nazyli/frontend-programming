import styled from "styled-components";

const StyleSpinner = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  height: 350px;
  span {
    width: 50px;
    height: 50px;
    border: 10px solid #30336b;
    border-top: 10px solid #1e90ff;
    border-radius: 50%;
    animation: spinner 1.5s linear infinite;

    @keyframes spinner {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`;

export default StyleSpinner;
