// import fetch from "node-fetch";
// import fs from "fs";
// import stream from "stream";
// import { promisify } from "util";
// import bodyParser, { text } from "body-parser";

// const pipeline = promisify(stream.pipeline);
// const key = process.env.VERBATIK_API_KEY;

// export async function POST(req: Request, res: Response) {
// 	const url = "https://tts.verbatik.com/api/v1/tts";
// 	const headers = {
// 		"Content-Type": "application/ssml+xml",
// 		Authorization: `Bearer ${key}`,
// 	};

// 	const text = await req.json();
// 	console.log("text022", text);

// 	const data = `
//     <speak version='1.0'>
//       <voice name='en-US-ChristopherNeural'>${text}</voice>
//     </speak>
//   `;

// 	try {
// 		const response = await fetch(url, {
// 			method: "POST",
// 			headers: headers,
// 			body: data,
// 		});

// 		if (!response.ok) {
// 			throw new Error(`Unexpected response ${response.statusText}`);
// 		}

// 		await pipeline(response.body, fs.createWriteStream(`${text}.mp3`));

// 		res.status(200).json({ message: "Text converted to audio successfully" });
// 	} catch (error) {
// 		console.error(error);
// 		res.status(500).json({ error: "An error occurred" });
// 	}
// }
