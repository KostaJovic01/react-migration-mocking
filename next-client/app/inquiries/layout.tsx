"use client";
"use strict";
import { useAppDispatch } from "@/app/redux/hooks";
import React, { useCallback, useEffect, useState } from "react";
import { EnquiriesData, Enquiry } from "@/app/types";
import { setInquiryStore } from "@/app/redux/inquirySlice";
import StatusBall from "@/app/components/atoms/StatusBall";
import Link from "next/link";
import MobileNav from "@/app/components/MobileNav";
import {
  MagnifyingGlassIcon,
  XMarkIcon,
  ArrowDownTrayIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import CardList from "@/app/components/molecules/CardList";
import RoundButton from "@/app/components/RoundButton";
import Modal from "@/app/components/molecules/Modal";
import { FieldErrors, useForm } from "react-hook-form";
import FormInput from "@/app/components/molecules/FormInput";
import { InquirySchema, InquirySchemaData } from "@/app/zod/InquirySchema";
import { zodResolver } from "@hookform/resolvers/zod";
import FormField from "@/app/components/FormField";
import Dropdown from "@/app/components/molecules/Dropdown";
import SearchCategoryButton from "@/app/components/search header/SearchCategoryButton";
import SearchCategorySelection from "@/app/components/search header/SearchCategorySelection";
import { CloseButton } from "@headlessui/react";
import DownloadButton from "@/app/components/search header/DownloadButton";
import SearchInput from "@/app/components/search header/SearchInput";
import SearchBar from "@/app/components/search header/SearchBar";
import SearchHeader from "@/app/components/search header/SearchHeader";

type Props = {
  detail: React.ReactNode;
};

const Layout = React.memo((props: Props) => {
  const dispatch = useAppDispatch();
  const [inquiries, setInquiries] = useState<EnquiriesData>();
  const [detailOpen, setDetailOpen] = useState(true);

  const fetchInquiries = useCallback(async () => {
    try {
      const response = await fetch("/api/inquiries", { cache: "force-cache" });
      const data = await response.json();
      setInquiries(data);
      dispatch(setInquiryStore(data));
    } catch (error) {
      console.error("Error fetching inquiries:", error);
    }
  }, [dispatch]); // Only recreate if dispatch changes

  useEffect(() => {
    fetchInquiries();
  }, []);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const handleOpenSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };
  const [searchCategory, setSearchCategory] = useState<
    "name" | "channel" | "year"
  >();
  const [searchQuery, setSearchQuery] = useState("");
  const filterInquiriesByName = () => {
    let filteredInquiries: EnquiriesData = { enquiries: [] };
    filteredInquiries.enquiries =
      inquiries?.enquiries.filter((inquiry) =>
        inquiry.person.fullname
          .toLowerCase()
          .includes(searchQuery.toLowerCase()),
      ) ?? [];
    return filteredInquiries;
  };
  const filterInquiriesByChannel = () => {
    let filteredInquiries: EnquiriesData = { enquiries: [] };
    filteredInquiries.enquiries =
      inquiries?.enquiries.filter(
        (inquiry) =>
          inquiry.channelName &&
          inquiry.channelName.toLowerCase().includes(searchQuery.toLowerCase()),
      ) ?? [];
    return filteredInquiries;
  };
  const filterInquiriesByYear = () => {
    let filteredInquiries: EnquiriesData = { enquiries: [] };
    filteredInquiries.enquiries =
      inquiries?.enquiries.filter(
        (inquiry) =>
          inquiry.createdAt &&
          inquiry.createdAt.toLowerCase().includes(searchQuery.toLowerCase()),
      ) ?? [];
    return filteredInquiries;
  };

  const getFilteredInquiries = () => {
    switch (searchCategory) {
      case "name":
        return filterInquiriesByName();
      case "channel":
        return filterInquiriesByChannel();
      case "year":
        return filterInquiriesByYear();
      default:
        return filterInquiriesByName();
    }
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tempEnquiry, setTempEnquiry] = useState<Enquiry>({
    channelName: "",
    createdAt: "",
    id: "",
    language: "",
    person: {
      givenName: "",
      familyName: "",
      language: "",
      email: "",
      newsletter: false,
      fullname: "",
    },

    status: {
      text: "pending",
    },
    title: "",
  });
  const handleCreateInquiry = (enquiery: Enquiry) => {
    if (!inquiries) return;
    enquiery.id = Math.random().toString(36);
    enquiery.createdAt = new Date().toISOString();
    setInquiries({
      ...inquiries,
      enquiries: [...inquiries.enquiries, enquiery],
    });
    dispatch(
      setInquiryStore({
        ...inquiries,
        enquiries: [...inquiries.enquiries, enquiery],
      }),
    );
  };

  const onSubmit = async (data: InquirySchemaData) => {
    console.log("submitting", data);
    const enquiry: Enquiry = {
      ...tempEnquiry,
      title: data.title,
      person: {
        ...tempEnquiry.person,
        givenName: data.person.givenName,
        familyName: data.person.familyName,
        email: data.person.email,
        fullname: `${data.person.givenName} ${data.person.familyName}`,
      },
    };
    handleCreateInquiry(enquiry);
    setIsModalOpen(false);
  };
  const onInvalid = (data: FieldErrors) => {
    console.log("invalid", data);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InquirySchemaData>({
    resolver: zodResolver(InquirySchema),
  });
  return (
    <div className={"relative flex h-screen flex-grow flex-row"}>
      <div
        className={
          "relative flex h-screen min-w-[40%] flex-grow flex-col p-6 pt-32"
        }
      >
        <div className="hidden bg-blue-300 bg-blue-500 bg-green-300 bg-green-500 bg-orange-300 bg-orange-500 bg-red-300 bg-red-500"></div>
        <MobileNav handleOpenSearch={() => handleOpenSearch()}>
          {isSearchOpen && (
            <SearchHeader
              setSearchQuery={setSearchQuery}
              setIsSearchOpen={setIsSearchOpen}
              setSearchCategory={setSearchCategory}
              searchCategory={searchCategory}
            />
          )}
        </MobileNav>

        <h1 className="text-3xl">Inquiries</h1>
        <ul role="list" className="w-full space-y-3 overflow-y-auto">
          {getFilteredInquiries ? (
            <CardList data={getFilteredInquiries()} />
          ) : (
            inquiries && <CardList data={inquiries} />
          )}
        </ul>
        <RoundButton onClick={() => setIsModalOpen(true)}>
          <PlusIcon width={"24"} height={"24"} />
        </RoundButton>
        <Modal open={isModalOpen} setOpen={setIsModalOpen}>
          <h2 className={"text-2xl"}>Create Inquiry</h2>
          <form
            onSubmit={handleSubmit(
              (data) => onSubmit(data),
              (errors) => onInvalid(errors),
            )}
          >
            <FormField
              type={"text"}
              placeholder={"Title"}
              register={register}
              name={"title"}
              error={errors.title}
            />
            <FormField
              type={"text"}
              placeholder={"first name"}
              register={register}
              name={"person.givenName"}
              error={errors.person?.givenName}
            />
            <FormField
              type={"text"}
              placeholder={"last name"}
              register={register}
              name={"person.familyName"}
              error={errors.person?.familyName}
            />
            <FormField
              type={"email"}
              placeholder={"email"}
              register={register}
              name={"person.email"}
              error={errors.person?.email}
            />

            <div className="mt-5 flex flex-row justify-end">
              <button
                type="submit"
                className="w-mas inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Save
              </button>
            </div>
          </form>
        </Modal>
      </div>
      {props.detail}
    </div>
  );
});
export default Layout;
