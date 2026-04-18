import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../Redux/Slices/tasksSlice.js"
const store = configureStore({
    reducer: {
        tasks: taskReducer,
    }
})

export default store;