import { createSlice } from "@reduxjs/toolkit";
import { EnquiriesData } from "@/app/types";
const initialState: EnquiriesData = {
  enquiries: [
    {
      id: "",
      title: "",
      language: "",
      person: {
        givenName: "",
        familyName: "",
        email: "",
        language: "",
        newsletter: false,
        fullname: "",
      },
      status: {
        text: "",
        emailReceivers: [],
        autoresponder: {
          name: "",
          status: false,
          lastUpdate: "",
        },
      },
      createdAt: new Date().toISOString(),
    },
  ],
};

const inquiryStoreSlice = createSlice({
  name: "inquiryStore",
  initialState,
  reducers: {
    setInquiryStore: (state, action) => {
      Object.assign(state, { ...action.payload });
    },
  },
});

export const { setInquiryStore } = inquiryStoreSlice.actions;
export default inquiryStoreSlice.reducer;
