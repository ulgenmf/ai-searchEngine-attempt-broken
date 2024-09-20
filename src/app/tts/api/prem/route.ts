import fetch from "node-fetch";
import { Groq } from "groq-sdk";

const groq = new Groq({
	dangerouslyAllowBrowser: true,
	apiKey: "",
});

export async function POST(request: Request, response: Response) {
	const { message } = await request.json();
	console.log(message);

	const url = "https://tts.verbatik.com/api/v1/tts";
	const headers = {
		"Content-Type": "application/ssml+xml",
		Authorization: "",
	};

	try {
		const chatCompletion = await groq.chat.completions
			.create({
				messages: [
					{
						role: "user",
						content: 'hey',
					},
				],
				model: "mixtral-8x7b-32768",
			})
			.then((chatCompletion) => {
				console.log(chatCompletion.choices[0]?.message?.content || "");
				const answer = chatCompletion.choices[0]?.message?.content || "";
				return answer
			});

		const data = `
<speak version='1.0'>
      <voice name='en-US-ChristopherNeural'>${chatCompletion}</voice>
</speak>
`;

		const fetchResponse = await fetch(url, {
			method: "POST",
			headers: headers,
			body: data,
		});

		if (!fetchResponse.ok)
			throw new Error(`Unexpected response ${fetchResponse.statusText}`);

		const arrayBuffer = await fetchResponse.arrayBuffer();
		const blob = Buffer.from(arrayBuffer);

		// Sending the Buffer back to the client
		return new Response(blob, {
			headers: {
				'Content-Type': 'application/octet-stream', // Adjust the content type as needed
			},
		});
	} catch (err) {
		console.error(err);
		return new Response(JSON.stringify({ message: err }), { status: 500 });
	}
}
