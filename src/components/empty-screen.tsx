import { Button } from "@/components/ui/button";
import { IconArrowRight } from "@/components/ui/icons";

const exampleMessages = [
 {
  heading: "Start a  VIDEO   chat",
  message: "I'd like to buy 10 shares of MSFT",
 },
 {
  heading: "Start a   VOICE chat",
  message: "What are the trending stocks?",
 },
 {
  heading: "Simply ask: What does generative AI  mean?",
  message: "What's the stock price of AAPL?",
 },

 {
  heading: "Give me a task",
  message: "I'd like to buy 10 shares of MSFT",
 },
];

export function EmptyScreen() {
 return (
  <div className="mx-auto z-60 max-w-2xl  px-4">
   {/*<SparklesPreview />*/}
   <div className="rounded-lg border bg-white bg-opacity-5 p-8 mb-4">
    <h1 className="mb-2 text-lg font-semibold">
     Struggling to Find the Right AI Tool?{" "}
    </h1>

    <p className="mb-2 leading-normal text-muted-foreground">
     This project complex information: Easily grasp complex concepts through
     text summarization, multimedia integration, and adaptable presentation.
     Emotional intelligence: Our AI understands your needs and responds with
     empathy, personalizing the experience. Open-ended exploration: Dont be
     limited by rigid formats. Ask complex questions, delve deeper into topics,
     and foster a true understanding of information.
    </p>
    <p className="leading-normal text-muted-foreground">Try an example:</p>
    <div className="mt-4 flex flex-col items-start space-y-2 mb-4">
     {exampleMessages.map((message, index) => (
      <Button key={index} variant="link" className="h-auto p-0 text-base">
       <IconArrowRight className="mr-2 text-muted-foreground" />
       {message.heading}
      </Button>
     ))}
    </div>
   </div>
  </div>
 );
}
