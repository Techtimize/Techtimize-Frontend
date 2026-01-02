"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import PageHeader from "@/app/components/PageHeader/PageHeader";
import React, { useState } from "react";
import { applicationSchema } from "@/app/schema/applicationform.Schema";
import type { z } from "zod";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB in bytes

const ApplicationForm = () => {
    const [loading, setLoading] = useState(false);
    const form = useForm({
        resolver: zodResolver(applicationSchema),
        defaultValues: {
            firstname: "",
            lastname: "",
            email: "",
            phoneNumber: "",
            city: "",
            experience: "",
            url: "",
            cv: null,
        },
    });

    const onSubmit = async (data: z.infer<typeof applicationSchema>) => {
        setLoading(true);
        try {
            const formData = new FormData();
            formData.append("firstname", data.firstname);
            formData.append("lastname", data.lastname);
            formData.append("email", data.email);
            formData.append("phoneNumber", data.phoneNumber.toString());
            formData.append("city", data.city);
            formData.append("experience", data.experience.toString());
            if (data.url) {
                formData.append("url", data.url);
            }
            if (data.cv) {
                formData.append("cv", data.cv);
            }

            const response = await fetch("/application/api/sendemail", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                form.reset();
                // You can add a success toast/notification here
            } else {
                form.setError("root", { message: "Failed to submit application. Try again later." });
            }
        } catch (error) {
            console.error("Error submitting application:", error);
            form.setError("root", { message: "Something went wrong. Please try again." });
        } finally {
            setLoading(false);
        }
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
                            name="firstname"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>First Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="John" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="lastname"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Last Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Doe" {...field} />
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
                            name="phoneNumber"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Phone Number</FormLabel>
                                    <FormControl>
                                        <Input 
                                            placeholder="03447805745" 
                                            type="tel" 
                                            {...field}
                                            onChange={(e) => field.onChange(e.target.value)}
                                        />
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
                                        <Input 
                                            placeholder="3" 
                                            type="number"
                                            {...field}
                                            onChange={(e) => field.onChange(e.target.value)}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                     
                        <FormField
                            control={form.control}
                            name="url"
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
                                        <Input 
                                            type="file" 
                                            accept=".pdf,.doc,.docx"
                                            onChange={(e) => {
                                                const file = e.target.files?.[0];
                                                if (file) {
                                                    if (file.size > MAX_FILE_SIZE) {
                                                        form.setError("cv", {
                                                            message: "File size must be less than 5MB",
                                                        });
                                                        return;
                                                    }
                                                    field.onChange(file);
                                                } else {
                                                    field.onChange(null);
                                                }
                                            }}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        Only 1 file allowed. Maximum file size: 5MB. Accepted formats: PDF, DOC, DOCX
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {form.formState.errors.root && (
                            <p className="text-red-500 text-sm">{form.formState.errors.root.message}</p>
                        )}

                        <Button 
                            type="submit" 
                            className="bg-[#0697D5] hover:bg-blue-1 text-white p-3 rounded-lg w-full"
                            disabled={loading}
                        >
                            {loading ? "Submitting..." : "Submit Application"}
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    );
};

export default ApplicationForm;
