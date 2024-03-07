"use client";
import { useEffect, useRef, useState } from "react";
import { useUIState, useActions } from "ai/rsc";
import { Textarea } from "../ui/textarea";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
 Form,
 FormControl,
 FormDescription,
 FormField,
 FormItem,
 FormLabel,
 FormMessage,
} from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
import { watch } from "fs";

const FormSchema = z.object({
 bio: z
  .string()
  .min(100, {
   message: "Please  make sure your prompt is at least 100 characters.",
  })
  .max(1000, {
   message: "Promt  must not be longer than 1000 characters.",
  }),
});

export function PromptField() {
 const [inputValue, setInputValue] = useState("");
 const [messages, setMessages] = useUIState<typeof AI>();
 const { submitUserMessage } = useActions<typeof AI>();
 const textAreaRef = useRef<HTMLTextAreaElement>(null);
 const form = useForm<z.infer<typeof FormSchema>>({
  resolver: zodResolver(FormSchema),
 });
 const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  // Add user message to UI state
  // @ts-ignore
  setMessages((currentMessages) => [
   ...currentMessages,
   {
    id: Date.now(),
    display: <div>{inputValue}</div>,
   },
  ]);
 function onSubmit(data: z.infer<typeof FormSchema>) {
  toast({
   title: "You submitted the following values:",
   description: (
    <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
     <code className="text-white">{JSON.stringify(data, null, 2)}</code>
    </pre>
   ),
  });
 }

 const bio = form.watch("bio");
 let count = bio ? bio.length : 0;
 const isBioOverLimit = count >= 1000;

 // console.log("console",form.watch("bio"));
 return (
  <Form {...form}>
   <form
    onSubmit={form.handleSubmit(onSubmit)}
    className="w-2/3 space-y-6 relative"
   >
    <FormField
     control={form.control}
     name="bio"
     render={({ field }) => (
      <FormItem>
       <FormControl>
        <Textarea
         maxLength={1000}
         placeholder="Tell us a little bit about yourself"
         className="resize-none scrollbar cursor-auto"
         {...field}
        />
       </FormControl>
       {isBioOverLimit && (
        <p className="text-red-500 text-xs">
         Character limit exceeded. Maximum 1000 characters allowed.
        </p>
       )}

       <FormDescription>
        You can <span>@mention</span> other users and organizations.
       </FormDescription>
       <FormMessage />
      </FormItem>
     )}
    />
    <div className=" w-fit absolute right-0 text-xs text-gray-00">
     chars:{count}
    </div>
    <Button type="submit">Submit</Button>
   </form>
  </Form>
 );
}
