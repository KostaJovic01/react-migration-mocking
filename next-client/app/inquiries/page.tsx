"use client";
import React, { useEffect, useState } from "react";
import { EnquiriesData } from "@/app/types";
import { generateFakeEnquiries } from "@/app/api/inquiries/route";
import CardList from "@/app/components/molecules/CardList";

type Props = {};

const Page = (props: Props) => {
  const [inqueries, setInqueries] = useState<EnquiriesData>();
  useEffect(() => {
    fetch("/api/inquiries")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched DATA :", data);
        setInqueries(data);
      });
  }, []);
  return (
    <div className={"h-screen p-6 pt-32"}>
      <h1 className={"text-xl"}>Inquiries</h1>
      <div>
        <CardList data={inqueries} />
      </div>
    </div>
  );
};
export default Page;
