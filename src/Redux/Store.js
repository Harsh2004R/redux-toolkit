import { configureStore } from "@reduxjs/toolkit";
import TodoReducers from "./Features/TodoSlice.js"

const store = configureStore({
    reducer: TodoReducers,
})

export default store;