import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "../features/globalSlice";
import provinceReducer from "../features/provinceSlice";

const store = configureStore({
  reducer: {
    globalReducer: globalReducer,
    provinceReducer: provinceReducer,
  },
});

export default store;
