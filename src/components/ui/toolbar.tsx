import { Button } from "@/components/ui/button";
import {
 Tooltip,
 TooltipContent,
 TooltipProvider,
 TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { IconPlus } from "./icons";
interface ToolBarProps {
 classNames?: string | undefined;
}

export default function ToolBar({ classNames }: ToolBarProps) {
 return (
  <div className={classNames}>
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
       <MessageCircleIcon className="h-6 w-6 stroke-1" />
       <span className="sr-only">Create a comment</span>
      </Button>
     </TooltipTrigger>
     <TooltipContent>Create a comment</TooltipContent>
    </Tooltip>
   </TooltipProvider>
   <Button
    className="text-zinc-100 rounded-full hover:bg-gray-600"
    size="icon"
    variant="ghost"
   ></Button>
  </div>
 );
}

interface InboxIconProps {
 className?: string;
 width?: string;
 height?: string;
 fill?: string;
 stroke?: string;
 strokeWidth?: string;
 strokeLinecap?: string;
 strokeLinejoin?: string;
}

function InboxIcon(props: InboxIconProps) {
 return (
  <svg
   {...props}
   xmlns="http://www.w3.org/2000/svg"
   width="24"
   height="24"
   viewBox="0 0 24 24"
   fill="none"
   stroke="currentColor"
   strokeWidth="2"
   strokeLinecap="round"
   strokeLinejoin="round"
  >
   <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
   <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
  </svg>
 );
}

function LayersIcon(props: InboxIconProps) {
 return (
  <svg
   {...props}
   xmlns="http://www.w3.org/2000/svg"
   width="24"
   height="24"
   viewBox="0 0 24 24"
   fill="none"
   stroke="currentColor"
   strokeWidth="2"
   strokeLinecap="round"
   strokeLinejoin="round"
  >
   <polygon points="12 2 2 7 12 12 22 7 12 2" />
   <polyline points="2 17 12 22 22 17" />
   <polyline points="2 12 12 17 22 12" />
  </svg>
 );
}

function MenuIcon(props: InboxIconProps) {
 return (
  <svg
   {...props}
   xmlns="http://www.w3.org/2000/svg"
   width="24"
   height="24"
   viewBox="0 0 24 24"
   fill="none"
   stroke="currentColor"
   strokeWidth="2"
   strokeLinecap="round"
   strokeLinejoin="round"
  >
   <line x1="4" x2="20" y1="12" y2="12" />
   <line x1="4" x2="20" y1="6" y2="6" />
   <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
 );
}

function MessageCircleIcon(props: InboxIconProps) {
 return (
  <svg
   {...props}
   xmlns="http://www.w3.org/2000/svg"
   width="24"
   height="24"
   viewBox="0 0 24 24"
   fill="none"
   stroke="currentColor"
   strokeWidth="2"
   strokeLinecap="round"
   strokeLinejoin="round"
  >
   <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
  </svg>
 );
}

function ShareIcon(props: InboxIconProps) {
 return (
  <svg
   {...props}
   xmlns="http://www.w3.org/2000/svg"
   width="24"
   height="24"
   viewBox="0 0 24 24"
   fill="none"
   stroke="currentColor"
   strokeWidth="2"
   strokeLinecap="round"
   strokeLinejoin="round"
  >
   <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
   <polyline points="16 6 12 2 8 6" />
   <line x1="12" x2="12" y1="2" y2="15" />
  </svg>
 );
}
