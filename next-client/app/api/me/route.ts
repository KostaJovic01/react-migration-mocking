import { NextApiRequest, NextApiResponse } from "next";

export const dynamic = "force-static";
import { User } from "@/app/types";
import { faker } from "@faker-js/faker";

const languages = ["English", "German", "Spanish", "French", "Italian"];

// Function to generate a single fake user
const createFakeUser = (): User => {
  return {
    id: faker.string.uuid(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    language: faker.helpers.arrayElement(languages),
  };
};
export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const numberOfUsers = req.query.count
    ? parseInt(req.query.count as string)
    : 10;
  const users = Array.from({ length: numberOfUsers }, createFakeUser);

  return Response.json({ users });
}
