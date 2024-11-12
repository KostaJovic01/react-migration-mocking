"use client";
import { useParams } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import React, { useEffect, useState } from "react";
import { Enquiry } from "@/app/types";
import StatusLabel from "@/app/components/molecules/StatusLabel";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Modal from "@/app/components/molecules/Modal";
import { setInquiryStore } from "@/app/redux/inquirySlice";
import { useRouter } from "next/router";

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
  const dispatch = useAppDispatch();

  const updateInquiryStore = (updatedInquiries: Enquiry[]) => {
    dispatch(
      setInquiryStore({ ...inquiriesState, enquiries: updatedInquiries }),
    );
  };

  const deleteInquiry = () => {
    if (!inquiry) return;
    const updatedInquiries = inquiriesState.enquiries.filter(
      (item) => item.id !== inquiry.id,
    );
    updateInquiryStore(updatedInquiries);
  };

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
          <button
            className="rounded-sm bg-red-200 p-2 text-sm text-red-500"
            onClick={() => {
              deleteInquiry();
              setIsModalOpen(false);
            }}
          >
            Delete
          </button>
        </div>
      </Modal>
      <div
        id="inquire-header"
        className="fixed top-0 flex flex-row justify-between"
      >
        <a href={"/inquiries"}>X</a>
        <button onClick={() => setIsModalOpen(true)}>Delete</button>
      </div>
      <StatusLabel status={inquiry?.status.text} />
      <div className="pb-2 pt-4 text-xl">{inquiry?.person.fullname}</div>
      <div className="text-sm">
        {inquiry?.person.email} -{" "}
        {inquiry && new Date(inquiry.createdAt).toLocaleString()}
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
