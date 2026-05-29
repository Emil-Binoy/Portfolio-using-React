import { useState, useRef, useEffect } from "react";
import { FaRobot } from "react-icons/fa6";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "bot",
      content:
        "Hey there! I'm Emil's AI twin. Ask me anything about his projects, skills, or tech stack!",
    },
  ]);

  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    try {
      const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";

      const res = await fetch(`${apiUrl}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMsg] }),
      });

      if (!res.ok) {
        throw new Error(`Server responded with status ${res.status}`);
      }

      const data = await res.json();

      if (data && data.text) {
        setMessages((prev) => [...prev, { role: "bot", content: data.text }]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            role: "bot",
            content:
              "I received an empty response. Let me recalibrate my circuits. Try asking again!",
          },
        ]);
      }
    } catch (error) {
      console.error("Chatbot Fetch Error:", error);

      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          content:
            "🤖 Oops! It looks like my backend server is experiencing an issue right now. Please try asking again in a few moments.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center text-xl"
        >
          <FaRobot />
        </button>
      )}

      {isOpen && (
        <div className="w-80 md:w-96 h-[450px] bg-slate-900/80 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-white">
          <div className="bg-white/5 p-4 flex justify-between items-center border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="font-semibold text-sm">Agent</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              ✕
            </button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto space-y-4 scrollbar-thin">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${
                    msg.role === "user"
                      ? "bg-blue-600 text-white rounded-br-none"
                      : "bg-white/10 text-slate-100 rounded-bl-none border border-white/5"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/5 border border-white/5 text-gray-400 rounded-2xl rounded-bl-none px-4 py-2.5 text-sm animate-pulse">
                  Thinking...
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          <form
            onSubmit={handleSend}
            className="p-3 bg-white/5 border-t border-white/10 flex gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me something..."
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-blue-500 placeholder-gray-500 text-white"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 active:scale-95 transition-all px-4 py-2 rounded-xl text-sm font-medium"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
