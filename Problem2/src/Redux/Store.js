import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Redux/Features/cart.js";
import productReducer from "../Redux/Features/product.js";
const store = configureStore({
    reducer: {
        cart: cartReducer,
        products: productReducer
    }
})

export default store;

