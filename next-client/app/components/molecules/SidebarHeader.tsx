import React from "react";
import SwitchHouseIcon from "@/app/assets/SwitchHouseIcon";

type Props = {};
const SidebarHeader = (props: Props) => {
    return (
        <div id='sidebar header' className="flex shrink-0 items-center flex-row  justify-between p-6 hover:bg-gray-300">
            <div className='flex flex-row space-x-4 items-center'>
                <img
                    alt="Your Company"
                    src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                    className="h-8 w-auto"
                />
                <div className={'flex flex-col text-sm/6 font-semibold text-gray-600'}>
                    <div>Company Name</div>
                    <div className={'text-gray-400'}>User Name</div>
                </div>
            </div>
            <div>
                <SwitchHouseIcon />
            </div>
        </div>    );
};
export default SidebarHeader;
