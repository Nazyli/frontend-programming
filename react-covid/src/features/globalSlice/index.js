import { createSlice } from "@reduxjs/toolkit";

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
  },
  reducers: {
    updateGlobal(state, action) {
      state.global = action.payload;
    },
  },
});

const globalReducer = globalSlice.reducer;
const { updateGlobal } = globalSlice.actions;

export default globalReducer;
export { updateGlobal };
