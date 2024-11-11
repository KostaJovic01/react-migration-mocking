"use client";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import React from "react";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  children?: React.ReactNode;
  type?: "sm" | "md" | "lg";
};

const Modal = (props: Props) => {
  const { open, setOpen } = props;
  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
          <DialogPanel
            transition
            className="lg: relative w-screen transform overflow-hidden rounded-lg bg-white px-6 pb-4 pt-0 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-sm sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className={"flex"}>
              <div className={"h-20 w-full py-6"}>
                <button
                  onClick={() => setOpen(false)}
                  className={
                    "flex h-8 w-8 items-center justify-center rounded-md bg-gray-300"
                  }
                >
                  <XMarkIcon className={"h-4 w-4 text-black"} />
                </button>
              </div>
            </div>
            {props.children}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};
export default Modal;
