import {z} from "zod"

const phoneRegex = new RegExp(
    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
  );
  
export const formSchema= z.object({
    username: z.string().min(3),
    email: z.string().email({message:"Email must be a valid email address"}),
    phone: z.string().regex(phoneRegex, 'Invalid Number!'),
    message: z.string().min(3),
    options:z.string()
})

export type FormValidator = z.infer<typeof formSchema>;