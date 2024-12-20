"use client";
import Person from "@/app/(pages)/inquiries/@detail/[id]/@inquiry/Person";
import React, { useEffect, useState } from "react";
import { useAppSelector } from "@/app/redux/hooks";
import { useParams } from "next/navigation";
import { Enquiry } from "@/app/types";
import RoomStays from "@/app/(pages)/inquiries/@detail/[id]/@inquiry/RoomStays";

export default function Page() {
  const { id } = useParams();
  const inquiry = useAppSelector((state) =>
    state.inquiryState.enquiries.find((inquiry) => inquiry.id === id),
  );

  return (
    <div>
      {inquiry?.person && <Person person={inquiry?.person}></Person>}
      {inquiry?.roomStays && (
        <RoomStays roomStays={inquiry?.roomStays}></RoomStays>
      )}
    </div>
  );
}
