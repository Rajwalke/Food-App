// step 2-Cart slice (redux store slice)
import { createSlice } from "@reduxjs/toolkit";


const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[],
        extraadd:0,
        extrasub:0,
        finalTotal:0
    },
    reducers:{
        addItem:(state,action)=>{
            //mutating the state here
            state.items.push(action.payload);
        },
        removeItem:(state,action)=>{
            state.items.pop();
        },
        clearCart:(state,action)=>{
            state.items.length=0;
        },
        removespecific:(state,action)=>{
            state.items.splice(action.payload,1);
        },
        addItemExtra:(state,action)=>{
            state.finalTotal +=action.payload;
        },
        subItemExtra:(state,action)=>{
            state.finalTotal -=action.payload;
        },
        // addFinalTotal:(state,action)=>{
        //     state.finalTotal=action.payload;
        // }
    },
});

export const{addItem,removeItem,clearCart,removespecific,addItemExtra,subItemExtra,addFinalTotal}=cartSlice.actions
export default cartSlice.reducer;