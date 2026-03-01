"use client";

import { useState } from "react";

export default function ManualForm() {
  const [message, setMessage] = useState("");

  const generateMessage = () => {
    if (!message.trim()) { alert("Enter a message!"); return; }
    const saved = localStorage.getItem("sentMessages");
    const messages = saved ? JSON.parse(saved) : [];
    messages.unshift(message);
    localStorage.setItem("sentMessages", JSON.stringify(messages));
    alert("Message ready! Click Send to WhatsApp.");
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg text-black max-w-xl space-y-4">
      <h2 className="text-xl font-semibold">Manual Message</h2>
      <textarea
        placeholder="Type your message..."
        className="w-full border p-2 rounded h-28"
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      <button
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full"
        onClick={generateMessage}
      >
        Save Message
      </button>
      {message && (
        <a className="inline-block mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full text-center"
          href={`https://wa.me/?text=${encodeURIComponent(message)}`} target="_blank">
          Send to WhatsApp
        </a>
      )}
    </div>
  );
}