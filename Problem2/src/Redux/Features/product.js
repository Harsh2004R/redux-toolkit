import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
let initialState = {
    items: [],
    isLoading: false,
    errors: null,
    status: undefined,

}

export const fetchProducts = createAsyncThunk('products', async () => {
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
        })
    }

})

export const { getMoreInfo } = productSlice.actions;
export default productSlice.reducer;



