"use client";

import { useEffect, useState } from "react";

export default function History() {
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    const loadMessages = () => {
      const saved = localStorage.getItem("sentMessages");
      if (saved) setMessages(JSON.parse(saved));
    };

    loadMessages();

    // Optional: listen for changes if multiple tabs are used
    window.addEventListener("storage", loadMessages);
    return () => window.removeEventListener("storage", loadMessages);
  }, []);

  const clearHistory = () => {
    if (confirm("Clear all message history? This cannot be undone.")) {
      localStorage.setItem("sentMessages", JSON.stringify([]));
      setMessages([]);
    }
  };

  const copyMessage = (msg: string) => {
    navigator.clipboard.writeText(msg);
    alert("Message copied to clipboard!");
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Sent Messages History</h2>

      {messages.length === 0 ? (
        <p className="text-gray-500 text-center py-8">No messages sent yet. Create and send one from the Daily Report or Quick Message tabs.</p>
      ) : (
        <>
          <div className="bg-blue-50 p-4 rounded mb-4 text-sm text-gray-700">
            <p><span className="font-bold">{messages.length}</span> message(s) in history</p>
          </div>
          
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {messages.map((msg, i) => (
              <div key={i} className="bg-gray-50 border-l-4 border-green-600 p-4 rounded">
                <div className="flex items-start justify-between mb-2">
                  <p className="text-xs font-semibold text-gray-600">Message #{messages.length - i}</p>
                  <button
                    onClick={() => copyMessage(msg)}
                    className="text-xs bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded"
                  >
                    Copy
                  </button>
                </div>
                <p className="text-sm whitespace-pre-wrap text-gray-800 font-mono">{msg}</p>
              </div>
            ))}
          </div>

          <button
            onClick={clearHistory}
            className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded font-medium text-sm w-full"
          >
            Clear History
          </button>
        </>
      )}
    </div>
  );
}
