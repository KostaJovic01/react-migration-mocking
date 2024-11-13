import React from "react";

type Props = {
  setSearchQuery: (query: string) => void;
};

const SearchInput: React.FC<Props> = ({ setSearchQuery }) => {
  return (
    <input
      className={"h-8 flex-grow focus:border-none"}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
};

export default SearchInput;
