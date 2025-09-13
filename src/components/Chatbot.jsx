import { useState, useEffect, useRef } from "react";
import { Send, X, Bot, User } from "lucide-react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    setMessages([
      {
        text: "👋 Hello! I'm your Ideathon assistant. How can I help you today?",
        sender: "bot",
      },
    ]);
  }, []);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages([...messages, userMessage]);
    const userInput = input;
    setInput("");

    try {
      setIsLoading(true);
      const response = await fetch(`https://smitb2005-novatra.hf.space/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: userInput }),
      });

      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);

      const data = await response.json();
      let botResponse = data.response;

      botResponse = botResponse.replace(
        /\*\*(.*?)\*\*/g,
        "<strong>$1</strong>"
      );

      setMessages((prev) => [...prev, { text: botResponse, sender: "bot" }]);
    } catch (error) {
      console.error("Error fetching response:", error);
      setMessages((prev) => [
        ...prev,
        { text: "⚠️ Sorry, something went wrong. Try again.", sender: "bot" },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {/* Floating Open Button */}
      <Button
        onClick={() => {
          setIsOpen(true);
          const button = document.querySelector(".chat-button");
          if (button) button.style.display = "none";
        }}
        className="fixed z-20 flex justify-center items-center bottom-24 right-12 chat-button 
                    border-[#001219] bg-[#ee9b00] text-[#001219] 
                   shadow-[6px_6px_0px_#001219] hover:translate-x-1 hover:translate-y-1 transition-all"
      >
        <Bot className="w-8 h-8" />
      </Button>

{isOpen && (
    <div
    className="z-50 fixed bottom-2 right-2 
               w-[95%] max-w-md h-[70vh]   
               sm:h-[70vh] md:h-[600px] 
               sm:max-w-md md:max-w-lg lg:w-1/3 
               p-3 sm:p-4 flex items-center justify-center"
  >
    <div
      className="relative w-full h-full bg-[#efefef] border-4 border-[#001219] 
                 shadow-[8px_8px_0px_#001219] rounded-xl p-4 flex flex-col"
    >
      {/* Close Button */}
      <Button
        onClick={() => {
          setIsOpen(false);
          const button = document.querySelector(".chat-button");
          if (button) button.style.display = "flex";
        }}
        className="absolute -top-4 -right-4 bg-[#ae2012] border-4 border-[#001219] 
                   rounded-full shadow-[4px_4px_0px_#001219] hover:bg-[#9b2226] text-[#efefef]"
      >
        <X />
      </Button>

      <h2
        className="text-lg sm:text-xl font-extrabold mb-3 text-center border-b-4 border-[#001219] 
                   pb-2 flex items-center justify-center gap-2 text-[#005f73]"
      >
        <Bot className="w-5 h-5 sm:w-6 sm:h-6" /> NovaTra 1.0 Assistant
      </h2>
      
      <Card
        className="flex-1 overflow-y-auto p-3 bg-[#94d2bd] border-4 border-[#001219] 
                   shadow-[6px_6px_0px_#001219] rounded-xl"
      >
        <CardContent>
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-2 sm:p-3 my-2 rounded-lg border-4 border-[#001219] 
                          shadow-[4px_4px_0px_#001219] max-w-[80%] sm:max-w-sm 
                          text-xs sm:text-sm md:text-base flex gap-2 ${
                msg.sender === "user"
                  ? "bg-[#ca6702] ml-auto text-[#efefef]"
                  : "bg-[#e9d8a6] text-[#001219]"
              }`}
            >
              {msg.sender === "bot" ? (
                <Bot className="w-4 h-4 sm:w-5 sm:h-5 mt-1 shrink-0" />
              ) : (
                <User className="w-4 h-4 sm:w-5 sm:h-5 mt-1 shrink-0" />
              )}
              <span dangerouslySetInnerHTML={{ __html: msg.text }} />
            </div>
          ))}
          {isLoading && (
            <div
              className="p-2 sm:p-3 my-2 rounded-lg border-4 border-[#001219] 
                         shadow-[4px_4px_0px_#001219] bg-[#e9d8a6] text-[#001219] flex gap-2"
            >
              <Bot className="w-4 h-4 sm:w-5 sm:h-5 mt-1 shrink-0" />
              <span className="animate-pulse">Typing...</span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </CardContent>
      </Card>

      {/* Input */}
      <div className="flex mt-3 gap-2">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSend()}
          placeholder="Ask me anything..."
          className="flex-1 border-4 border-[#001219] rounded-lg px-2 sm:px-3 py-2 bg-[#0a9396] 
                     text-[#efefef] shadow-[4px_4px_0px_#001219] placeholder-[#efefef]/70 focus:outline-none"
        />
        <Button
          onClick={handleSend}
          className="bg-[#005f73] border-4 border-[#001219] px-3 sm:px-4 rounded-lg 
                     shadow-[4px_4px_0px_#001219] hover:bg-[#0a9396] text-[#efefef]"
        >
          <Send className="w-4 h-4 sm:w-5 sm:h-5" />
        </Button>
      </div>
    </div>
  </div>
)}
</div>
  );
}

/* ---------------- UI Components ---------------- */

export function Button({ children, className, ...props }) {
  return (
    <button className={`px-3 py-2 font-bold ${className}`} {...props}>
      {children}
    </button>
  );
}

export function Card({ children, className }) {
  return <div className={`${className}`}>{children}</div>;
}

export function CardContent({ children, className }) {
  return <div className={`${className}`}>{children}</div>;
}

export function Input({ className, ...props }) {
  return <input className={`${className}`} {...props} />;
}
