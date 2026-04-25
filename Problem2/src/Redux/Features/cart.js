import { createSlice, nanoid } from "@reduxjs/toolkit";



let initialState = {
    cart: JSON.parse(localStorage.getItem('cart')) || []
}
const cartSlice = createSlice({

    name: 'cart',
    initialState,
    reducers: {
        addToCart: function (state, action) {
            state.cart.push(action.payload);
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        removeToCart: function (state, action) {
            state.cart = state.cart.filter((el) => el.id !== action.payload)
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        clearCart: function (state) {
            state.cart = [];
            localStorage.clear()
        }
    }

})

export const { addToCart, removeToCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
