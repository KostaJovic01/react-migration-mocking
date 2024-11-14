"use client";
import {
  Bars3Icon,
  CalendarIcon,
  Cog6ToothIcon,
  DocumentDuplicateIcon,
  EllipsisVerticalIcon,
  FolderIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import Sidebar from "@/app/components/Nav/Sidebar/Sidebar";
import CallBellIcon from "@/app/assets/CallBellIcon";
import ElipsisSquareIcon from "@/app/assets/ElipsisSquareIcon";
import CompasIcon from "@/app/assets/CompasIcon";
import KostaJImage from "@/app/assets/KostaJ.jpg";
import Dropdown from "@/app/components/Nav/Dropdown";

type Props = {
  children?: React.ReactNode;
  handleOpenSearch?: () => void;
};
const MobileNav = (props: Props) => {
  const [isOpen, setSidebarOpen] = useState(false);
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
    <div className="absolute left-0 top-0 z-10 flex w-full">
      {props.children ? (
        <div
          className={`flex w-full flex-row justify-between px-6 py-4 lg:justify-end ${props.children && "border-b-2 border-solid border-gray-300"}`}
        >
          {props.children}
        </div>
      ) : (
        <>
          <div
            className={
              "flex w-full flex-row justify-between px-6 py-4 lg:justify-end"
            }
          >
            <button
              type="button"
              onClick={() => setSidebarOpen(true)}
              className="flex h-8 w-8 items-center justify-center rounded-sm bg-gray-300 p-2.5 lg:hidden"
            >
              <Bars3Icon aria-hidden="true" className="min-h-5 min-w-5" />
            </button>
            <Dropdown
              handleOpenSearch={() =>
                props.handleOpenSearch && props.handleOpenSearch()
              }
            />
          </div>
          <Dialog
            open={isOpen}
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
        </>
      )}
    </div>
  );
};
export default MobileNav;
