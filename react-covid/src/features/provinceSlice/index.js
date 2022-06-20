import { createSlice } from "@reduxjs/toolkit";
import data from "../../utils/constants/provinces";

const provincelSlice = createSlice({
  name: "Provinces Slice",
  initialState: {
    provinces: data.provinces,
  },
  reducers: {
    updateProvinces(state, action) {
      localStorage.setItem(
        "provinces-database-items",
        JSON.stringify(action.payload)
      );
      return { ...state, provinces: action.payload };
    },
  },
});

const provinceReducer = provincelSlice.reducer;
const { updateProvinces, addProvince } = provincelSlice.actions;

export default provinceReducer;
export { updateProvinces, addProvince };
