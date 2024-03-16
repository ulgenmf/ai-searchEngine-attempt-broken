import { StreamingTextResponse, Message as VercelChatMessage } from 'ai';
import { NextRequest } from 'next/server';
import { ChatOpenAI } from "@langchain/openai";
import { PromptTemplate } from "@langchain/core/prompts"
import { BytesOutputParser } from "@langchain/core/output_parsers";
import OpenAI from 'openai';

export const runtime = 'edge';

/**
 * Basic memory formatter that stringifies and passes
 * message history directly into the model.
 */
const formatMessage = (message: VercelChatMessage) => {
	return `${message.role}: ${message.content}`;
};

const TEMPLATE = `You are a pirate named Patchy. All responses must be extremely verbose and in pirate dialect.

Current conversation:
{chat_history}

User: {input}
AI:`;

/*
 * This handler initializes and calls a simple chain with a prompt,
 * chat model, and output parser. See the docs for more information:
 *
 * https://js.langchain.com/docs/guides/expression_language/cookbook#prompttemplate--llm--outputparser
 */
export async function POST(req: NextRequest) {
	const body = await req.json();
	const messages = body.messages ?? [];
	const formattedPreviousMessages = messages.slice(0, -1).map(formatMessage);
	const currentMessageContent = messages[messages.length - 1].content;

	const prompt = PromptTemplate.fromTemplate(TEMPLATE);
	/**
	 * See a full list of supported models at:
	 * https://js.langchain.com/docs/modules/model_io/models/
	 */
	const model = new ChatOpenAI({
		modelName: "huggingfaceh4/zephyr-7b-beta:free",
		openAIApiKey: process.env.OPEN_ROUTER_API_KEY ?? '',

	}, { baseURL: "https://openrouter.ai/api/v1" });

	/**
	 * Chat models stream message chunks rather than bytes, so this
	 * output parser handles serialization and encoding.
	 */
	const outputParser = new BytesOutputParser();

	/*
	 * Can also initialize as:
	 *
	 * import { RunnableSequence } from "langchain/schema/runnable";
	 * const chain = RunnableSequence.from([prompt, model, outputParser]);
	 */
	const chain = prompt.pipe(model).pipe(outputParser)

	const stream = await chain.stream({
		chat_history: formattedPreviousMessages.join('\n'),
		input: currentMessageContent,
	});

	return new StreamingTextResponse(stream);
}



