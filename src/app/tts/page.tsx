"use client";
import { Button } from "@/components/ui/button";
import { IconPlus } from "@/components/ui/icons";
import { useEnterSubmit } from "@/lib/hooks/use-enter-submit";
import Textarea from "react-textarea-autosize";
import {
 Tooltip,
 TooltipContent,
 TooltipProvider,
 TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { useActions, useUIState } from "ai/rsc";
// Import necessary modules and components
import { useRef, useState } from "react";

import { AI } from "../action";
import { atom, useAtom, useAtomValue } from "jotai";
import clsx from "clsx";
import RecordingField from "@/components/recordingField/recordingField";
import {
 userVoiceInputAtom,
 isRecordingOnAtom,
 isRecordingCompleteAtom,
} from "@/lib/hooks/speechRecognition";
import { PauseCircle } from "lucide-react";

export default function Tts() {
 const [isRecordingOn, setIsRecordingOn] = useAtom(isRecordingOnAtom);
 const [isRecordingComplete, setIsRecordingComplete] = useAtom(
  isRecordingCompleteAtom
 );
 const [messages, setMessages] = useUIState();
 const [inputValue, setInputValue] = useState<string>("");
 const { submitUserMessage } = useActions<typeof AI>();
 const { formRef, onKeyDown } = useEnterSubmit();
 const userVoiceInput = useAtomValue(userVoiceInputAtom);

 const inputRef = useRef<HTMLTextAreaElement>(null);

 // console.log(
 //  "isRecordingOn",
 //  isRecordingOn,
 //  "isRecordingComplete)",
 //  isRecordingComplete,
 //  "userVoiceInput",
 //  userVoiceInput,
 //  "inputValue",
 //  inputValue
 // );

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
  console.log("console", inputValue);
  const responseMessage = await submitUserMessage(inputValue);
  setMessages((currentMessages: any) => [...currentMessages, responseMessage]);

  setInputValue("");
 }

 return (
  <div>
   <div className="relative mx-auto   max-w-2xl px-4">
    {messages?.map((message: any, index: number) => (
     <div key={index} className="pb-4">
      {message.display}
     </div>
    ))}
   </div>

   <div className="absolute inset-x-0 bottom-1 w-full  overflow-auto duration-300 ease-in-out animate-in dark:from-background/10 dark:from-10% dark:to-background/80 peer-[[data-state=open]]:group-[]:lg:pl-[250px] peer-[[data-state=open]]:group-[]:xl:pl-[300px]">
    <div className="mx-auto sm:max-w-2xl sm:px-1">
     <Textarea
      value={userVoiceInput}
      autoFocus={true}
      hidden={!isRecordingOn}
      className={clsx(
       "w-1/3 text-center  max-h-52 h-full  px-5 fixed  mx-auto bottom-24 right-1/3 border scrollbar bg-transparent   duration-200 rounded-md border-lime-400 resize-none  py-[1.3rem] focus-within:outline-none sm:text-sm",

       `${isRecordingOn ? " cursor-progress" : ""}`
      )}
     />
     <form onSubmit={onSubmit} ref={formRef}>
      <div className="flex flex-row gap-2  h-fit items-center justify-center border-2 px-2 py-4  rounded-md">
       <div className="relative">
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
        className={clsx(
         "w-full max-h-52 h-full    border scrollbar bg-transparent   border-gray-500 duration-200 rounded-md focus:border-lime-400 resize-none px-1 py-[1.3rem] focus-within:outline-none sm:text-sm",
         `${isRecordingOn ? " cursor-progress" : ""}`
        )}
        rows={1}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
       />

       <div className=" items-center justify-center    sm:right-4">
        <RecordingField>
         <button onClick={() => setInputValue(userVoiceInput.join(","))}>
          <PauseCircle className="m-auto flex items-center justify-center rounded-full h-10 w-10 " />
         </button>
        </RecordingField>
       </div>
      </div>
     </form>
    </div>
   </div>
  </div>
 );
}
