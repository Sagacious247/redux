import { configureStore } from "@reduxjs/toolkit";
import countReducer from './slice/counterSlice'
import authReducer from './slice/authSlice'

// Create a store
const store = configureStore({
    reducer: {
       count: countReducer,
       auth: authReducer,
    }
})

export default store;