import { z } from "zod";

export const registerSchema = z.object({
  firstName: z.string({
    required_error: "Full name is required.",
  }),
  lastName: z.string({
    required_error: "Last name is required.",
  }),
  email: z
    .string({
      required_error: "Email is required.",
    })
    .email("Not a valid email."),
  phoneNumber: z.number({
    required_error: "Phone number is required.",
  }),
});
