// step 1-Build the store
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"
const appStore=configureStore({
    reducer:{
        cart:cartReducer,
    }
});
export default appStore;  