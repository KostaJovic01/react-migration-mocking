import { faker } from "@faker-js/faker";
import {
  Enquiry,
  Person,
  Tracking,
  Status,
  RoomStay,
  EmailReceiver,
  Autoresponder,
} from "@/app/types";
import { NextApiRequest, NextApiResponse } from "next"; // Adjust the import path as necessary

// Helper function to generate a fake person
const createFakePerson = (): Person => {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  return {
    givenName: firstName,
    familyName: lastName,
    gender: faker.helpers.arrayElement(["male", "female"]),
    language: faker.helpers.arrayElement(["en", "de", "fr", "it"]),
    email: faker.internet.email(),
    telephone: faker.phone.number(),
    newsletter: faker.datatype.boolean(),
    fullname: `${firstName} ${lastName}`,
  };
};

// Helper function to generate fake tracking info
const createFakeTracking = (): Tracking => {
  return {
    source: faker.helpers.arrayElement([
      "direct",
      "referral",
      "social",
      "organic",
    ]),
    entryPage: faker.internet.url(),
  };
};

// Helper function to generate fake status info
const createFakeStatus = (): Status => {
  const emailReceivers = Array.from(
    {
      length: faker.number.int({ min: 1, max: 3 }),
    },
    (): EmailReceiver => ({
      name: faker.internet.email(),
      status: faker.datatype.boolean(),
      lastUpdate: faker.date.recent().toISOString(),
    }),
  );

  const autoresponder = {
    name: faker.internet.email(),
    status: faker.datatype.boolean(),
    lastUpdate: faker.date.recent().toISOString(),
  };

  return {
    text: faker.helpers.arrayElement(["approved", "pending", "error"]),
    emailReceivers,
    autoresponder,
  };
};

// Helper function to generate fake room stays
const createFakeRoomStay = (): RoomStay => {
  return {
    roomClassificationCode: faker.helpers.arrayElement([42, "42A", "Deluxe"]),
    adults: { count: faker.number.int({ min: 1, max: 4 }) },
    children:
      Math.random() > 0.5
        ? {
            count: faker.number.int({ min: 1, max: 3 }),
            ages: [faker.number.int({ min: 1, max: 15 }).toString()],
          }
        : undefined,
    startDate: faker.date.future().toISOString(),
    endDate: faker.date.future().toISOString(),
  };
};

// Main function to generate a fake enquiry
const createFakeEnquiry = (): Enquiry => {
  return {
    id: faker.string.uuid(),
    title:
      "Anfrage Landingpage " +
      `${faker.company.name()}: ${faker.person.firstName()} ${faker.person.lastName()} - ${faker.internet.email()}`,
    language: faker.helpers.arrayElement(["en", "de", "fr", "it"]),
    text: Math.random() > 0.5 ? faker.lorem.sentence() : undefined, // Optional text field
    person: createFakePerson(),
    tracking: Math.random() > 0.5 ? createFakeTracking() : undefined, // Optional tracking field
    status: createFakeStatus(),
    createdAt: new Date().toISOString(), // Current date in ISO format
    roomStays:
      Math.random() > 0.5
        ? Array.from({ length: faker.number.int({ min: 1, max: 3 }) }, () =>
            createFakeRoomStay(),
          )
        : undefined,
    channelName: Math.random() > 0.5 ? faker.company.name() : undefined, // Optional channel name
  };
};

// Generate an array of fake enquiries
export const generateFakeEnquiries = (count = 10): Enquiry[] => {
  return Array.from({ length: count }, () => createFakeEnquiry());
};
export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const numberOfEnquiries = req.query.count
    ? parseInt(req.query.count as string)
    : 10;
  const enquiries = generateFakeEnquiries(numberOfEnquiries);

  return Response.json({ enquiries });
}
// Example usage:
