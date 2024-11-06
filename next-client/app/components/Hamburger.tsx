"use client";
import { useState } from "react";
import HamburgerIcon from "@/app/assets/HamburgerIcon";
import Sidebar from "@/app/components/AppLayout";
import ElipsisIcon from "@/app/assets/ElipsisIcon";
type Props = {};
const Hamburger = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={"relative h-screen w-screen"}>
      <Sidebar></Sidebar>
    </div>
  );
};
export default Hamburger;
