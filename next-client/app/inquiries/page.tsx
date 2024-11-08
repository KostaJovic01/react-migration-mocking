"use client";
import React, { useEffect, useState } from "react";
import { EnquiriesData, User } from "@/app/types";
import CardList from "@/app/components/molecules/CardList";
import { setInquiryStore } from "@/app/redux/inquirySlice";
import { useAppDispatch } from "@/app/redux/hooks";

type Props = {
  children: React.ReactNode;
};

const Page = (props: Props) => {
  const dispatch = useAppDispatch();
  const updateInquiryStore = (inputInqueries: EnquiriesData) => {
    dispatch(setInquiryStore(inputInqueries));
  };
  const [inqueries, setInqueries] = useState<EnquiriesData>();
  useEffect(() => {
    fetch("/api/inquiries", {
      cache: "force-cache",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched DATA :", data);
        setInqueries(data);
      });
  }, []);

  useEffect(() => {
    if (inqueries) {
      console.log(inqueries);
      updateInquiryStore(inqueries);
    }
  }, [inqueries]);
  return (
    <div id={"layout"} className={"flex flex-col p-6 py-32"}>
      <h1 className={"text-xl"}>Inquiries</h1>
      <div>
        <CardList data={inqueries} />
      </div>
    </div>
  );
};
export default Page;
