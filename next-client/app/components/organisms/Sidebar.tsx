import SidebarHeader from "@/app/components/molecules/SidebarHeader";
import UserNavItem from "@/app/components/molecules/UserNavItem";
import React from "react";
import NavItem from "@/app/components/molecules/NavItem";
import SidebarFooterItem from "@/app/components/molecules/SidebarFooterItem";

type Props = {
    navigation: any[],
    teams: any[],
    user: any
    handleNavigationClick: (name: string) => void
}
const Sidebar = (props: Props) => {
    const { navigation, teams, user, handleNavigationClick } = props;
    return (
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white dark:bg-gray-900 ring-1 ring-white/10">
            <SidebarHeader />
            <nav className="flex flex-1 flex-col">
                <ul role="list" className="flex flex-1 flex-col gap-y-7 justify-between">
                    <li>
                        <ul role="list">
                        {navigation.map((item) => (
                                <NavItem data={item} key={item.name} onClick={() => handleNavigationClick(item.name)} />
                            ))}
                        </ul>
                    </li>
                    <li>
                        <ul role="list">
                            {teams.map((team) => (
                                <SidebarFooterItem team={team} key={team.name}/>
                            ))}
                            <UserNavItem user={user}/>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
export default Sidebar;
