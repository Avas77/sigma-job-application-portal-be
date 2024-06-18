import { z } from "zod";

export const schema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  phoneNumber: z
    .string()
    .regex(/^\+?[1-9]\d{1,14}$/, {
      message: "Phone number must be a valid E.164 format",
    })
    .optional(),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Must be a valid email address" }),
  timeInterval: z.string().optional(),
  linkedin: z
    .string()
    .url({ message: "LinkedIn profile must be a valid URL" })
    .regex(/^(https?:\/\/)?([\w]+\.)?linkedin\.com\/.*$/i, {
      message: "LinkedIn profile must be a valid LinkedIn URL",
    })
    .optional(),
  github: z
    .string()
    .url({ message: "GitHub profile must be a valid URL" })
    .regex(/^(https?:\/\/)?([\w]+\.)?github\.com\/.*$/i, {
      message: "GitHub profile must be a valid GitHub URL",
    })
    .optional(),
  message: z.string().min(1, { message: "Message is required" }),
});
