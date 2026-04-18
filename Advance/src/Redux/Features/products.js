import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    item: [],
    status: undefined,
    error: null
}


export const fetchProducts = createAsyncThunk('products', async () => {
    const req = await fetch('https://fakestoreapi.com/products');
    const res = await req.json();
    return res;
})

const productsSlice = createSlice({
    name: "productSlice",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = 'successful',
                state.item = action.payload
        });
    }
})

export default productsSlice.reducer;