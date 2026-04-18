import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: JSON.parse(localStorage.getItem("cart")) || [],
}

const cartCountSlice = createSlice({
    name: "cartCount",
    initialState,
    reducers: {
        incrementCart: (state, action) => {
            // console.log(action.payload);
            state.items.push(action.payload);
            localStorage.setItem("cart", JSON.stringify(state.items))
        },
        decrementCart: (state, action) => {
            // console.log(action.payload);
            const newCart = state.items.filter((el) => el.id != action.payload.id);
            state.items = newCart;
            localStorage.setItem("cart", JSON.stringify(state.items))
        },
        clearCart: (state, action) => {
            localStorage.clear();
            state.items = [];
        }
    }
})


export const { incrementCart, decrementCart, clearCart } = cartCountSlice.actions;
export default cartCountSlice.reducer;