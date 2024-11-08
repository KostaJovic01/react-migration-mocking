"use client";
import { useParams } from "next/navigation";
import { useAppSelector } from "@/app/redux/hooks";
import React, { useEffect, useState } from "react";
import { Enquiry } from "@/app/types";
import StatusLabel from "@/app/components/molecules/StatusLabel";
import {
  Field,
  Label,
  Radio,
  RadioGroup,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/16/solid";
import DataLabel from "@/app/components/molecules/DataLabel";

type Props = {};
const Page = (props: Props) => {
  const { id } = useParams();
  const inquires = useAppSelector((state) => state.inquiryState);
  const tabs = ["Inquiry", "Status"];
  const [selected, setSelected] = useState(tabs[0]);
  const [inquiry, setInquiry] = useState<Enquiry>();

  useEffect(() => {
    setInquiry(inquires.enquiries.find((inquiry) => inquiry.id === id));
  }, [inquires]);

  useEffect(() => {}, [inquiry]);

  console.table(inquiry);
  return (
    <div className={"flex flex-col px-6 py-32"}>
      <div className={"flex flex-col"}>
        <StatusLabel status={inquiry?.status.text} />
        <div className={"pb-2 pt-4 text-xl"}>{inquiry?.person.fullname}</div>
        <div className={"text-sm"}>
          {inquiry?.person.email} -
          {inquiry && new Date(inquiry.createdAt).toLocaleString()}
        </div>
        <TabGroup>
          <TabList
            defaultChecked={true}
            className={"flex w-full flex-row space-x-2 py-8"}
          >
            {tabs.map((tab) => (
              <Tab
                className={
                  "focus rounded-sm bg-gray-100 px-4 py-[10px] text-sm focus:outline-none data-[selected]:bg-blue-100 data-[selected]:text-blue-300"
                }
              >
                {tab}
              </Tab>
            ))}
          </TabList>
          <TabPanels className={"text-sm"}>
            <TabPanel>
              <div>Contact Information</div>
              <DataLabel
                label={"First Name"}
                value={
                  inquiry?.person.givenName ? inquiry.person.givenName : ""
                }
              />
              <DataLabel
                label={"Last Name"}
                value={
                  inquiry?.person.familyName ? inquiry.person.familyName : ""
                }
              />
              <DataLabel
                value={inquiry?.person.gender ? inquiry.person.gender : ""}
                label={"Gender"}
              />
              <DataLabel
                value={inquiry?.person.language ? inquiry.person.language : ""}
                label={"Language"}
              />
              <DataLabel
                value={inquiry?.person.gender ? inquiry.person.gender : ""}
                label={"Gender"}
              />
              <DataLabel
                value={inquiry?.person.email ? inquiry.person.email : ""}
                label={"Email Address"}
              />
              <DataLabel
                value={
                  inquiry?.person.newsletter ? inquiry.person.newsletter : ""
                }
                label={"Newsletter"}
              />
              <DataLabel
                value={
                  inquiry?.person.newsletter ? inquiry?.person.newsletter : ""
                }
                label={"Catalog"}
              />
            </TabPanel>
            <TabPanel></TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
};
export default Page;
