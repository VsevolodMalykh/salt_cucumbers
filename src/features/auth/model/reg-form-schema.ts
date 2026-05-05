import z from "zod";

export const regFormSchema = z.object({
    name: z.string('Name is required'),
    email: z.string('Email is required'),
    password: z.string('Password is required'),
})