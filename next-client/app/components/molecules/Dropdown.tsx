import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import React from "react";

type Props = {
  label: string;
  optionSelected: string;
  options: string[];
  setOption: (option: string) => void;
};
const Dropdown = (props: Props) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <label className="block text-sm/6 font-medium text-gray-900">
        {props.label}
      </label>
      <div>
        <MenuButton className="inline-flex w-full justify-between gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          {props.optionSelected}
          <ChevronDownIcon
            aria-hidden="true"
            className="-mr-1 h-5 w-5 text-gray-400"
          />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="z-20 flex flex-col p-2">
          {props.options.map((option) => (
            <MenuItem key={option}>
              <button
                className={"flex grow rounded-md p-2 hover:bg-gray-100"}
                onClick={() => props.setOption(option)}
              >
                {option}
              </button>
            </MenuItem>
          ))}
          <form action="#" method="POST"></form>
        </div>
      </MenuItems>
    </Menu>
  );
};
export default Dropdown;
