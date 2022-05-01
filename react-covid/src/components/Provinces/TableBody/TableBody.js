function TableBody(props) {
    const { index, data } = props;
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{data.kota}</td>
            <td>{data.kasus}</td>
            <td>{data.sembuh}</td>
            <td>{data.dirawat}</td>
            <td>{data.meninggal}</td>
        </tr>
    );
};

export default TableBody;