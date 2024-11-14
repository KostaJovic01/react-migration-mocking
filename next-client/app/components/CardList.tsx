import { EnquiriesData, Enquiry } from "@/app/types";
import StatusBall from "@/app/components/StatusBall";
import Link from "next/link";
import React from "react";
import { useInquiriesContext } from "@/app/(pages)/inquiries/InquiriesContext";

type Props = {
  data: EnquiriesData;
};
function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const CardList = (props: Props) => {
  return (
    <ul role="list" className="w-full space-y-3">
      {props.data.enquiries.map((item: Enquiry) => (
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
              {new Date(item.createdAt ?? "").toLocaleString()} -{" "}
              {item.channelName}
            </div>
          </div>
        </Link>
      ))}
    </ul>
  );
};
export default CardList;
