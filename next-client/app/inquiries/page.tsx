"use client";
import { useEffect, useState } from "react";
import { EnquiriesData } from "@/app/types";
import { generateFakeEnquiries } from "@/app/api/inquiries/route";

type Props = {};

const Page = (props: Props) => {
  const [inqueries, setInqueries] = useState<EnquiriesData>();
  useEffect(() => {
    fetch("/api/inquiries")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.inqueries);
        setInqueries(data.inqueries);
      });
  }, []);
  return (
    <div className={"h-screen p-6 pt-32"}>
      <h1 className={"text-xl"}>Inquiries</h1>
      <div></div>
    </div>
  );
};
export default Page;
