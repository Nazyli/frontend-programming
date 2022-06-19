import styled from "styled-components";

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  label {
    margin-bottom: 1rem;
    font-size: 24px;
    line-height: 20px;
    color:#636e72;
  }
  input {
    background: #ffffff;
    border: 2px solid #1e90ff;
    box-sizing: border-box;
    border-radius: 10px;
    outline: none;
    padding: 1rem 0.5rem;
  }
  select {
    background: #ffffff;
    border: 2px solid #1e90ff;
    box-sizing: border-box;
    border-radius: 10px;
    outline: none;
    padding: 1rem 0.5rem;
  }
`;

export default FormGroup;
