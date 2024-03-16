import { createAI, createStreamableUI, getMutableAIState, render } from "ai/rsc";
import OpenAI from "openai";

import { BotMessage } from "@/components/llm-components/message";
import { z } from "zod";
import { spinner } from "@/components/llm-components/llm-stocks/spinner";

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPEN_ROUTER_API_KEY});




async function submitUserMessage(content: string) {
  "use server";

  const aiState = getMutableAIState();

  // Update AI state with new message.
  aiState.update([
    ...aiState.get(),
    {
      role: "user",
      content,
    },
  ]);

  // render() returns a stream of UI components
  const ui = render({
    model: "mistralai/mistral-7b-instruct:free",
    provider: openai,
    // You may want to construct messages from your AI state
    messages: [
      { role: 'system', content: 'You are my personal assistant. Your  job is to help me with my questions' },
      { role: 'user', content: content }
    ],
  })

  return {
    id: Date.now(),
    // You can render ui on the client with something like `{message.display}`
    display: ui
  };
}
const initialAIState: {
 role: "user" | "assistant" | "system" | "function";
 content: string;
 id?: string;
 name?: string;
}[] = [];

const initialUIState: {
 id: number;
 display: React.ReactNode;
}[] = [];

export const AI = createAI({
 actions: {
  submitUserMessage,

 },
 initialUIState,
 initialAIState,
});
