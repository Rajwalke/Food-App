// step 1-Build the store
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import userReducer from "./userSlice";
const appStore=configureStore({
    reducer:{
        cart:cartReducer,
        user:userReducer
    },
    // reducer:{
        
    // }
});
export default appStore;  