import { createSlice } from "@reduxjs/toolkit";

const CatSlice = createSlice(
    {
        name: 'cat',
        initialState: {
            cats: [],
            isLoading: false
        },
        reducers: {
            getCatsFetch: (state) => {
                state.isLoading = true
            },
            getCatsSuccess: (state, action) => {
                state.cats = action.payload;
                state.isLoading = false;
            },
            getCatsFailure: (state) => {
                state.isLoading = false;
            }
        }
    }
)
export const { getCatsFailure, getCatsFetch, getCatsSuccess } = CatSlice.actions;
export default CatSlice.reducer;