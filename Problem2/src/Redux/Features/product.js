import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
let initialState = {
    items: [],
    isLoading: false,
    errors: null,
    status: 'idle',

}

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const req = await fetch('http://localhost:3001/products');
    const res = await req.json();
    return res;
})


const productSlice = createSlice({

    name: 'product',
    initialState,
    reducers: {
        getMoreInfo: function () {
            console.log(`Getting more info ...`)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.items = action.payload;
            state.status = "successful"
            state.isLoading = false;
        })
    }

})

export const { getMoreInfo } = productSlice.actions;
export default productSlice.reducer;



