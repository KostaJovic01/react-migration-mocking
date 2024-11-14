import { NextApiRequest, NextApiResponse } from "next";

export const dynamic = "force-static";
import { User } from "@/app/types";
import { faker } from "@faker-js/faker";
import { NextRequest, NextResponse } from "next/server";

// Function to generate a single fake user
const createFakeUser = (): User => {
  return {
    id: faker.string.uuid(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    language: faker.helpers.arrayElement(["English", "German"]),
  };
};
export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const numberOfUsers = new URL(req.url)
    ? parseInt(url.searchParams.get("count") as string)
    : 10;
  const users = Array.from({ length: numberOfUsers }, createFakeUser);

  return NextResponse.json({ users });
}
