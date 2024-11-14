"use client";
import { useParams } from "next/navigation";
import { useAppSelector } from "@/app/redux/hooks";

type Props = {};
/**
 * - If Active: Write: The enquiry is on its way!
 * - If Pending: Write: The enquiy is still in the making..
 * - If Done: Write: The enquiry is done!
 */
export default function Page({}: Props) {
  const { id } = useParams();
  const inquiry = useAppSelector((state) =>
    state.inquiryState.enquiries.find((inquiry) => inquiry.id === id),
  );
  return (
    <div>
      {inquiry?.status.text === "approved" && "The enquiry is on its way!"}
      {inquiry?.status.text === "pending" &&
        "The enquiry is still in the making."}
      {inquiry?.status.text === "error" && "The enquiry is done!"}
    </div>
  );
}
