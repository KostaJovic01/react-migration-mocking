import React from "react";

type Props = {
  value: string | boolean | number | undefined;
  label: string;
};
const DataLabel = (props: Props) => {
  return (
    <div
      className={"flex flex-row border-b-2 border-solid border-gray-300 py-2"}
    >
      <div className={"w-1/3 min-w-max text-gray-400"}>{props.label}</div>
      <div>{props.value}</div>
    </div>
  );
};
export default DataLabel;
