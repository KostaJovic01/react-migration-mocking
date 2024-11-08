// redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import inquiryReducer from "./inquirySlice";
const store = configureStore({
  reducer: {
    userState: userReducer,
    inquiryState: inquiryReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
