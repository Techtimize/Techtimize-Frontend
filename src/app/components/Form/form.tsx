"use client";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { formSchema } from "@/app/schema/formSchema";
import Button from "../Button/Button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const FormComponent = () => {
    const [loading, setLoading] = useState(false);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            email: "",
            phone: "",
            options: "",
            message: "",
        },
    });

    const ref = useRef<HTMLFormElement>(null);

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        setLoading(true);
        try {
            const response = await fetch("/contact-us/api/sendemail", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (response.ok) {

                form.reset();
            } else {

                form.setError("root", { message: "Failed to send email. Try again later." });
            }
        } catch (error) {

            form.setError("root", { message: "Something went wrong. Please try again." });
        } finally {
            setLoading(false);
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} ref={ref}>
                <div className="flex flex-col sm:flex-row gap-[40px]">
                    <div className="sm:basis-[85%] flex flex-col justify-between gap-[30px]">
                        <div className="flex flex-col lg:flex-row items-center xl:gap-[50px] gap-[20px] w-full">
                            <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem className="flex-1 w-full">
                                        <FormLabel>Full Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Username" type="text" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem className="flex-1 w-full">
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="abc@gmail.com" type="email" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="flex flex-col lg:flex-row items-center xl:gap-[50px] gap-[20px]">
                            <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem className="flex-1 w-full">
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
                                name="options"
                                render={({ field }) => (
                                    <FormItem className="flex-1 w-full">
                                        <FormLabel>Select Requirement</FormLabel>
                                        <Select onValueChange={field.onChange} value={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select Requirement" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="Mobile App Development">Mobile App Development</SelectItem>
                                                <SelectItem value="Web App Development">Web App Development</SelectItem>
                                                <SelectItem value="Artificial Intelligence">Artificial Intelligence</SelectItem>
                                                <SelectItem value="Cloud Services">Cloud Services</SelectItem>
                                                <SelectItem value="UI UX Design">UI UX Design</SelectItem>
                                                <SelectItem value="Staff Augmentation">Staff Augmentation</SelectItem>
                                                <SelectItem value="Project Management">Project Management</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Message</FormLabel>
                                    <FormControl className="h-32">
                                        <Textarea placeholder="Your message here" id="message" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {form.formState.errors.root && (
                            <p className="text-red-500 text-sm">{form.formState.errors.root.message}</p>
                        )}

                        <Button
                            type="submit"
                            text={loading ? "Sending..." : "Send Message"}
                            className="bg-[#0697D5] border-[#0697D5] text-white rounded-[7px] p-[11px] w-full mt-[20px]"
                            disabled={loading}
                        />
                    </div>
                </div>
            </form>
        </Form>
    );
};

export default FormComponent;
