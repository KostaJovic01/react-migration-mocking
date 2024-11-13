import React from "react";
import SearchBar from "@/app/components/InquiryComponents/searchHeaderComponents/SearchBar";
import SearchCategorySelection from "@/app/components/InquiryComponents/searchHeaderComponents/SearchCategorySelection";

const SearchHeader = () => {
  return (
    <div className={"flex h-max w-full flex-col space-y-6"}>
      <SearchBar />
      <SearchCategorySelection />
    </div>
  );
};
export default SearchHeader;
