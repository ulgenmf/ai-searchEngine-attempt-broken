import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { ExternalLinkIcon } from "@/components/ui/icons";
import { imageLoader } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function ResultCards() {
 return (
  <div className=" mt-0 bg-black  ">
   <CardContainer className="inter-var  text-center items-center ">
    <CardBody className="bg-gray-50  relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1]  sm:w-[30rem] h-auto rounded-xl p-6 border  ">
     <CardItem translateY={20} translateZ="100" className="w-full mt-10">

       <video src="/vide.mp4" className="h-min hover:shadow-2xl " muted autoPlay loop />
     </CardItem>
     <div className="flex  text-start  flex-col items-center mt-20">
      <CardItem
       translateZ={50}
translateX={-20}
       as="button"
       className="text-start    overflow-hidden text-ellipsis rounded-xl text-sm font-normal dark:text-white"
      >
       <p className="text-5xl text-green-600 flex flex-col gap-2 text-center ">
      I FUCKING HATE <span>42</span>
       </p>
      </CardItem>
      <CardItem
       as="button"

       className=" text-5xl rounded-xl  shadow-inner bg-opacity-15 shadow-purple-400  z-30 bg-black dark:bg-white dark:text-black   font-bold"
      >AAaaAA

      </CardItem>
     </div>
    </CardBody>
   </CardContainer>
  </div>
 );
}
