import CardList from "@/app/components/molecules/CardList";
import React from "react";
import { useInquiriesContext } from "@/app/inquiries/InquiriesContext";

const InquiriesList = () => {
  const { inquiries, getFilteredInquiries } = useInquiriesContext();
  return (
    <ul role="list" className="w-full space-y-3 overflow-y-auto">
      {getFilteredInquiries() ? (
        <CardList data={getFilteredInquiries()} />
      ) : (
        inquiries && <CardList data={inquiries} />
      )}
    </ul>
  );
};
export default InquiriesList;
