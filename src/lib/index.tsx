import { OpenAIStream } from "ai";
import type OpenAI from "openai";
import zodToJsonSchema from "zod-to-json-schema";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { z } from "zod";
import { customFetch } from "@/lib/utils";

const consumeStream = async (stream: ReadableStream) => {
 const reader = stream.getReader();
 while (true) {
  const { done } = await reader.read();
  if (done) break;
 }
};

// apiEndpoints.ts

interface APIEndpoints {
 [key: string]: string;
}

export const endPoints = {
 freeModels: {
  Cinematika7B: {
   name: "huggingfaceh4/zephyr-7b-beta:free",
   contextLength: "4k",
   endPoint: "/api/freeModels/Cinematika7B",
  },
 },
};
export function cn(...inputs: ClassValue[]) {
 return twMerge(clsx(inputs));
}

export const formatNumber = (value: number) =>
 new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
 }).format(value);

export const runAsyncFnWithoutBlocking = (
 fn: (...args: any) => Promise<any>
) => {
 fn();
};

export const sleep = (ms: number) =>
 new Promise((resolve) => setTimeout(resolve, ms));

// Fake data
export function getStockPrice(name: string) {
 let total = 0;
 for (let i = 0; i < name.length; i++) {
  total = (total + name.charCodeAt(i) * 9999121) % 9999;
 }
 return total / 100;
}

//export const customFetch = async () => {
// fetch("api/freeModelsCinematika7B/route.ts", {
//  method: "POST",
//  headers: {
//   "Content-Type": "application/json",
//  },
//  body: JSON.stringify({ message: transcript }),
// })
//  .then((response) => {
//   if (!response.ok) {
//    throw new Error("Network response was not ok");
//   }
//   return response.blob(); // Handle the response as a Blob
//  })
//  .then((blob) => {
//   // Create a new object URL for the blob
//   const url = URL.createObjectURL(blob);

//   // Create an audio element
//   const audio = new Audio(url);

//   // Play the audio
//   audio.play();

//   // Optionally, revoke the object URL after the audio has played to free up memory
//   audio.onended = () => URL.revokeObjectURL(url);
//  })
//  .catch((error) => {
//   console.error("Error:", error);
//  });
//};
