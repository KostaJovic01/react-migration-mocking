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
} from "@heroicons/react/24/outline";
import CallBellIcon from "@/app/assets/CallBellIcon";
import ElipsisSquareIcon from "@/app/assets/ElipsisSquareIcon";
import CompasIcon from "@/app/assets/CompasIcon";
import KostaJImage from "@/app/assets/KostaJ.jpg";
import Sidebar from "@/app/components/organisms/Sidebar";

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
    { name: "Reports", href: "#", icon: ChartPieIcon, current: false },
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
      <div className={"flex flex-row"}>
        {/* Mobile Sidebar */}
        <Dialog
          open={sidebarOpen}
          onClose={setSidebarOpen}
          className="relative z-50 lg:hidden"
        >
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
          />
          <div className="fixed inset-0 flex">
            <DialogPanel
              transition
              className="relative flex w-full max-w-[272px] flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
            >
              <Sidebar
                user={user}
                navigation={navigation}
                teams={teams}
                handleNavigationClick={handleNavigationClick}
              />
            </DialogPanel>
          </div>
        </Dialog>

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

        {/* Static Header for Mobile */}
        <div className="fixed top-0 z-10 flex w-screen flex-row items-center justify-between px-4 py-4 text-black sm:px-6 lg:hidden">
          <button
            type="button"
            onClick={() => setSidebarOpen(true)}
            className="flex h-8 w-8 items-center justify-center rounded-sm bg-gray-300 p-2.5 lg:hidden"
          >
            <Bars3Icon aria-hidden="true" className="min-h-5 min-w-5" />
          </button>
          <button
            type="button"
            onClick={() => setSidebarOpen(true)}
            className="flex h-8 w-8 items-center justify-center rounded-sm bg-gray-300 p-2.5 lg:hidden"
          >
            <EllipsisVerticalIcon className="min-h-5 min-w-5" />
          </button>
        </div>

        <main className={"grow"}>{props.children}</main>
      </div>
    </>
  );
}
