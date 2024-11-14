import RoundButton from "@/app/components/RoundButton";
import { PlusIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useInquiriesContext } from "@/app/(pages)/inquiries/InquiriesContext";

const NewInquirieButton = () => {
  const { setIsModalOpen } = useInquiriesContext();
  return (
    <RoundButton onClick={() => setIsModalOpen(true)}>
      <PlusIcon width={"24"} height={"24"} />
    </RoundButton>
  );
};
export default NewInquirieButton;
