import React from "react";

type Props = {
  onClick: () => void;
  category: "name" | "channel" | "year" | undefined;
  label: string;
};
const SearchCategoryButton = (props: Props) => {
  return (
    <button
      type="button"
      onClick={() => props.onClick()}
      className={`${props.category === props.label.toLowerCase() ? "bg-blue-300" : "bg-gray-300"} flex h-8 w-max items-center justify-center rounded-sm px-3`}
    >
      {props.label}
    </button>
  );
};
export default SearchCategoryButton;
