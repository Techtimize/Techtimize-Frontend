import {z} from 'zod';

export const applicationSchema = z.object({
    firstname:z.string().min(3,{message:"Username must be greater than 3"}),
    lastname:z.string().min(3,{message:"lastname must be greater than 3"}),
    phoneNumber:z.number().min(11,{message:'Invalid Number'}),
    city:z.string().min(3,{message:"must be a valid city name"}),
    email:z.string().email({message:"must be a valid email"}),
    experience:z.number().min(1,{message:"must be a number"}),
    url:z.string({message:"link is required"})

})