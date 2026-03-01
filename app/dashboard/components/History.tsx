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

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg text-black max-w-xl">
      <h2 className="text-xl font-semibold mb-4">Sent Messages History</h2>

      {messages.length === 0 ? (
        <p className="text-gray-500">No messages sent yet...</p>
      ) : (
        <ul className="list-disc pl-5 space-y-2 max-h-96 overflow-y-auto">
          {messages.map((msg, i) => (
            <li key={i} className="border-b pb-1">{msg}</li>
          ))}
        </ul>
      )}
    </div>
  );
}