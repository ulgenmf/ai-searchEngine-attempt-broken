"use client";
import { useActions, useUIState } from "ai/rsc";
import { useRef, useState } from "react";
import { Button } from "../ui/button";

import { AI } from "@/app/action";

import { useEnterSubmit } from "@/lib/hooks/use-enter-submit";
import { IconArrowElbow, IconPlus } from "../ui/icons";

import Textarea from "react-textarea-autosize";
import {
 Tooltip,
 TooltipContent,
 TooltipProvider,
 TooltipTrigger,
} from "../ui/tooltip";
import ToolBar from "../ui/toolbar";

export default function Chat() {
 const [messages, setMessages] = useUIState();
 const [inputValue, setInputValue] = useState("");
 const { submitUserMessage } = useActions<typeof AI>();
 const { formRef, onKeyDown } = useEnterSubmit();

 const inputRef = useRef<HTMLTextAreaElement>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  // Add user message to UI state
  setMessages((currentMessages: any) => [
   ...currentMessages,
   {
    id: Date.now(),
    display: <div>{inputValue}</div>,
   },
  ]);

  // Submit and get response message
  const responseMessage = await submitUserMessage(inputValue);
  setMessages((currentMessages: any) => [...currentMessages, responseMessage]);

  setInputValue("");
 }

 return (
  <div>
   <div className="absolute inset-x-0 bottom-1 w-full  duration-300 ease-in-out animate-in dark:from-background/10 dark:from-10% dark:to-background/80 peer-[[data-state=open]]:group-[]:lg:pl-[250px] peer-[[data-state=open]]:group-[]:xl:pl-[300px]">
    <div className="mx-auto sm:max-w-2xl sm:px-1">
     <form onSubmit={onSubmit} ref={formRef}>
      <div className="flex flex-row gap-2  h-fit items-center justify-center border-2 px-2 py-4  rounded-md">
       <div className="  relative">
        <TooltipProvider>
         <Tooltip>
          <TooltipTrigger asChild>
           <Button
            variant="outline"
            size="icon"
            className=" rounded-full  sm:left-4"
            onClick={(e) => {
             e.preventDefault();
             window.location.reload();
            }}
           >
            <IconPlus />
            <span className="sr-only">New Chat</span>
           </Button>
          </TooltipTrigger>
          <TooltipContent>New Chat</TooltipContent>
         </Tooltip>
        </TooltipProvider>
       </div>
       <Textarea
        ref={inputRef}
        tabIndex={0}
        onKeyDown={onKeyDown}
        placeholder="Send a message."
        className="w-full max-h-52 h-32 border scrollbar bg-transparent  border-gray-500 duration-200 rounded-md focus:border-lime-400 resize-none px-1 py-[1.3rem] focus-within:outline-none sm:text-sm"
        autoFocus
        spellCheck={false}
        autoComplete="off"
        autoCorrect="off"
        name="message"
        rows={1}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
       />
       <div className=" items-center justify-center   transition-colors right-0 top-4 sm:right-4">

        <ToolBar classNames="grid grid-flow-col  grid-cols-3 grid-rows-2 items-center justify-center " />
       </div>
      </div>
     </form>
    </div>
   </div>
  </div>
 );
}

// <TooltipProvider>
//          <Tooltip>
//           <TooltipTrigger asChild>
//            <Button type="submit" size="icon" disabled={inputValue === ""}>
//             <IconArrowElbow />
//             <span className="sr-only">Send message</span>
//            </Button>
//           </TooltipTrigger>
//           <TooltipContent>Send message</TooltipContent>
//          </Tooltip>
//         </TooltipProvider>
