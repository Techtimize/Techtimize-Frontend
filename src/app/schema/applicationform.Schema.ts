import {z} from 'zod';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB in bytes

export const applicationSchema = z.object({
    firstname: z.string().min(3, {message: "First name must be at least 3 characters"}),
    lastname: z.string().min(3, {message: "Last name must be at least 3 characters"}),
    phoneNumber: z.string()
        .min(11, {message: 'Phone number must be at least 11 digits'})
        .regex(/^\d+$/, {message: 'Phone number must contain only digits'}),
    city: z.string().min(3, {message: "City must be at least 3 characters"}),
    email: z.string().email({message: "Must be a valid email"}),
    experience: z.string()
        .min(1, {message: "Experience is required"})
        .regex(/^\d+$/, {message: "Experience must be a number"}),
    url: z.string().optional(),
    cv: z
        .instanceof(File, { message: "Please upload a valid file" })
        .refine((file) => file.size <= MAX_FILE_SIZE, {
            message: "File size must be less than 5MB",
        })
        .optional()
        .or(z.null()),
})