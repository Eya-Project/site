"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormField } from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

type ContactFormType = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
  const form = useForm<ContactFormType>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  });

  const handleSubmit = (values: ContactFormType) => {
    console.log("Form submitted", values);
  };

  return (
    <div
      id="contact"
      className="flex justify-center items-center w-full h-[70vh]"
    >
      <div className="w-[290px] md:w-[500px] border h-fit drop-shadow-md bg-white rounded-xl py-[25px]">
        <h2 className="text-3xl font-bold text-center pb-[20px]">Contact Us</h2>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="flex flex-col gap-4 px-4"
          >
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <Input {...field} type="text" placeholder="First Name" />
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <Input {...field} type="text" placeholder="Last Name" />
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <Input {...field} type="email" placeholder="Email" />
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <Textarea {...field} placeholder="Please enter your message" />
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ContactForm;
