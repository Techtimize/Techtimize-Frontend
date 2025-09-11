"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import PageHeader from "@/app/components/PageHeader/PageHeader";
import React, { useState } from "react";


const formSchema = z.object({
    username: z.string().min(2, "Username must be at least 2 characters"),
    email: z.string().email("Invalid email"),
    phone: z.string().min(10, "Phone number must be at least 10 digits"),
    city: z.string().min(2, "City is required"),
    experience: z.string(),
    portfolio: z.string().optional(),
    cv: z.any().optional(),
});

const ApplicationForm = () => {
    const [loading, setLoading] = useState(false);
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            email: "",
            phone: "",
            city: "",
            experience: "",
            portfolio: "",
            cv: null,
        },
    });

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        
        // setLoading(true);
        // try {
        //     const response = await fetch("/contact-us/api/sendemail", {
        //         method: "POST",
        //         headers: { "Content-Type": "application/json" },
        //         body: JSON.stringify(data),
        //     });

        //     if (response.ok) {

        //         form.reset();
        //     } else {

        //         form.setError("root", { message: "Failed to send email. Try again later." });
        //     }
        // } catch (error) {

        //     form.setError("root", { message: "Something went wrong. Please try again." });
        // } finally {
        //     setLoading(false);
        // }
    };
    
    return (
        <div className="relative flex flex-col items-center p-6">
      
            <div className="w-full text-center mb-6">
                <PageHeader subHeading="Career" heading="Application" />
            </div>

          
            <div className="sm:w-[70%] w-full p-6 bg-white shadow-md rounded-lg m-auto">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6">
                
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Username</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Username" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="abc@gmail.com" type="email" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                      
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Phone Number</FormLabel>
                                    <FormControl>
                                        <Input placeholder="03447805745" type="tel" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                
                        <FormField
                            control={form.control}
                            name="city"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>City</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Lahore" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                  
                        <FormField
                            control={form.control}
                            name="experience"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Years of Experience</FormLabel>
                                    <FormControl>
                                        <Input placeholder="3 years" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                     
                        <FormField
                            control={form.control}
                            name="portfolio"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Portfolio URL</FormLabel>
                                    <FormControl>
                                        <Input placeholder="https://your-portfolio.com" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* ✅ Attach CV */}
                        <FormField
                            control={form.control}
                            name="cv"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Attach Your CV</FormLabel>
                                    <FormControl>
                                        <Input type="file" onChange={(e) => field.onChange(e.target.files?.[0])} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type="submit" className="bg-[#0697D5] hover:bg-blue-1 text-white p-3 rounded-lg w-full">
                            Submit Application
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    );
};

export default ApplicationForm;
