"use client";
import React, { useEffect, useState } from "react";
import Groq from "groq-sdk";

const groq = new Groq({
 dangerouslyAllowBrowser: true,
 apiKey: "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",
});

const ChatComponent = () => {
 const [chatContent, setChatContent] = useState("");
 const [userInput, setUserInput] = useState("");

 const handleInputChange = (e) => {
  setUserInput(e.target.value);
 };

 const handleSubmit = async (e) => {
  e.preventDefault();
  const completion = await groq.chat.completions.create({
   messages: [
    {
     role: "user",
     content: userInput,
    },
   ],
   model: "mixtral-8x7b-32768",
  });
  console.log(completion.choices[0]?.message?.content || "");
 };




 return (
  <div>
   <form onSubmit={handleSubmit}>
    <input
     type="text"
     value={userInput}
     onChange={handleInputChange}
     placeholder="Type your message..."
    />
    <button type="submit">Send</button>
   </form>
   <p>{chatContent}</p>
  </div>
 );
};

export default ChatComponent;
