import { useVelocity } from "framer-motion";
import { atom, useAtom } from "jotai";
import { useEffect, useState, useRef } from "react";

// Declare a global interface to add the webkitSpeechRecognition property to the Window object
declare global {
	interface Window {
		webkitSpeechRecognition: any;
	}
}
export const userVoiceInputAtom = atom<string[]>([]);
export const isRecordingOnAtom = atom<boolean>(false)
export const isRecordingCompleteAtom = atom<boolean>(false)
const useSpeechRecognition = () => {
	const [isRecording, setIsRecording] = useAtom(isRecordingOnAtom);
	const [isRecordingComplete, setIsRecordingComplete] = useAtom(isRecordingCompleteAtom);
	const [transcript, setTranscript] = useAtom(userVoiceInputAtom);
	const recognitionRef = useRef<any>(null);

	const startRecording = () => {
		recognitionRef.current = new window.webkitSpeechRecognition();
		recognitionRef.current.continuous = true;
		recognitionRef.current.interimResults = true;

		recognitionRef.current.onresult = (event: any) => {
			const { transcript: newTranscript } = event.results[event.results.length - 1][0];
			setTranscript([newTranscript]);
		};

		recognitionRef.current.start();
	};

	const stopRecording = () => {
		if (recognitionRef.current) {
			recognitionRef.current.stop();
			setIsRecordingComplete(true);
		}
	};

	const handleToggleRecording = () => {
		setIsRecording((prev) => !prev)
		if (!isRecording) {
			startRecording();
			setIsRecordingComplete(false)
		} else {
			stopRecording();
			setIsRecordingComplete(true)
		}
	};

	useEffect(() => {
		return () => {
			if (recognitionRef.current) {
				recognitionRef.current.stop();
			}
		};
	}, []);

	return {
		isRecording,
		isRecordingComplete,
		transcript,
		handleToggleRecording,
	};
};

export default useSpeechRecognition;