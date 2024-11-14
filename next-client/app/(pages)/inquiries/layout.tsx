"use client";
import React from "react";
import { InquiriesProvider } from "@/app/(pages)/inquiries/InquiriesContext";
import InquiriesPage from "@/app/components/InquiryComponents/InquiriesPage";

type Props = {
  detail: React.ReactNode;
};

const Layout = (props: Props) => {
  return (
    <div className={"relative flex h-screen flex-grow flex-row"}>
      <InquiriesProvider>
        <InquiriesPage />
        {props.detail}
      </InquiriesProvider>
    </div>
  );
};
export default Layout;
