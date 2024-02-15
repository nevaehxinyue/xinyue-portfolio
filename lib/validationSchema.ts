import { z } from 'zod';

export const sendEmailSchema = z.object({
    email: z.string().email({message: "Invalid email."}),
    message: z.string().max(65535).refine((data) => typeof data === 'string', {
        message:"Message must be a string."
    })
})