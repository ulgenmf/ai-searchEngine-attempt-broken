import { useEffect, useState, useRef } from "react";
interface RecordingFieldProps {
 isRecording: boolean;
 transcript: string | string[];
 recordingComplete: boolean;
 handleToggleRecording: () => void;
}
function RecordingField() {
 const [isRecording, setIsRecording] = useState(false);
 const [isRecordingComplete, setIsRecordingComplete] = useState(false);
 const [transcript, setTranscript] = useState<string[]>([]);
 const recognitionRef = useRef<any>(null);


 // Function to start recording
 const startRecording = () => {
  setIsRecording(true);
  // Create a new SpeechRecognition instance and configure it
  recognitionRef.current = new window.webkitSpeechRecognition();
  recognitionRef.current.continuous = true;
  recognitionRef.current.interimResults = true;

  // Event handler for speech recognition results
  recognitionRef.current.onresult = (event: any) => {
   const { transcript: newTranscript } =
    event.results[event.results.length - 1][0];

   // Log the recognition results and update the transcript state
   console.log(event.results);

   setTranscript(newTranscript);
  };

  // Start the speech recognition
  recognitionRef.current.start();
 };

 // Cleanup effect when the component unmounts
 useEffect(() => {
  return () => {
   // Stop the speech recognition if it's active
   if (recognitionRef.current) {
    recognitionRef.current.stop();
   }
  };
 }, []);

 // Function to stop recording
 const stopRecording = () => {
  if (recognitionRef.current) {
   // Stop the speech recognition and mark recording as complete
   recognitionRef.current.stop();

   setIsRecordingComplete(true);
  }
  console.log(transcript);
  console.log(JSON.stringify({ message: [transcript] }));
 };

 // Toggle recording state and manage recording actions
 const handleToggleRecording = () => {
  setIsRecording(!isRecording);
  if (!isRecording) {
   startRecording();
  } else {
   stopRecording();
  }
 };
 return (
  <div>
   {(isRecording || transcript) && (
    <div className="">
     <div className="">
      {isRecording && (
       <div className="rounded-full w-4 h-4 bg-red-400 animate-pulse" />
      )}
     </div>
    </div>
   )}
   <div className="flex items-center w-full">
    {isRecording ? (
     <button
      onClick={handleToggleRecording}
      className="m-auto flex items-center justify-center bg-red-400 hover:bg-red-500 rounded-full w-10 h-10 focus:outline-none"
     >
      <svg
       className="h-6 w-6 "
       viewBox="0 0 24 24"
       xmlns="http://www.w3.org/2000/svg"
      >
       <path fill="white" d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
      </svg>
     </button>
    ) : (
     <button
      onClick={handleToggleRecording}
      className="m-auto flex items-center justify-center bg-blue-400 hover:bg-blue-500 rounded-full w-10 h-10 focus:outline-none"
     >
      <svg
       viewBox="0 0 256 256"
       xmlns="http://www.w3.org/2000/svg"
       className="w-8 h-8 text-white"
      >
       <path
        fill="currentColor" // Change fill color to the desired color
        d="M128 176a48.05 48.05 0 0 0 48-48V64a48 48 0 0 0-96 0v64a48.05 48.05 0 0 0 48 48ZM96 64a32 32 0 0 1 64 0v64a32 32 0 0 1-64 0Zm40 143.6V232a8 8 0 0 1-16 0v-24.4A80.11 80.11 0 0 1 48 128a8 8 0 0 1 16 0a64 64 0 0 0 128 0a8 8 0 0 1 16 0a80.11 80.11 0 0 1-72 79.6Z"
       />
      </svg>
     </button>
    )}
   </div>
  </div>
 );
}

export default RecordingField;
