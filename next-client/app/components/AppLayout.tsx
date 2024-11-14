"use client";
import React, { useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import {
  Bars3Icon,
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  UsersIcon,
  EllipsisVerticalIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
import CallBellIcon from "@/app/assets/CallBellIcon";
import ElipsisSquareIcon from "@/app/assets/ElipsisSquareIcon";
import CompasIcon from "@/app/assets/CompasIcon";
import KostaJImage from "@/app/assets/KostaJ.jpg";
import Sidebar from "@/app/components/Nav/Sidebar/Sidebar";

type Props = {
  children?: React.ReactNode;
};

export default function AppLayout(props: Props) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [navigation, setNavigation] = useState([
    {
      name: "Inquiries",
      href: "/inquiries",
      icon: CallBellIcon,
      current: true,
    },
    { name: "Team", href: "#", icon: UsersIcon, current: false },
    { name: "Projects", href: "#", icon: FolderIcon, current: false },
    { name: "Calendar", href: "#", icon: CalendarIcon, current: false },
    {
      name: "Documents",
      href: "#",
      icon: DocumentDuplicateIcon,
      current: false,
    },
    {
      name: "Settings",
      href: "/settings",
      icon: Cog6ToothIcon,
      current: false,
    },
  ]);
  const [teams, setTeams] = useState([
    {
      id: 1,
      name: "My apps",
      href: "#",
      icon: ElipsisSquareIcon,
      initial: "H",
      current: false,
    },
    {
      id: 2,
      name: "Discover other apps",
      href: "#",
      icon: CompasIcon,
      initial: "T",
      current: true,
    },
  ]);
  const [user, setUser] = useState({
    name: "Kosta Jovic",
    email: "kosta.jovic@additive.eu",
    language: "English",
    image: KostaJImage,
  });

  const handleNavigationClick = (name: string) => {
    setNavigation(
      navigation.map((item) => ({
        ...item,
        current: item.name === name,
      })),
    );
  };

  return (
    <>
      <div className={"flex w-screen flex-row"}>
        {/* Static sidebar for desktop */}
        <div className="hidden lg:inset-y-0 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <Sidebar
            user={user}
            navigation={navigation}
            teams={teams}
            handleNavigationClick={handleNavigationClick}
          />
        </div>
        <main className={"flex flex-grow"}>{props.children}</main>
      </div>
    </>
  );
}
