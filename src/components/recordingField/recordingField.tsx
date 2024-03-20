import useSpeechRecognition from "@/lib/hooks/speechRecognition";
import { atom } from "jotai";
import { MicIcon, PauseCircle } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

function RecordingField({ children }: { children?: React.ReactNode }) {
 const { isRecording, isRecordingComplete, transcript, handleToggleRecording } =
  useSpeechRecognition();

 return (
  <div>
   {(isRecording || transcript.length > 0) && (
    <div className="">
     <div className="">
      {isRecording && (
       <div className="rounded-full w-4 h-4 absolute top-3  bg-red-500 animate-pulse" />
      )}
     </div>
    </div>
   )}
   <div className="flex items-center w-full">
    <button
     type="button"
     onClick={handleToggleRecording}
     className={`m-auto flex items-center justify-center rounded-full h-10 w-10  focus:outline-none ${
      isRecording
       ? " bg-red-400 hover:bg-red-500"
       : "bg-blue-400 hover:bg-blue-500 text-black"
     }`}
    >
     {isRecording ? children : <MicIcon />}
    </button>
   </div>
  </div>
 );
}

export default RecordingField;
