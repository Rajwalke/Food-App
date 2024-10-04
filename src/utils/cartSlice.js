// step 2-Cart slice (redux store slice)
import { createSlice } from "@reduxjs/toolkit";


const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[],
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
        }
    },
});

export const{addItem,removeItem,clearCart,removespecific}=cartSlice.actions
export default cartSlice.reducer;