import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Redux/Features/cart.js";
import productReducer from "../Redux/Features/product.js";
import newProductReducer from "../Redux/Features/addProduct.js"

const store = configureStore({
    reducer: {
        cart: cartReducer,
        products: productReducer,
        newProduct: newProductReducer
    }
})

export default store;

