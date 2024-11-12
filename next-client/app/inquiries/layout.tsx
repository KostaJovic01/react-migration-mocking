"use client";
"use strict";
import { useAppDispatch } from "@/app/redux/hooks";
import React, { useCallback, useState } from "react";
import { EnquiriesData, Enquiry } from "@/app/types";
import { setInquiryStore } from "@/app/redux/inquirySlice";
import StatusBall from "@/app/components/atoms/StatusBall";
import Link from "next/link";

type Props = {
  detail: React.ReactNode;
};

const Layout = React.memo((props: Props) => {
  const dispatch = useAppDispatch();
  const [inquiries, setInquiries] = useState<EnquiriesData>();
  const [detailOpen, setDetailOpen] = useState(true);

  const fetchInquiries = useCallback(async () => {
    try {
      const response = await fetch("/api/inquiries", { cache: "force-cache" });
      const data = await response.json();
      setInquiries(data);
      dispatch(setInquiryStore(data));
    } catch (error) {
      console.error("Error fetching inquiries:", error);
    }
  }, [dispatch]); // Only recreate if dispatch changes

  return (
    <div className={"relative flex h-screen flex-grow flex-row"}>
      <div className={"flex h-screen min-w-[40%] flex-grow flex-col p-6 pt-32"}>
        <div className="hidden bg-blue-300 bg-blue-500 bg-green-300 bg-green-500 bg-orange-300 bg-orange-500 bg-red-300 bg-red-500"></div>
        <h1 className="text-xl">Inquiries</h1>
        <button onClick={fetchInquiries}>Fetch Inquiries</button>
        <ul role="list" className="over w-full space-y-3">
          {inquiries &&
            inquiries.enquiries.map((item: Enquiry) => (
              <Link
                href={`/inquiries/${item.id}`}
                key={item.id}
                className={
                  "flex h-[76px] flex-row space-x-2 overflow-hidden rounded-md bg-gray-100 p-4 shadow"
                }
              >
                <div className={"flex h-5 w-5 items-center justify-center"}>
                  <StatusBall status={item.status.text} />
                </div>
                <div
                  id={"listItemData"}
                  className={
                    "flex flex-col justify-between overflow-hidden truncate text-sm"
                  }
                >
                  <div className={"flex flex-row truncate"}>
                    {item.person.fullname} - {item.person.email}
                  </div>
                  <div className={"flex flex-row truncate text-gray-400"}>
                    {new Date(item.createdAt).toLocaleString()} -{" "}
                    {item.channelName}
                  </div>
                </div>
              </Link>
            ))}
        </ul>
      </div>
      {props.detail}
    </div>
  );
});
export default Layout;
