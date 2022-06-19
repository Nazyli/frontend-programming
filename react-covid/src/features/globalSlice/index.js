import { createSlice } from "@reduxjs/toolkit";
import imageDefault from "../../assets/img/summary.png";


const globalSlice = createSlice({
  name: "Global Slice",
  initialState: {
    global: {
      confirmed: {
        value: 0,
      },
      recovered: {
        value: 0,
      },
      deaths: {
        value: 0,
      },
    },
    summary:imageDefault 
  },
  reducers: {
    updateGlobal(state, action) {
      state.global = action.payload;
    },
    updateSummary(state, action) {
      state.summary = action.payload;
    },
  },
});

const globalReducer = globalSlice.reducer;
const { updateGlobal, updateSummary } = globalSlice.actions;

export default globalReducer;
export { updateGlobal, updateSummary };
