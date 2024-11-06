import React from "react";

type Props = {
  team: {
    name: string;
    href: string;
    current: boolean;
    initial: string;
    icon: any;
  };
  onClick?: () => void;
};

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}
const SidebarFooterItem = (props: Props) => {
  const { team, onClick } = props;
  return (
    <li key={team.name} onClick={onClick}>
      <a
        href={team.href}
        className={classNames(
          team.current && "bg-blue-200 text-blue-400",
          "group flex h-16 grow flex-row items-center gap-x-3 space-x-4 px-6 text-sm/6 font-semibold text-gray-600",
        )}
      >
        <team.icon aria-hidden="true" className="h-6 w-6 shrink-0" />
        <span className="truncate">{team.name}</span>
      </a>
    </li>
  );
};
export default SidebarFooterItem;
