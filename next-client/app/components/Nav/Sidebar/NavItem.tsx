import React from "react";

type Props = {
  data: {
    name: string;
    href: string;
    current: boolean;
    icon?: any;
  };
  onClick?: () => void;
};

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const NavItem = (props: Props) => {
  const { data, onClick } = props;
  return (
    <li key={data.name} onClick={onClick}>
      <a
        href={data.href}
        className={classNames(
          data.current
            ? "relative text-blue-300 before:absolute before:left-0 before:top-1/4 before:flex before:h-1/2 before:w-1 before:items-center before:justify-center before:rounded-r-full before:bg-blue-300"
            : "text-gray-600 hover:bg-gray-300",
          "group flex gap-x-3 rounded-md px-6 py-2 text-sm/6 font-semibold",
        )}
      >
        <data.icon aria-hidden="true" className="h-6 w-6 shrink-0" />
        {data.name}
      </a>
    </li>
  );
};
export default NavItem;
