import CardList from "@/app/components/CardList";
import React from "react";
import { useInquiriesContext } from "@/app/(pages)/inquiries/InquiriesContext";
import CardListLoading from "@/app/components/CardListLoading";

const InquiriesList = () => {
  const { inquiries, getFilteredInquiries, isInquiriesLoading } =
    useInquiriesContext();

  return (
    <ul role="list" className="w-full space-y-3 overflow-y-auto">
      {isInquiriesLoading ? (
        <CardListLoading listSize={4} />
      ) : getFilteredInquiries() ? (
        <CardList data={getFilteredInquiries()} />
      ) : (
        inquiries && <CardList data={inquiries} />
      )}
    </ul>
  );
};
export default InquiriesList;
