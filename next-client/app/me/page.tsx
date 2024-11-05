'use client'
import Image from "next/image";
import React, {useState} from "react";

import KostaJImage from "@/app/assets/KostaJ.jpg";
import {UsersIcon} from "@heroicons/react/24/outline";

type Props = {};
const Page = (props: Props) => {
    const [user, setUser] = useState({
        name: 'Kosta Jovic',
        email: 'kosta.jovic@additive.eu',
        language: 'English',
        image: KostaJImage,
    })
    return (
        <div className={'flex flex-col h-screen'}>
            <div id={'header'} className={'flex h-1/3 bg-gray-900 items-center justify-around text-white'}>
                <div className={'flex flex-col items-center'}>
                    <Image
                        alt={`${user.name}'s profile`}
                        src={user.image}
                        className="h-[88px] w-[88px] rounded-full"
                    />
                    <div>{user.name}</div>
                    <div>{user.email}</div>
                </div>
            </div>
            <div id={'body'} className={'bg-white h-2/3 flex flex-col  text-gray-600 px-10 pt-10'}>
                <div className={'flex flex-row w-full space-x-4 items-c'} >
                    <UsersIcon className={' h-6 w-6'}/>
                    <div className={'flex flex-col'}>
                        <div>
                            Name
                        </div>
                        <div>
                            {user.name}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Page;
