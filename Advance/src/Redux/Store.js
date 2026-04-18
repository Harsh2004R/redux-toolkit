import { configureStore } from "@reduxjs/toolkit";
import CartReducers from "./Features/CartCount.js"
import productReducer from "./Features/products.js"
const store = configureStore({
    reducer:
    {
        cart: CartReducers,
        products: productReducer

    }
})

export default store;