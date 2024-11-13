import React from "react";
import SearchCategoryButton from "@/app/components/search header/SearchCategoryButton";

type Props = {
  searchCategory: "name" | "channel" | "year" | undefined;
  setSearchCategory: (category: "name" | "channel" | "year") => void;
};

const SearchCategorySelection: React.FC<Props> = ({
  searchCategory,
  setSearchCategory,
}) => {
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
