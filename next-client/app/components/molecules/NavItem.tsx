import React from "react";

type Props = {
    data: {
        name: string;
        href: string;
        current: boolean;
        icon?: any;
    },
    onClick?: () => void;
};

function classNames(...classes:any[]) {
    return classes.filter(Boolean).join(' ')
}

const NavItem = (props: Props) => {
    const { data, onClick } = props;
    return (
        <li key={data.name} onClick={onClick}>
            <a
                href={data.href}
                className={classNames(
                    data.current
                        ? 'relative text-blue-300 before:bg-blue-300 before:w-1 before:absolute before:top-1/4 before:h-1/2 before:left-0 before:rounded-r-full before:flex before:items-center before:justify-center'
                        : 'text-gray-600 hover:bg-gray-800 hover:text-white',
                    'group flex gap-x-3 rounded-md py-2 text-sm/6 font-semibold px-6',
                )}
            >
                <data.icon aria-hidden="true" className="h-6 w-6 shrink-0" />
                {data.name}
            </a>
        </li>    );
};
export default NavItem;
