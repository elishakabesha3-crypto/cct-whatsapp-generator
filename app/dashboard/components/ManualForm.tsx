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
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Input Section */}
        <div className="rounded-lg bg-slate-800/30 border border-slate-700/50 p-6">
          <h3 className="text-sm font-bold text-blue-300 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-400" />
            Quick Message
          </h3>

          <textarea
            placeholder="Type your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 text-white rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none h-48 font-mono"
          />

          <div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-blue-500/20 border border-blue-500/30">
              💡
            </span>
            <span>Message will be formatted with professional signature</span>
          </div>
        </div>

        {/* Preview Section */}
        <div className="rounded-lg bg-slate-800/30 border border-slate-700/50 p-6">
          <h3 className="text-sm font-bold text-emerald-300 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            Preview
          </h3>

          {preview ? (
            <div className="space-y-4">
              <div className="bg-slate-900/80 rounded p-4 max-h-48 overflow-y-auto">
                <p className="text-xs font-mono text-slate-300 whitespace-pre-wrap leading-relaxed">
                  {preview}
                </p>
              </div>

              <div className="space-y-2">
                <button
                  onClick={generateMessage}
                  className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg font-medium text-sm hover:shadow-lg hover:shadow-blue-500/30 active:scale-95 transition-all duration-200"
                >
                  Save Message
                </button>

                <a
                  href={`https://wa.me/?text=${encodeURIComponent(preview)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-block px-4 py-2 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white rounded-lg font-medium text-sm text-center hover:shadow-lg hover:shadow-emerald-500/30 active:scale-95 transition-all duration-200"
                >
                  Send to WhatsApp
                </a>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-48 text-center">
              <div>
                <p className="text-sm text-slate-500">Start typing to see preview</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
