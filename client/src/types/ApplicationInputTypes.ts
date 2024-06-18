import { z } from "zod";
import { schema } from "../schema/ApplicationFormSchema";

export type ApplicationInputTypes = z.infer<typeof schema>;
