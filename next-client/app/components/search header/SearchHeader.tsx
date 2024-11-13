import React from "react";
import SearchBar from "@/app/components/search header/SearchBar";
import SearchCategorySelection from "@/app/components/search header/SearchCategorySelection";

type Props = {
  setSearchQuery: (query: string) => void;
  setIsSearchOpen: (isOpen: boolean) => void;
  searchCategory: "name" | "channel" | "year" | undefined;
  setSearchCategory: (category: "name" | "channel" | "year") => void;
};

const SearchHeader: React.FC<Props> = ({
  setSearchQuery,
  setIsSearchOpen,
  searchCategory,
  setSearchCategory,
}) => {
  return (
    <div className={"flex h-max w-full flex-col space-y-6"}>
      <SearchBar
        setSearchQuery={setSearchQuery}
        setIsSearchOpen={setIsSearchOpen}
      />
      <SearchCategorySelection
        searchCategory={searchCategory}
        setSearchCategory={setSearchCategory}
      />
    </div>
  );
};

export default SearchHeader;
