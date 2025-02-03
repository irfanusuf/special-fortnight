import { createReducer } from "@reduxjs/toolkit";

interface stateTypes {

  loading : boolean,
  message : string,
  payload : any
  blogs : any
}

const userIntialState : stateTypes= { 
  loading: false,
  message: "",
  payload: {},
  blogs : []
};

export const userReducer = createReducer(userIntialState, (builder : any): void => {
  builder
    .addCase("APIREQUEST", (state : stateTypes) => {
      state.loading = true;
    })
    .addCase("APISUCCESS" ,(state : stateTypes , action : stateTypes)=>{
      state.loading = false
      state.message = action.message
      state.payload = action.payload;
    })
    .addCase("FETCHBLOGSAPISUCCESS" ,(state : stateTypes , action : stateTypes)=>{
      state.loading = false
      state.message = action.message
      state.blogs = action.payload;
    })
    .addCase("APIFAILURE", (state :stateTypes) => {
      state.loading = false;
      state.message = "Server Error | 404"
    }) 
});
