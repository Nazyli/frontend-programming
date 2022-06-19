import styled from "styled-components";

const StyledTableProvinces = styled.div`
  overflow-x: auto;
  table {
    margin: 0 auto;
    width: 80%;
    border: 1px solid #1e90ff;
    text-align: center;
    border-collapse: collapse;
    border-spacing: 0 1em;
  }
  table th {
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    color: #1e90ff;
  }

  table td,
  table th {
    border: 1px solid #ddd;
    padding: 8px;
  }

  table tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  table tr:hover {
    background-color: #ddd;
  }

  table th {
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    padding-top: 12px;
    padding-bottom: 12px;
    background-color: #1e90ff;
    color: #fff;
  }

  /* Medium Screen */
  @media (min-width: 768px) {
  }

  /* Large Screen */
  @media (min-width: 992px) {
    table {
      width: 100%;
    }
  }
`;

export default StyledTableProvinces;
