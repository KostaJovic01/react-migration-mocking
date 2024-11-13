import { z } from "zod";

const personSchema = z.object({
  givenName: z
    .string()
    .min(2, { message: "First name must be at least 2 characters long" }),
  familyName: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
});
const statusSchema = z.object({
  text: z.string().optional(),
});

export const InquirySchema = z.object({
  title: z
    .string()
    .min(2, { message: "Title must be at least 2 characters long" })
    .max(255),
  person: personSchema,
});

export type InquirySchemaData = z.infer<typeof InquirySchema>;
