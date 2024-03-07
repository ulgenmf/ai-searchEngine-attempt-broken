"use client";
import React from "react";
import { SparklesCore } from "../ui/sparkles";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { PromptField } from "../promptField/promptField";
import ChatField from "../chatField/chatField";

export function SparklesPreview() {
 return (
  <div className=" w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
   <h1 className="md:text-4xl text-2xl lg:text-5xl font-bold text-center text-white relative z-20">
    Create Your Dream Blog
   </h1>
   <div className="w-[40rem] h-40 relative">
    {/* <div className="bg-gradient-to-r from-green-400 via-blue-400 to-pink-400 h-px"/> */}

    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-[#9ad37f] to-transparent h-[2px] w-4/4 " />
    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-[#9ad37f] to-transparent h-px w-3/4" />
    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-2/4 blur-sm" />
    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-2/4" />
    <SparklesCore
     background="transparent"
     minSize={0.4}
     maxSize={1}
     particleDensity={1200}
     className="w-full h-full"
     particleColor="#FFFFFF"
    />

    {/* Radial Gradient to prevent sharp edges */}
    <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(500px_200px_at_top,transparent_50%,white)] text-white">
     dasdasd
    </div>
   </div>
<div>

asdasd</div>
   <ChatField />
  </div>
 );
}
