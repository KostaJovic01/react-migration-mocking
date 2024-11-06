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
    setUserStore(state, action) {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
      state.language = action.payload.language;
    },
  },
});

export const { setUserStore } = userStoreSlice.actions;
export default userStoreSlice.reducer;
