import React from "react";
import Image, { StaticImageData } from "next/image";
import ElipsisIcon from "@/app/assets/ElipsisIcon";

type Props = {
  user: {
    name: string;
    email: string;
    language: string;
    image: StaticImageData;
  };
};

const UserNavItem = (props: Props) => {
  const { user } = props;
  return (
    <li>
      <a
        href="/me"
        className="flex flex-row justify-between py-4 pl-4 pr-6 text-sm/6 font-semibold text-gray-600"
      >
        <div className={"flex flex-row space-x-4"}>
          <Image
            alt={`${user.name}'s profile`}
            src={user.image}
            className="h-8 w-8 rounded-full"
          />
          <div>{user.name}</div>
        </div>

        <ElipsisIcon />
      </a>
    </li>
  );
};

export default UserNavItem;
