import { z } from "zod";

export const schema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  phoneNumber: z.number(),
  email: z.string(),
  timeInterval: z.string(),
  linkedin: z.string(),
  github: z.string(),
  message: z.string(),
});
