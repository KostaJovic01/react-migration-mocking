import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import SearchInput from "@/app/components/InquiryComponents/searchHeaderComponents/SearchInput";
import DownloadButton from "@/app/components/InquiryComponents/searchHeaderComponents/DownloadButton";
import CloseButton from "@/app/components/InquiryComponents/searchHeaderComponents/CloseButton";
import { useInquiriesContext } from "@/app/(pages)/inquiries/InquiriesContext";

const SearchBar = () => {
  const { setSearchQuery, handleOpenSearch } = useInquiriesContext();
  return (
    <div className={"flex h-8 w-full flex-row items-center"}>
      <MagnifyingGlassIcon aria-hidden="true" className="h-6 w-6" />
      <SearchInput setSearchQuery={setSearchQuery} />
      <DownloadButton />
      <CloseButton
        onClick={() => {
          handleOpenSearch();
          setSearchQuery("");
        }}
      />
    </div>
  );
};
export default SearchBar;
