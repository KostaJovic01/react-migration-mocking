"use client";
import Image, { StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";

import KostaJImage from "@/app/assets/KostaJ.jpg";
import { UsersIcon } from "@heroicons/react/24/outline";
import UserDataLabel from "@/app/components/molecules/UserDataLabel";
import EditIcon from "@/app/assets/EditIcon";
import Modal from "@/app/components/molecules/Modal";
import FormInput from "@/app/components/molecules/FormInput";
import Dropdown from "@/app/components/molecules/Dropdown";
import { setUserStore } from "@/app/redux/userSlice";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import { User } from "@/app/types";

type Props = {};
const Page = (props: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState<User>({
    id: "0",
    firstName: "",
    lastName: "",
    email: "",
    language: "",
  });
  const [tempUser, setTempUser] = useState(user);

  const dispatch = useAppDispatch();
  const updateUserStore = (inputUser: User) => {
    dispatch(setUserStore(inputUser));
  };
  const userStore = useAppSelector((state) => state.userState);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const response = await fetch("/api/user", { cache: "force-cache" });
      const data = await response.json();
      setUser(data.user);
      setTempUser(data.user);
      updateUserStore(data.user);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  useEffect(() => {
    console.table(user);
    updateUserStore(user);
  }, [user]);

  return (
    <div className={"relative flex h-screen flex-col"}>
      <div
        id={"header"}
        className={
          "flex h-1/3 min-h-max items-center justify-around bg-gray-900 py-14 text-white"
        }
      >
        <div className={"flex min-h-max flex-col items-center md:flex-row"}>
          <Image
            alt={`${user.firstName}'s profile`}
            src={user.image ? user.image : KostaJImage}
            className="h-[88px] w-[88px] rounded-full"
          />
          <div
            className={"flex flex-col items-center pt-4 md:items-start md:pl-6"}
          >
            <div className={"md:text-5xl"}>
              {user.firstName + " " + user.lastName}
            </div>
            <div>{user.email}</div>
          </div>
        </div>
      </div>
      <div
        id={"body"}
        className={
          "flex h-2/3 flex-col space-y-9 bg-white px-10 pt-10 text-gray-600"
        }
      >
        <UserDataLabel
          label={"Name"}
          value={user.firstName + " " + user.lastName}
        >
          <UsersIcon className={"h-6 w-6"} />{" "}
        </UserDataLabel>
        <UserDataLabel label={"Email Address"} value={user.email}>
          <UsersIcon className={"h-6 w-6"} />{" "}
        </UserDataLabel>
        <UserDataLabel label={"Language"} value={user.language}>
          <UsersIcon className={"h-6 w-6"} />{" "}
        </UserDataLabel>
      </div>
      <button
        onClick={() => setIsModalOpen(true)}
        id={"eddit button"}
        className={
          "absolute bottom-6 right-6 flex h-14 w-14 items-center justify-center rounded-full bg-black text-white"
        }
      >
        <EditIcon width={"24"} height={"24"} />
      </button>
      <Modal open={isModalOpen} setOpen={setIsModalOpen}>
        <div className={"flex flex-col space-y-5"}>
          <span
            className={"text-xl"}
          >{`${tempUser.firstName} ${tempUser.lastName}`}</span>
          <FormInput
            readonly={true}
            label={"Email Address"}
            value={tempUser.email}
            setValue={() => {}}
          />{" "}
          <FormInput
            label={"First Name"}
            value={tempUser.firstName}
            setValue={(firstName) =>
              setTempUser({ ...tempUser, firstName: firstName })
            }
          />
          <FormInput
            label={"Last Name"}
            value={tempUser.lastName}
            setValue={(lastName) =>
              setTempUser({ ...tempUser, lastName: lastName })
            }
          />
          <Dropdown
            label={"Language"}
            optionSelected={tempUser.language}
            options={["English", "German"]}
            setOption={(option) =>
              setTempUser({ ...tempUser, language: option })
            }
          />
          <div className="mt-5 flex flex-row justify-end">
            <button
              type="button"
              onClick={() => {
                setUser(tempUser);
                setIsModalOpen(false);
              }}
              className="w-mas inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default Page;
