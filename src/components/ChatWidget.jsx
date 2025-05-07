import React, { useState } from "react";
import { motion } from "framer-motion";

const exampleQuestions = [
  "How do I sell my license?",
  "How long does payment take?",
  "Is my data secure?",
];

const answers = {
  "How do I sell my license?":
    "Just upload your license details and we'll send you a valuation within 24 hours!",
  "How long does payment take?":
    "Once you accept our offer, payment is processed instantly.",
  "Is my data secure?":
    "Absolutely! We use industry-leading security to protect your data.",
};

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = (msg) => {
    const question = msg || input;
    setMessages([...messages, { from: "user", text: question }]);
    setTimeout(() => {
      setMessages((msgs) => [
        ...msgs,
        {
          from: "bot",
          text:
            answers[question] || "Sorry, I don't have an answer for that yet.",
        },
      ]);
    }, 500);
    setInput("");
  };

  return (
    <div>
      <motion.button
        className="fixed bottom-6 right-6 z-50 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg text-2xl"
        onClick={() => setOpen((o) => !o)}
        aria-label="Open chat"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        💬
      </motion.button>
      {open && (
        <motion.div
          className="fixed bottom-24 right-6 z-50 w-80 bg-white dark:bg-gray-900 rounded-lg shadow-lg flex flex-col overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.4, type: "spring" }}
        >
          <div className="bg-indigo-600 text-white px-4 py-2 font-semibold">
            SoftSell Chat
          </div>
          <div className="flex-1 p-4 space-y-2 h-64 overflow-y-auto text-sm">
            {messages.map((m, i) => (
              <motion.div
                key={i}
                className={m.from === "bot" ? "text-left" : "text-right"}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.1 + i * 0.05,
                  duration: 0.3,
                  type: "spring",
                }}
              >
                <span
                  className={
                    m.from === "bot"
                      ? "bg-indigo-100 dark:bg-indigo-800 text-indigo-900 dark:text-indigo-100"
                      : "bg-indigo-600 text-white"
                  }
                  style={{
                    borderRadius: "12px",
                    padding: "6px 12px",
                    display: "inline-block",
                    marginBottom: "2px",
                  }}
                >
                  {m.text}
                </span>
              </motion.div>
            ))}
          </div>
          <div className="p-2 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
            <div className="flex gap-2 mb-2">
              {exampleQuestions.map((q) => (
                <button
                  key={q}
                  className="bg-indigo-100 dark:bg-indigo-700 text-indigo-700 dark:text-indigo-100 rounded px-2 py-1 text-xs"
                  onClick={() => handleSend(q)}
                >
                  {q}
                </button>
              ))}
            </div>
            <form
              className="flex gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                if (input.trim()) handleSend();
              }}
            >
              <input
                className="flex-1 p-2 rounded border border-gray-300 dark:bg-gray-900 dark:text-white"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your question..."
              />
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded"
              >
                Send
              </button>
            </form>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ChatWidget;
