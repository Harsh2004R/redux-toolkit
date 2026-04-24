import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


let initialState = {
    newProduct: [],
}


export const makePostRequest = createAsyncThunk('add-new-product', async (data) => {
    try {
        let res = axios.post('http://localhost:3001/products', data);
        console.log(res);
        return res
    } catch (error) {
        console.log("error in posting", error)
    }
})

const addNewProduct = createSlice({
    name: "addProduct",
    initialState,
    reducers: {
        getDetails: () => {

        }
    },
    extraReducers: (builder) => {
        builder.addCase(makePostRequest.fulfilled, (state, action) => {
            state.newProduct = makePostRequest(action.payload);
        })
    }
})

export const { getDetails } = addNewProduct.actions;
export default addNewProduct.reducer;