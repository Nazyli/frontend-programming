import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../features/moviesSlice";


// menyimpan state global
// menyimpan reducer sebelumnya
// menerima param object : reducer
const store = configureStore({
    reducer : {
        moviesReducer:moviesReducer,
    }
})

export default store;