import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


let initialState = {
    newProduct: [],
    loading: false,
    error: null
}


export const makePostRequest = createAsyncThunk(
    'add-new-product',
    async (data, { rejectWithValue }) => {
        try {
            const res = await axios.post('http://localhost:3001/products', data);
            return res.data;
        } catch (error) {
            return rejectWithValue(
                error.response?.data || 'Api end-point is not correct'
            )
        }
    }
)

const addNewProduct = createSlice({
    name: "addProduct",
    initialState,
    reducers: {
        getDetails: () => {

        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(makePostRequest.pending, (state) => {
                state.loading = true;
            })
            .addCase(makePostRequest.fulfilled, (state, action) => {
                state.loading = false;
                state.newProduct.push(action.payload);
            })
            .addCase(makePostRequest.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || action.error.message;
            });
    }
})

export const { getDetails } = addNewProduct.actions;
export default addNewProduct.reducer;