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
        text: "👋 Hello! I'm your Hackathon assistant. How can I help you today?",
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
      const response = await fetch(
        `https://amanm10000-mlsc-coherence-25-faq-chatbot-api.hf.space/chat`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ question: userInput }),
        }
      );

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

      const data = await response.json();
      let botResponse = data.response;

      botResponse = botResponse.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

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
        className="fixed z-20 flex justify-center items-center bottom-6 right-6 chat-button border-4 border-black bg-yellow-300 text-black shadow-[6px_6px_0px_#000] hover:translate-x-1 hover:translate-y-1 transition-all"
      >
        <Bot className="w-8 h-8" />
      </Button>

      {isOpen && (
        <div className="z-50 fixed inset-y-0 right-0 flex items-center p-4 w-full lg:w-1/3 transition-all duration-300 ease-in-out">
          <div className="relative w-full h-full md:h-auto bg-white border-4 border-black shadow-[8px_8px_0px_#000] rounded-xl p-4 flex flex-col">
            
            {/* Close Button */}
            <Button
              onClick={() => {
                setIsOpen(false);
                const button = document.querySelector(".chat-button");
                if (button) button.style.display = "flex";
              }}
              className="absolute -top-4 -right-4 bg-red-400 border-4 border-black rounded-full shadow-[4px_4px_0px_#000] hover:bg-red-500"
            >
              <X />
            </Button>

            {/* Header */}
            <h2 className="text-xl font-extrabold mb-3 text-center border-b-4 border-black pb-2 flex items-center justify-center gap-2">
              <Bot className="w-6 h-6" /> MLSC Hackathon Assistant
            </h2>

            {/* Messages */}
            <Card className="flex-1 overflow-y-auto p-3 bg-pink-100 border-4 border-black shadow-[6px_6px_0px_#000] rounded-xl">
              <CardContent>
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`p-3 my-2 rounded-lg border-4 border-black shadow-[4px_4px_0px_#000] max-w-xs md:max-w-sm text-sm md:text-base flex gap-2 ${
                      msg.sender === "user"
                        ? "bg-green-300 ml-auto text-black"
                        : "bg-yellow-200 text-black"
                    }`}
                  >
                    {msg.sender === "bot" ? (
                      <Bot className="w-5 h-5 mt-1 shrink-0" />
                    ) : (
                      <User className="w-5 h-5 mt-1 shrink-0" />
                    )}
                    <span
                      dangerouslySetInnerHTML={{ __html: msg.text }}
                    />
                  </div>
                ))}
                {isLoading && (
                  <div className="p-3 my-2 rounded-lg border-4 border-black shadow-[4px_4px_0px_#000] bg-yellow-200 text-black flex gap-2">
                    <Bot className="w-5 h-5 mt-1 shrink-0" />
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
                className="flex-1 border-4 border-black rounded-lg px-3 py-2 bg-blue-100 text-black shadow-[4px_4px_0px_#000] focus:outline-none"
              />
              <Button
                onClick={handleSend}
                className="bg-blue-400 border-4 border-black px-4 rounded-lg shadow-[4px_4px_0px_#000] hover:bg-blue-500"
              >
                <Send className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------------- UI Components (Neubrutalism Style) ---------------- */

export function Button({ children, className, ...props }) {
  return (
    <button
      className={`px-3 py-2 font-bold ${className}`}
      {...props}
    >
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
