import React from "react";
import SearchCategoryButton from "@/app/components/InquiryComponents/searchHeaderComponents/SearchCategoryButton";
import { useInquiriesContext } from "@/app/(pages)/inquiries/InquiriesContext";

const SearchCategorySelection = () => {
  const { searchCategory, setSearchCategory } = useInquiriesContext();
  return (
    <div className={"flex flex-row items-center space-x-2"}>
      {["name", "channel", "year"].map((category) => (
        <SearchCategoryButton
          key={category}
          onClick={() =>
            setSearchCategory(category as "name" | "channel" | "year")
          }
          category={searchCategory}
          label={category.charAt(0).toUpperCase() + category.slice(1)}
        />
      ))}
    </div>
  );
};
export default SearchCategorySelection;
