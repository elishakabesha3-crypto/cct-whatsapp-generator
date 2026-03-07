"use client";

import { useState, useEffect } from "react";
import { generateFirstLineCallMessage } from "@/lib/messageFormatter";

export default function FirstLineCallsForm() {
  const [callerContact, setCallerContact] = useState("");
  const [issueType, setIssueType] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [engineerList, setEngineerList] = useState<string[]>([]);
  const [preview, setPreview] = useState("");

  const issueTypes = [
    "Network Connectivity",
    "Software Issue",
    "Hardware Problem",
    "Access Issue",
    "Performance Problem",
    "System Down",
    "Other"
  ];

  useEffect(() => {
    setEngineerList(JSON.parse(localStorage.getItem("engineerList") || "[]"));
  }, []);

  useEffect(() => {
    if (callerContact && issueType && assignedTo) {
      setPreview(generateFirstLineCallMessage(callerContact, issueType, assignedTo));
    } else {
      setPreview("");
    }
  }, [callerContact, issueType, assignedTo]);

  const addEngineer = (newEng: string) => {
    if (!newEng.trim()) return;
    const updated = [...engineerList, newEng.trim()];
    setEngineerList(updated);
    localStorage.setItem("engineerList", JSON.stringify(updated));
  };

  const generateMessage = () => {
    if (!callerContact || !issueType || !assignedTo) {
      alert("Please fill all fields!");
      return;
    }

    const msg = generateFirstLineCallMessage(callerContact, issueType, assignedTo);
    const saved = localStorage.getItem("sentMessages");
    const messages = saved ? JSON.parse(saved) : [];
    messages.unshift(msg);
    localStorage.setItem("sentMessages", JSON.stringify(messages));
    alert("Message ready! Click Send to WhatsApp.");
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg text-black max-w-xl space-y-4">
      <h2 className="text-xl font-semibold">First Line Call Alert</h2>

      {/* Caller Contact */}
      <div>
        <label className="block text-sm font-medium mb-1">Caller Contact</label>
        <input
          type="text"
          placeholder="Phone number or email"
          className="w-full border px-3 py-2 rounded"
          value={callerContact}
          onChange={(e) => setCallerContact(e.target.value)}
        />
      </div>

      {/* Issue Type Dropdown */}
      <div>
        <label className="block text-sm font-medium mb-1">Issue Type</label>
        <select
          className="w-full border px-3 py-2 rounded"
          value={issueType}
          onChange={(e) => setIssueType(e.target.value)}
        >
          <option value="">-- Select Issue Type --</option>
          {issueTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* Engineer Dropdown */}
      <div>
        <label className="block text-sm font-medium mb-1">Assign To Engineer</label>
        <select
          className="w-full border px-3 py-2 rounded"
          value={assignedTo}
          onChange={(e) => setAssignedTo(e.target.value)}
        >
          <option value="">-- Assign to Engineer --</option>
          {engineerList.map((eng) => (
            <option key={eng} value={eng}>
              {eng}
            </option>
          ))}
        </select>
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          id="newEngFL"
          placeholder="Add new Engineer"
          className="border px-2 py-1 flex-1 rounded"
        />
        <button
          className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
          onClick={() => {
            const input = document.getElementById("newEngFL") as HTMLInputElement;
            if (input.value.trim()) {
              addEngineer(input.value);
              input.value = "";
            }
          }}
        >
          Add
        </button>
      </div>

      {/* Message Preview */}
      {preview && (
        <div className="bg-gray-100 p-4 rounded border-l-4 border-blue-600 space-y-2">
          <p className="text-sm font-semibold text-gray-600">Message Preview:</p>
          <p className="text-sm whitespace-pre-wrap text-gray-800">{preview}</p>
        </div>
      )}

      <button
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full font-medium"
        onClick={generateMessage}
      >
        Generate Message
      </button>

      {preview && (
        <a
          className="inline-block mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full text-center font-medium"
          href={`https://wa.me/?text=${encodeURIComponent(preview)}`}
          target="_blank"
        >
          Send to WhatsApp
        </a>
      )}
    </div>
  );
}
