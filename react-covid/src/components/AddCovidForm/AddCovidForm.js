import { useState } from "react";
import formLogo from "../../assets/img/conceptual_idea.png";
import Alert from "../Alert/Alert";
import Button from "../ui/button";
import Heading from "../ui/heading";
import FormGroup from "../ui/formgroup";
import { FormLeft, FormRight, StyleAddCovidForm } from "./AddCovidForm.styled";

function AddCovidForm(props) {
  const { provinces, setProvinces } = props;

  const [state, setState] = useState({
    provinsi: "",
    status: "",
    jumlah: "",
  });
  const { provinsi, status, jumlah } = state;

  const [isError, setIsError] = useState({
    provinsi: false,
    status: false,
    jumlah: false,
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const validation = () => {
    if (provinsi === "") {
      setIsError({ ...isError, provinsi: true });
      return false;
    } else if (status === "") {
      setIsError({ ...isError, status: true });
      return false;
    } else if (jumlah === "") {
      setIsError({ ...isError, jumlah: true });
      return false;
    } else {
      setIsError({ provinsi: false, status: false, jumlah: false });
      return true;
    }
  };
  const findProvincesByKota = (kota) => provinces.find((e) => e.kota === kota);

  const updateTotalStatus = () => {
    const province = findProvincesByKota(provinsi);
    if (province) {
      let jml = parseInt(jumlah);
      if (status === "positif") {
        province.kasus += jml;
      } else if (status === "sembuh") {
        province.sembuh += jml;
      } else if (status === "meninggal") {
        province.meninggal += jml;
      } else if (status === "dirawat") {
        province.dirawat += jml;
      }
      setProvinces([...provinces]);
      return true;
    }
    return false;
  };

  const resetForm = () => {
    setState({ provinsi: "", status: "", jumlah: "" });
    return true;
  };
  function handleSubmit(e) {
    e.preventDefault();
    validation() && updateTotalStatus() && resetForm();
  }

  return (
        <StyleAddCovidForm>
      <section>
        <FormLeft>
          <img
            src={formLogo}
            alt="placeholder"
          />
        </FormLeft>
        <FormRight>
          <Heading level="2" variant="primary" align="center">
            Form Covid
          </Heading>
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <label htmlFor="provinsi">Provinsi</label>
              <select onChange={handleChange} name="provinsi" value={provinsi}>
                <option value=""></option>
                {provinces.map(function (data, index) {
                  return (
                    <option key={index} value={data.kota}>
                      {data.kota}
                    </option>
                  );
                })}
              </select>
              {isError.provinsi && <Alert>Provinsi Wajib Diisi</Alert>}
            </FormGroup>

            <FormGroup>
              <label htmlFor="status">Status</label>
              <select onChange={handleChange} name="status" value={status}>
                <option value=""></option>
                <option value="positif">Positif</option>
                <option value="sembuh">Sembuh</option>
                <option value="dirawat">Dirawat</option>
                <option value="meninggal">Meninggal</option>
              </select>
              {isError.status && <Alert>Status Wajib Diisi</Alert>}
            </FormGroup>

            <FormGroup>
              <label htmlFor="jumlah">Jumlah</label>
              <input
                onChange={handleChange}
                name="jumlah"
                id="jumlah"
                type="number"
                value={jumlah}
              />
              {isError.jumlah && <Alert>Jumlah Wajib Diisi</Alert>}
            </FormGroup>
            <Button variant="secondary" size="lg" full>
              Vaccine
            </Button>
          </form>
        </FormRight>
      </section>
    </StyleAddCovidForm>
  );
}

export default AddCovidForm;
