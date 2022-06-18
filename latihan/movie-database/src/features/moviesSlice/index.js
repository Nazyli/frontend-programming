// stroe : penyimpanan state global
// action : untuk menjalankan reducer
// reducer : untuk mengubdate state
// slice : mengenerate action dan reducer


// membuat slice
import { createSlice } from "@reduxjs/toolkit";
import data from "../../utils/constants/data"

const movieSlice = createSlice({
    name : "Movie Slice",
    initialState :{
        movies:data,
    },
    reducers :{
        addMovie(state, action){
            // menambahk movie dari from ke state movies : push
            state.movies.push(action.payload);
            localStorage.setItem("movie-database-items", JSON.stringify(state.movies));

        },
        deleteMovie(){},
        updateMovie(state, action){
            state.movies = action.payload;
        },
    },
});


// generate action and reducer
// nama action diambil nama reducer
// action untuk menjalankan reducer
// reducer untuk update state
const moviesReducer = movieSlice.reducer;
const {addMovie, deleteMovie, updateMovie} = movieSlice.actions;


// Export action and reducer
export default moviesReducer;
export {addMovie, deleteMovie, updateMovie};