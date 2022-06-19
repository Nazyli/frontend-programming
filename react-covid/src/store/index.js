import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "../features/globalSlice";


const store = configureStore({
    reducer : {
        globalReducer:globalReducer,
    }
})

export default store;