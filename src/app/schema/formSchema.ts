import {z} from "zod"

export const formSchema= z.object({
    username: z.string().min(3,{message:"Username must be 3 character long"}),
    email: z.string().email({message:"Email must be a valid email address"}),
    phone: z.string().min(11,{message:'Invalid Number!'}),
    message: z.string().min(3,{message:"Message should be longer"}),
    options:z.string().min(1,{message:"Select atleast one option"})
})

export type FormValidator = z.infer<typeof formSchema>;