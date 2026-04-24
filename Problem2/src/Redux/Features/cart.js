import { createSlice, nanoid } from "@reduxjs/toolkit";



let initialState = {
    cart: [
        {
            "id": "1",
            "title": "Wireless Headphones",
            "description": "High-quality sound with noise cancellation.",
            "price": 2499,
            "rating": 4.5,
            "quantity": 20,
            "image": "https://picsum.photos/id/180/300/300"
        }
    ]
}
const cartSlice = createSlice({

    name: 'cart',
    initialState,
    reducers: {
        addToCart: function (state, action) {
            state.cart.push(action.payload);
        },
        removeToCart: function (state, action) {
            state.cart = state.cart.filter((el) => el.id !== action.payload)
        },
        clearCart: function (state) {
            state.cart = [];
        }
    }

})

export const { addToCart, removeToCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
