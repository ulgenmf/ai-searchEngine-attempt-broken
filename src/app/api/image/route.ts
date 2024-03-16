import OpenAI from "openai"



const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPEN_ROUTER_API_KEY,


  // dangerouslyAllowBrowser: true,
})
export async function POST(req: any, res: any) {
const {searchTerm:textK, imageK }= await req.json()
//console.log(textK,imageK)
  try {
    const completion = await openai.chat.completions.create({
      model: "google/gemini-pro-vision",
      messages: [
        {
          role: "user", "content": [
            { "type": "text", "text": textK },
            {
              "type": "image_url",
              "image_url": {
                "url": imageK,
              },
            },
          ],
        }
      ],
    })

    console.log(completion.choices[0])
    return Response.json({ message: completion.choices[0] });
  } catch (error) {
    console.error("Error making API call:", error);
    Response.json({ error: "An error occurred while processing your request." });
  }
  return new Response(JSON.stringify({ message: 'Success' }), { status: 200 });
}
