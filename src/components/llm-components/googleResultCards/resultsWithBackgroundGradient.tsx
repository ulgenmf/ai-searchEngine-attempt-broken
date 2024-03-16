"use client";
import React from "react";

import Image from "next/image";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { imageLoader } from "@/lib/utils";

type ResultsWithBackgroundGradientPropts = {
 image?: string;
 title?: string;
 src?: string;
 description?: string;
};
export function ResultsWithBackgroundGradient() {
 return (
  <div >
   <BackgroundGradient   className="rounded-[22px] text-center max-w-sm  p-2  sm:bg-black dark:bg-zinc-900">
    <Image
     loader={imageLoader}
     src={"https://picsum.photos/500"}
     alt="jordans"
     height="100"
     width="100"
     className="object-contain h-1/2 w-1/2 m-auto rounded-2xl"
    />
    <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
     Air Jordan 4 Retro Reimagined
    </p>

    <p className="text-sm max-h-20 overflow-ellipsis line-clamp-5 text-neutral-600 dark:text-neutral-400">
     The Air Jordan 4 Retro Reimagined Bred will release on Saturday, February
     17, 2024. Your best opportunity to get these right now is by entering
     raffles and waiting for the official releases. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias nostrum vitae enim amet nobis aliquam neque! Laudantium, eius. In distinctio amet harum laborum mollitia quaerat dolor alias nam illum Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores consequuntur quidem quas in fuga porro molestias dolor suscipit delectus, vero quisquam maxime, voluptate at molestiae. Quaerat ullam officia excepturi tenetur.
    </p>
    <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
     <span>Buy now </span>
     <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
      $100
     </span>
    </button>
   </BackgroundGradient>
  </div>
 );
}
