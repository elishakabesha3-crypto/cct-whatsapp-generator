"use client";

import { useState, useEffect } from "react";
import { generateITMessage } from "@/lib/messageFormatter";

export default function ITIssuesForm() {
  const [issue, setIssue] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [engineerList, setEngineerList] = useState<string[]>([]);
  const [preview, setPreview] = useState("");

  useEffect(() => {
    setEngineerList(JSON.parse(localStorage.getItem("engineerList") || "[]"));
  }, []);

  // Update preview when fields change
  useEffect(() => {
    if (issue && assignedTo) {
      setPreview(generateITMessage(issue, assignedTo));
    } else {
      setPreview("");
    }
  }, [issue, assignedTo]);

  const addEngineer = (newEng: string) => {
    if (!newEng.trim()) return;
    const updated = [...engineerList, newEng.trim()];
    setEngineerList(updated);
    localStorage.setItem("engineerList", JSON.stringify(updated));
  };

  const generateMessage = () => {
    if (!issue || !assignedTo) { alert("Fill all fields!"); return; }
    const msg = generateITMessage(issue, assignedTo);
    const saved = localStorage.getItem("sentMessages");
    const messages = saved ? JSON.parse(saved) : [];
    messages.unshift(msg);
    localStorage.setItem("sentMessages", JSON.stringify(messages));
    alert("Message ready! Click Send to WhatsApp.");
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg text-black max-w-xl space-y-4">
      <h2 className="text-xl font-semibold">Report I.T Issue</h2>
      <textarea placeholder="Describe the issue..." className="w-full border p-2 rounded h-28" value={issue} onChange={e => setIssue(e.target.value)} />

      <select className="w-full border px-3 py-2 rounded" value={assignedTo} onChange={e => setAssignedTo(e.target.value)}>
        <option value="">-- Assign to Engineer --</option>
        {engineerList.map(e => <option key={e} value={e}>{e}</option>)}
      </select>

      <div className="flex gap-2">
        <input type="text" id="newEngIT" placeholder="Add new Engineer" className="border px-2 py-1 flex-1 rounded"/>
        <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
          onClick={() => {
            const input = document.getElementById("newEngIT") as HTMLInputElement;
            if (input.value.trim()) { addEngineer(input.value); input.value = ""; }
          }}>Add</button>
      </div>

      {/* Message Preview */}
      {preview && (
        <div className="bg-gray-100 p-4 rounded border-l-4 border-purple-600 space-y-2">
          <p className="text-sm font-semibold text-gray-600">Message Preview:</p>
          <p className="text-sm whitespace-pre-wrap text-gray-800">{preview}</p>
        </div>
      )}

      <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full font-medium" onClick={generateMessage}>
        Generate Message
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
