"use client";
import { useParams } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import React, { useEffect, useState } from "react";
import { Enquiry } from "@/app/types";
import StatusLabel from "@/app/components/StatusLabel";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Modal from "@/app/components/Modal";
import { setInquiryStore } from "@/app/redux/inquirySlice";
import Link from "next/link";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useInquiriesContext } from "@/app/(pages)/inquiries/InquiriesContext";

type Props = {
  children?: React.ReactNode;
  details: React.ReactNode;
  inquiry: React.ReactNode;
};

const Page = (props: Props) => {
  const { id } = useParams();
  const inquiriesState = useAppSelector((state) => state.inquiryState);
  const [inquiry, setInquiry] = useState<Enquiry | undefined>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { handleDeleteInquiry } = useInquiriesContext();

  useEffect(() => {
    setInquiry(inquiriesState.enquiries.find((inq) => inq.id === id));
  }, [inquiriesState, id]);

  return (
    <div
      className={`${inquiry ? "w-full px-6" : "invisible w-0 px-0"} relative flex h-screen flex-col py-32`}
    >
      <Modal open={isModalOpen} setOpen={setIsModalOpen}>
        <div className="text-md">Delete</div>
        <div className="text-sm">
          Are you sure you want to delete this element?
        </div>
        <div className="flex w-full flex-row justify-end">
          <Link
            href={"/inquiries"}
            className="rounded-sm bg-red-200 p-2 text-sm text-red-500"
            onClick={() => {
              handleDeleteInquiry(inquiry);
              setIsModalOpen(false);
            }}
          >
            Delete
          </Link>
        </div>
      </Modal>
      <div
        id="inquire-header"
        className="absolute left-0 top-0 flex w-full flex-row justify-between px-6 py-4"
      >
        <Link
          href={"/inquiries"}
          className={
            "flex h-8 w-8 items-center justify-center rounded-sm bg-gray-300 p-2.5"
          }
        >
          <XMarkIcon />
        </Link>
        <button
          className={
            "flex h-8 w-max items-center justify-center rounded-sm bg-gray-300 p-2.5"
          }
          onClick={() => setIsModalOpen(true)}
        >
          <div>Delete</div>
        </button>
      </div>
      <StatusLabel status={inquiry?.status.text} />
      <div className="pb-2 pt-4 text-3xl">{inquiry?.person.fullname}</div>
      <div className="text-sm">
        {inquiry?.person.email} -{" "}
        {inquiry && new Date(inquiry.createdAt ?? "").toLocaleString()}
      </div>
      <TabGroup>
        <TabList className="flex w-full flex-row space-x-2 py-8">
          {["inquiry", "status"].map((tab) => (
            <Tab key={tab}>
              <a
                href={`#${tab}`}
                className="focus rounded-sm bg-gray-100 px-4 py-[10px] text-sm focus:outline-none data-[selected]:bg-blue-100 data-[selected]:text-blue-300"
              >
                {tab}
              </a>
            </Tab>
          ))}
        </TabList>
        <TabPanels className="text-sm">
          <TabPanel>{props.inquiry}</TabPanel>
          <TabPanel>{props.details}</TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
};

export default Page;
