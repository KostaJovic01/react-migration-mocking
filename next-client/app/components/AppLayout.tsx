'use client'
import React, { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel} from '@headlessui/react'
import {
    Bars3Icon,
    CalendarIcon,
    ChartPieIcon,
    DocumentDuplicateIcon,
    FolderIcon,
    HomeIcon,
    UsersIcon,
} from '@heroicons/react/24/outline'
import ElipsisIcon from "@/app/assets/ElipsisIcon";
import ElipsisSquareIcon from "@/app/assets/ElipsisSquareIcon";
import CompasIcon from "@/app/assets/CompasIcon";
import KostaJImage from '@/app/assets/KostaJ.jpg';
import Sidebar from "@/app/components/organisms/Sidebar";

type Props = {
    children?: React.ReactNode;
};

export default function AppLayout(props: Props) {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [navigation, setNavigation] = useState([
        { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
        { name: 'Team', href: '#', icon: UsersIcon, current: false },
        { name: 'Projects', href: '#', icon: FolderIcon, current: false },
        { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
        { name: 'Documents', href: '#', icon: DocumentDuplicateIcon, current: false },
        { name: 'Reports', href: '#', icon: ChartPieIcon, current: false },
    ])
    const [teams, setTeams] = useState([
        { id: 1, name: 'My apps', href: '#', icon: ElipsisSquareIcon, initial: 'H', current: false },
        { id: 2, name: 'Discover other apps', href: '#', icon:CompasIcon, initial: 'T', current: true },
    ])
    const [user, setUser] = useState({
        name: 'Kosta Jovic',
        email: 'kosta.jovic@additive.eu',
        language: 'English',
        image: KostaJImage,
    })

    const handleNavigationClick = (name: string) => {
        setNavigation(navigation.map(item => ({
            ...item,
            current: item.name === name,
        })));
    };

    return (
        <>
            <div className={'flex flex-row'}>
                {/* Mobile Sidebar */}
                <Dialog open={sidebarOpen} onClose={setSidebarOpen} className="relative z-50 lg:hidden">
                    <DialogBackdrop
                        transition
                        className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
                    />
                    <div className="fixed inset-0 flex">
                        <DialogPanel
                            transition
                            className="relative flex w-full max-w-[272px] flex-1 transform transition duration-300 ease-in-out data-[closed]:-translate-x-full"
                        >
                            <Sidebar user={user} navigation={navigation} teams={teams} handleNavigationClick={handleNavigationClick} />
                        </DialogPanel>
                    </div>
                </Dialog>

                {/* Static sidebar for desktop */}
                <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
                    {/* Sidebar component, swap this element with another sidebar if you like */}
                    <Sidebar user={user} navigation={navigation} teams={teams} handleNavigationClick={handleNavigationClick} />
                </div>

                {/* Static Header for Mobile */}
                <div className="fixed w-screen top-0 z-40 flex flex-row justify-between items-center bg-gray-900 px-4 py-4 shadow-sm sm:px-6 lg:hidden">
                    <button type="button" onClick={() => setSidebarOpen(true)} className="-m-2.5 p-2.5 text-gray-400 lg:hidden">
                        <span className="sr-only">Open sidebar</span>
                        <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                    </button>
                    <button type="button" onClick={() => setSidebarOpen(true)} className="-m-2.5 p-2.5 text-gray-400 lg:hidden">
                        <ElipsisIcon />
                    </button>
                </div>

                <main>
                    {props.children}
                </main>
            </div>
        </>
    )
}
