import { createSlice, nanoid } from "@reduxjs/toolkit";



let initialState = {
    cart: []
}
const cartSlice = createSlice({

    name: 'cart',
    initialState,
    reducers: {
        addToCart: function (state, action) {
            state.cart.push(action.payload);
        },
        removeToCart: function (state, action) {

        },
        clearCart: function (state) {
            state.cart = [];
        }
    }

})

export const { addToCart, reducer, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
