import EditIcon from "@/app/assets/EditIcon";
import React from "react";

type Props = {
  onClick: () => void;
  children?: React.ReactNode;
};
const RoundButton = (props: Props) => {
  return (
    <button
      onClick={() => props.onClick()}
      id={"round-button"}
      className={
        "absolute bottom-6 right-6 flex h-14 w-14 items-center justify-center rounded-full bg-black text-white"
      }
    >
      {props.children}
    </button>
  );
};
export default RoundButton;
