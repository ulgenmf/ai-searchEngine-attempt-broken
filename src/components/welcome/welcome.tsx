"use client";
import React from "react";
import { SparklesCore } from "../ui/sparkles";
import { Button } from "../ui/button";
import { MagicWandIcon } from "@radix-ui/react-icons";
import { SparklesPreview } from "./welcomeText";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
export function Welcome() {
 return (
  <main className="min-h-screen bg-black flex flex-col items-center justify-center text-center p-4">
   <div className="h-[40rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
    <div className="w-full absolute inset-0 h-screen">
     <SparklesPreview />
    </div>
   </div>
  </main>
 );
}
