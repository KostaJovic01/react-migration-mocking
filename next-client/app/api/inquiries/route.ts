import { NextRequest, NextResponse } from "next/server";
import { generateFakeEnquiries } from "@/app/faker/fakeResponses"; // Adjust the import path as necessary

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const numberOfEnquiries = url.searchParams.get("count")
    ? parseInt(url.searchParams.get("count") as string)
    : 10;
  const enquiries = generateFakeEnquiries(numberOfEnquiries);

  return NextResponse.json({ enquiries });
}
