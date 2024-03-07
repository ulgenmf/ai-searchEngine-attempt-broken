/* eslint-disable @next/next/no-img-element */
"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useController, useForm } from "react-hook-form";
import {
 Form,
 FormControl,
 FormDescription,
 FormField,
 FormItem,
 FormLabel,
 FormMessage,

} from "@/components/ui/form";
import { useChat } from "ai/react";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { z } from "zod";
import { toast } from "../ui/use-toast";
const FormSchema = z.object({
 input: z
  .string()
  .min(20, {
   message: "Your message must be at least 20 characters long.",
  })
  .max(500, {
   message: "Your message cannot exceed 500 characters.",
  }),
});
export default function Chat() {

 const {
  messages,
  input,
  handleInputChange,
  handleSubmit,
 } = useChat({
  api: "api/chat",
 });

 const form = useForm<z.infer<typeof FormSchema>>({
  resolver: zodResolver(FormSchema),
 });

 function onSubmit(data: z.infer<typeof FormSchema>) {
  //@ts-ignore
handleHandler
  toast({
   title: "You submitted the following values:",
   description: (
    <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
     <code className="text-white">{JSON.stringify(data, null, 2)}</code>
    </pre>
   ),
  });
 }
function submitEnder(){
handleSubmit
form.handleSubmit(onSubmit)}

 const count = form.watch("input");
 let counter = count ? count.length : 0;
 const isCountOverLimit = counter > 499;
 return (
  <>
   <div className="w-3/4 h-32 flex flex-col overflow-auto items-center justify-center rounded-md ">
    {messages.map((m) => (
     <div key={m.id}>
      {m.role === "user" ? "User: " : "AI: "}
      {m.content}
     </div>
    ))}
   </div>
   <Form {...form}>
    <form onSubmit={form.handleSubmit()} className="w-3/5 relative">
     <FormField
onChange={submitEnder}
      name="input"
      control={form.control}
      render={({ field }) => (
       <FormItem>
        <FormControl>
         <Textarea
          maxLength={500}
          placeholder="Tell us a little bit about yourself"
          className="resize-none scrollbar cursor-auto"
          {...field}
         />
        </FormControl>

        <FormDescription>
         <p
          className={
           "text-end   mt-2 mr-1 right-0 text-sm " +
           (isCountOverLimit
            ? "text-red-500 animate-[pulse_1.5s_infinite] underline"
            : "text-gray-200 ")
          }
         >
          chars:{counter}
         </p>{" "}
         {isCountOverLimit && (
          <p className=" text-red-500">
           Your message cannot exceed 500 characters.
          </p>
         )}
        </FormDescription>
        <FormMessage />
       </FormItem>
      )}
     />
     <Button type="submit"> asdsa</Button>
    </form>
   </Form>
  </>
 );
}
