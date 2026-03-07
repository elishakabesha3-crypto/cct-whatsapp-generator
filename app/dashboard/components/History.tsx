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
    <div className="space-y-6">
      {messages.length === 0 ? (
        <div className="rounded-lg bg-slate-800/30 border border-slate-700/50 p-12 text-center">
          <p className="text-lg text-slate-400 mb-2">📭 No messages yet</p>
          <p className="text-sm text-slate-500">
            Create and send messages from the Daily Report or Quick Message tabs to see them here.
          </p>
        </div>
      ) : (
        <>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="px-4 py-2 rounded-lg bg-blue-500/10 border border-blue-500/30">
                <p className="text-sm font-bold text-blue-300">
                  {messages.length} message{messages.length !== 1 ? "s" : ""}
                </p>
              </div>
              <p className="text-sm text-slate-400">in history</p>
            </div>
            <button
              onClick={clearHistory}
              className="px-4 py-2 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 hover:bg-red-500/20 transition-all text-sm font-medium"
            >
              Clear History
            </button>
          </div>

          <div className="space-y-2 max-h-96 overflow-y-auto">
            {messages.map((msg, i) => (
              <div
                key={i}
                className="group rounded-lg bg-slate-800/30 border border-slate-700/50 p-4 hover:bg-slate-800/50 hover:border-slate-600/50 transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center gap-2 px-2 py-1 rounded-lg bg-slate-700/30 border border-slate-600/30">
                    <span className="text-xs font-bold text-slate-300">#{messages.length - i}</span>
                    <span className="text-xs text-slate-500">
                      {new Date().toLocaleDateString()}
                    </span>
                  </span>
                  <button
                    onClick={() => {
                      copyMessage(msg);
                    }}
                    className="px-3 py-1 text-xs rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400 hover:bg-blue-500/20 transition-all opacity-0 group-hover:opacity-100"
                  >
                    Copy
                  </button>
                </div>
                <div className="bg-slate-900/50 rounded p-3 max-h-32 overflow-y-auto border border-slate-700/30">
                  <p className="text-xs font-mono text-slate-300 whitespace-pre-wrap leading-relaxed">
                    {msg}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
