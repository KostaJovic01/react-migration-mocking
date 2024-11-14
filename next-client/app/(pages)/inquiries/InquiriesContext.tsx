"use client";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useAppDispatch } from "@/app/redux/hooks";
import { EnquiriesData, Enquiry } from "@/app/types";
import { setInquiryStore } from "@/app/redux/inquirySlice";

// Create Context
const InquiriesContext = createContext<any>(null);
type Props = {
  children: React.ReactNode;
};
export const InquiriesProvider = (props: Props) => {
  const dispatch = useAppDispatch();

  // State management
  const [inquiries, setInquiries] = useState<EnquiriesData>();
  const [detailOpen, setDetailOpen] = useState(true);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchCategory, setSearchCategory] = useState<
    "name" | "channel" | "year"
  >();
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [isInquiriesLoading, setIsInquiriesLoading] = useState(true);
  const closeToast = () => {
    setShowToast(false);
  };

  // Fetch inquiries
  const fetchInquiries = useCallback(async () => {
    try {
      const response = await fetch("/api/inquiries", { cache: "force-cache" });
      await new Promise((resolve) => setTimeout(resolve, 3000));
      const data = await response.json();
      setIsInquiriesLoading(false);
      setInquiries(data);
      dispatch(setInquiryStore(data));
    } catch (error) {
      setIsInquiriesLoading(false);
      console.error("Error fetching inquiries:", error);
    }
  }, [dispatch]);

  // Fetch on mount
  useEffect(() => {
    fetchInquiries();
  }, []);

  // Search filter functions
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

  // Get filtered inquiries based on category
  const getFilteredInquiries = () => {
    if (searchQuery === "") return false;
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

  // Handle creating an inquiry
  const handleCreateInquiry = (enquiry: Enquiry) => {
    if (!inquiries) return;

    enquiry.id = Math.random().toString(36).substring(2);
    enquiry.createdAt = new Date().toISOString();
    enquiry.status = { text: "pending" };
    enquiry.person.fullname =
      enquiry.person.givenName + " " + enquiry.person.familyName;
    setInquiries({
      ...inquiries,
      enquiries: [...inquiries.enquiries, enquiry],
    });

    dispatch(
      setInquiryStore({
        ...inquiries,
        enquiries: [...inquiries.enquiries, enquiry],
      }),
    );
    setIsModalOpen(false);
    setShowToast(true);
  };
  const handleDeleteInquiry = (inquiry: Enquiry) => {
    if (!inquiry || !inquiries) return;
    const updatedInquiries = inquiries.enquiries.filter(
      (item) => item.id !== inquiry.id,
    );
    dispatch(setInquiryStore({ ...inquiries, enquiries: updatedInquiries }));
    setInquiries({ ...inquiries, enquiries: updatedInquiries });
  };

  // Toggle search modal
  const handleOpenSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  // Context value to be shared with consumers
  const value = {
    inquiries,
    detailOpen,
    setDetailOpen,
    isSearchOpen,
    handleOpenSearch,
    searchCategory,
    setSearchCategory,
    searchQuery,
    setSearchQuery,
    getFilteredInquiries,
    isModalOpen,
    setIsModalOpen,
    handleCreateInquiry,
    showToast,
    handleToastVisibility: closeToast,
    handleDeleteInquiry,
    isInquiriesLoading,
  };

  return (
    <InquiriesContext.Provider value={value}>
      {props.children}
    </InquiriesContext.Provider>
  );
};

// Custom hook to consume the context
export const useInquiriesContext = () => {
  return useContext(InquiriesContext);
};
