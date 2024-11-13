import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import SearchInput from "@/app/components/search header/SearchInput";
import DownloadButton from "@/app/components/search header/DownloadButton";
import CloseButton from "@/app/components/search header/CloseButton";

type Props = {
  setSearchQuery: (query: string) => void;
  setIsSearchOpen: (isOpen: boolean) => void;
};

const SearchBar: React.FC<Props> = ({ setSearchQuery, setIsSearchOpen }) => (
  <div className={"flex h-8 w-full flex-row items-center"}>
    <MagnifyingGlassIcon aria-hidden="true" className="h-6 w-6" />
    <SearchInput setSearchQuery={setSearchQuery} />
    <DownloadButton />
    <CloseButton onClick={() => setIsSearchOpen(false)} />
  </div>
);

export default SearchBar;
