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
    const [submitted, setSubmitted] = useState(false);
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
                setSubmitted(true);
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

            {/* Success Modal */}
            {submitted && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md animate-in fade-in duration-300 p-4">
                    <div className="relative bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-2xl p-6 max-w-sm w-full my-auto transform animate-in zoom-in-95 duration-300 border border-blue-100">
                        {/* Decorative Elements */}
                        <div className="absolute top-0 right-0 w-20 h-20 bg-[#0697D5]/10 rounded-full blur-2xl -z-10"></div>
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-400/10 rounded-full blur-2xl -z-10"></div>
                        
                        <div className="flex flex-col items-center text-center space-y-3 relative">
                            {/* Success Icon with Animation */}
                            <div className="relative">
                                <div className="w-16 h-16 bg-gradient-to-br from-[#0697D5] to-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-300/50 animate-in zoom-in duration-500">
                                    <svg 
                                        className="w-9 h-9 text-white animate-in zoom-in duration-700" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                        strokeWidth={3}
                                    >
                                        <path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            d="M5 13l4 4L19 7" 
                                        />
                                    </svg>
                                </div>
                                {/* Pulsing Ring Effect */}
                                <div className="absolute inset-0 w-16 h-16 bg-[#0697D5]/30 rounded-full animate-ping"></div>
                            </div>

                            {/* Success Message */}
                            <div className="space-y-1">
                                <h2 className="text-2xl font-bold bg-gradient-to-r from-[#0697D5] to-blue-600 bg-clip-text text-transparent">
                                    Thanks!
                                </h2>
                                <p className="text-base font-semibold text-gray-700">
                                    You have applied for a job
                                </p>
                            </div>

                            {/* Divider */}
                            <div className="w-14 h-0.5 bg-gradient-to-r from-transparent via-[#0697D5] to-transparent rounded-full"></div>

                            {/* Additional Info */}
                            <p className="text-xs text-gray-600 leading-relaxed px-2">
                                We've received your application and our team will review it shortly. We'll get back to you soon!
                            </p>

                            {/* Action Buttons */}
                            <div className="w-full pt-1">
                                <Button
                                    onClick={() => setSubmitted(false)}
                                    className="w-full bg-gradient-to-r from-[#0697D5] to-blue-600 hover:from-blue-600 hover:to-[#0697D5] text-white font-semibold px-6 py-2.5 rounded-xl shadow-lg shadow-blue-300/40 hover:shadow-xl hover:shadow-blue-400/50 transition-all duration-300 transform hover:scale-105"
                                >
                                    Close
                                </Button>
                            </div>

                            {/* Success Checkmark Dots */}
                            <div className="flex gap-2 pt-0.5">
                                <div className="w-1.5 h-1.5 bg-[#0697D5] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                                <div className="w-1.5 h-1.5 bg-[#0697D5] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                                <div className="w-1.5 h-1.5 bg-[#0697D5] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ApplicationForm;
