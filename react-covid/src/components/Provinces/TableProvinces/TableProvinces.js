import TableBody from "../TableBody/TableBody";
import TableHead from "../TableHead/TableHead";
import StyledTableProvinces from "./TableProvinces.styled";

function TableProvinces(props) {
  const { provinces } = props;
  return (
    <StyledTableProvinces>
      <table>
        <thead>
          <TableHead />
        </thead>
        <tbody>
          {provinces.map(function (data, index) {
            return <TableBody key={index} index={index} data={data} />;
          })}
        </tbody>
        <tfoot></tfoot>
      </table>
    </StyledTableProvinces>
  );
}

export default TableProvinces;
