import { StaticImageData } from "next/image";

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  language: string;
  image?: StaticImageData;
};

// type for the person making the enquiry
export type Person = {
  givenName: string;
  familyName: string;
  gender?: string; // Optional
  language: string;
  email: string;
  telephone?: string; // Optional
  newsletter: boolean;
  fullname: string;
};

// type for tracking information
export type Tracking = {
  source: string;
  entryPage: string;
  cooperationSource?: string; // Optional
  cooperationMedium?: string; // Optional
};

// type for email receivers in status
export type EmailReceiver = {
  name: string;
  status: boolean;
  lastUpdate: string; // ISO date format
};

// type for autoresponder in status
export type Autoresponder = {
  name: string;
  status: boolean;
  lastUpdate: string; // ISO date format
};

// type for establishments in status
export type Establishment = {
  name: string;
};

// type for enquiry status
export type Status = {
  text: "approved" | "pending" | "error";
  emailReceivers: EmailReceiver[];
  autoresponder: Autoresponder;
  alpinebitsEstablishments?: Establishment[]; // Optional
  casablancaEstablishments?: Establishment[]; // Optional
  reGuestEstablishments?: Establishment[]; // Optional
  mtsEstablishments?: Establishment[]; // Optional
};

// type for room stays in an enquiry
export type RoomStay = {
  roomClassificationCode: string | number; // Some are strings, others are numbers
  roomType?: string; // Optional
  roomTypeDescription?: string; // Optional
  ratePlan?: string; // Optional
  ratePlanDescription?: string; // Optional
  adults: {
    count: number;
  };
  children?: {
    count: number;
    ages?: string[]; // Optional
  };
  startDate: string; // ISO date format with timezone info
  endDate: string; // ISO date format with timezone info
};

// Main type for an enquiry object
export type Enquiry = {
  id: string;
  title: string;
  language: string;
  text?: string; // Optional
  person: Person;
  tracking?: Tracking; // Optional
  status: Status;
  createdAt: string; // ISO date format with timezone info.
  roomStays?: RoomStay[]; // Room stays could be optional.
  channelName?: string; // Channel name is optional.
};

// Root type that contains all enquiries.
export type EnquiriesData = {
  enquiries: Enquiry[];
};
