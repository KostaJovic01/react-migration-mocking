// redux/slices/profileSlice.js
import { createSlice } from "@reduxjs/toolkit";
import KostaJImage from "@/app/assets/KostaJ.jpg";

const initialState = {
  firstName: "Kosta",
  lastName: "Jovic",
  email: "kosta.jovic@additive.eu",
  language: "English",
};

const userStoreSlice = createSlice({
  name: "userStore",
  initialState,
  reducers: {
    setUserStore: (state, action) =>
      Object.assign(state, { ...action.payload }),
  },
});

export const { setUserStore } = userStoreSlice.actions;
export default userStoreSlice.reducer;
