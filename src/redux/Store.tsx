import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./Reducers";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});


export type AppDispatch = typeof store.dispatch;

export default store;
