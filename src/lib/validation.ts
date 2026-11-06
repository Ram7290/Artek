import { z } from "zod";

/** Validation schema for the contact / quote form. */
export const enquirySchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(120, "Name is too long."),
  companyName: z.string().trim().max(160, "Company name is too long.").optional().or(z.literal("")),
  email: z.string().trim().email("Please enter a valid email address.").max(200),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number.")
    .max(20, "Phone number is too long.")
    .regex(/^[+()\-\s\d]+$/, "Please use digits, spaces and +()– only."),
  service: z
    .string()
    .trim()
    .min(1, "Please select the service you need."),
  emirate: z.string().trim().min(1, "Please select your location."),
  message: z.string().trim().min(10, "Please describe your requirement (at least 10 characters).").max(2000, "Message is too long."),
});

export type EnquiryValues = z.infer<typeof enquirySchema>;
