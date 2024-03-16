"use client";

import { useEffect, useRef, useState } from "react";

import { useActions, useUIState } from "ai/rsc";

import { type AI } from "./action";

import { ChatList } from "@/components/chat-list";
import ChatField from "@/components/chatField/chatField";
import { EmptyScreen } from "@/components/empty-screen";
import { useEnterSubmit } from "@/lib/hooks/use-enter-submit";

export default function Page() {
 const [messages, setMessages] = useUIState<typeof AI>();

 return (
  <div>
   <div className="pb-[200px] pt-4 md:pt-10">
    {messages.length ? (
     <>
      <ChatList messages={messages} />
     </>
    ) : (
     <EmptyScreen />
    )}
    <ChatField />
   </div>
  </div>
 );
}
