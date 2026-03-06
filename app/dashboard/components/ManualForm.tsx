"use client";

import { useState, useEffect } from "react";
import { formatMessage } from "@/lib/messageFormatter";

export default function ManualForm() {
  const [message, setMessage] = useState("");
  const [preview, setPreview] = useState("");

  useEffect(() => {
    if (message.trim()) {
      setPreview(formatMessage(message));
    } else {
      setPreview("");
    }
  }, [message]);

  const generateMessage = () => {
    if (!message.trim()) { alert("Enter a message!"); return; }
    const formattedMsg = formatMessage(message);
    const saved = localStorage.getItem("sentMessages");
    const messages = saved ? JSON.parse(saved) : [];
    messages.unshift(formattedMsg);
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
      {/* Message Preview */}
      {preview && (
        <div className="bg-gray-100 p-4 rounded border-l-4 border-green-600 space-y-2">
          <p className="text-sm font-semibold text-gray-600">Message Preview:</p>
          <p className="text-sm whitespace-pre-wrap text-gray-800">{preview}</p>
        </div>
      )}

      <button
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full font-medium"
        onClick={generateMessage}
      >
        Save Message
      </button>
      {preview && (
        <a className="inline-block mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full text-center font-medium"
          href={`https://wa.me/?text=${encodeURIComponent(preview)}`} target="_blank">
          Send to WhatsApp
        </a>
      )}
    </div>
  );
}
