import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
type Props = {
  handleOpenSearch: () => void;
};
const Dropdown = (props: Props) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex h-8 w-8 items-center justify-center gap-x-1.5 rounded-md bg-gray-300 p-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          <EllipsisVerticalIcon
            aria-hidden="true"
            className="min-h-5 min-w-5 text-black"
          />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white text-sm shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <button
              className="block w-full px-6 py-3 hover:bg-gray-300"
              onClick={props.handleOpenSearch}
            >
              Search
            </button>
          </MenuItem>
          <MenuItem>
            <button className="block w-full px-6 py-3 hover:bg-gray-300">
              Export
            </button>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
};
export default Dropdown;
