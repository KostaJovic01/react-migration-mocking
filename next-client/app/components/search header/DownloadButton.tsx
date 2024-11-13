import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import React from "react";

type Props = {};
const DownloadButton = (props: Props) => {
  return (
    <button
      type="button"
      className="bg-gray-white flex h-8 w-8 items-center justify-center rounded-sm p-2.5"
    >
      <ArrowDownTrayIcon aria-hidden="true" className="min-h-5 min-w-5" />
    </button>
  );
};
export default DownloadButton;
