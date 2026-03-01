"use client";

import { useState, useEffect } from "react";

export default function HourlySummary() {
  const [messages, setMessages] = useState<string[]>([]);

  // Load all messages from localStorage on component mount
  useEffect(() => {
    const saved = localStorage.getItem("sentMessages");
    setMessages(saved ? JSON.parse(saved) : []);
  }, []);

  // Send all messages in one WhatsApp message
  const sendAllToWhatsApp = () => {
    if (messages.length === 0) {
      alert("No messages to send!");
      return;
    }
    const combined = messages.join("\n\n"); // combine messages with spacing
    const url = `https://wa.me/?text=${encodeURIComponent(combined)}`;
    window.open(url, "_blank");
  };

  // Clear all messages from localStorage and state
  const clearMessages = () => {
    if (confirm("Are you sure you want to clear all messages?")) {
      localStorage.removeItem("sentMessages");
      setMessages([]);
    }
  };

  return (
    <div className="bg-gray-900 p-6 rounded-xl shadow-lg text-white max-w-2xl space-y-4">
      <h2 className="text-xl font-semibold">Hourly Summary Report</h2>

      {/* Messages List */}
      {messages.length === 0 ? (
        <p className="text-gray-400">No messages recorded this hour.</p>
      ) : (
        <div className="space-y-2 max-h-64 overflow-y-auto border p-2 rounded bg-gray-800">
          {messages.map((msg, idx) => (
            <p key={idx} className="text-sm whitespace-pre-wrap">
              {msg}
            </p>
          ))}
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex gap-2 mt-4">
        <button
          className="bg-green-600 px-4 py-2 rounded hover:bg-green-700 transition flex-1"
          onClick={sendAllToWhatsApp}
        >
          Send All to WhatsApp
        </button>
        <button
          className="bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition flex-1"
          onClick={clearMessages}
        >
          Clear Summary
        </button>
      </div>
    </div>
  );
}