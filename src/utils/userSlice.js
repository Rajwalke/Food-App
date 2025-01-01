import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:"user",
    initialState:null,
    reducers:{
        adduserInfo:(state,action)=>{
          return action.payload;
        },
        removeUserInfo:(state,action)=>{
            return null;
        }
    }
})

export default userSlice.reducer;

export const {adduserInfo,removeUserInfo} = userSlice.actions;