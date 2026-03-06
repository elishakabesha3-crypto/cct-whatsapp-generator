"use client";

import { useState, useEffect } from "react";
import { formatBatchMessage, BatchIssue, MessageSection } from "@/lib/messageFormatter";

const DEFAULT_SECTIONS = [
  "SECONDLINE MAINTENANCE",
  "PHYSICAL SECURITY",
  "CRES ISSUES",
  "IT ISSUES",
  "NECOR CALLS",
  "POWER OUTAGE",
  "CASHOUT",
  "BUSY WITH REVERSAL",
  "OTHER",
];

export default function BatchIssueForm() {
  const [sections, setSections] = useState<MessageSection[]>(
    DEFAULT_SECTIONS.map((name) => ({ name, issues: [] }))
  );
  const [engineers, setEngineers] = useState<string[]>([]);
  const [preview, setPreview] = useState("");
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  // Form state for adding new issue
  const [newIssue, setNewIssue] = useState({
    location: "",
    description: "",
    time: "",
    date: "",
    engineer: "",
    phone: "",
    ticketNumber: "",
  });

  // Load engineers from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("engineerList");
    setEngineers(saved ? JSON.parse(saved) : []);
  }, []);

  // Update preview when sections change
  useEffect(() => {
    const activeSections = sections.filter((s) => s.issues.length > 0);
    if (activeSections.length > 0) {
      setPreview(formatBatchMessage(activeSections));
    } else {
      setPreview("");
    }
  }, [sections]);

  const addIssue = (sectionName: string) => {
    if (
      !newIssue.location ||
      !newIssue.description ||
      !newIssue.date ||
      !newIssue.engineer
    ) {
      alert("Please fill in Location, Description, Date, and Engineer!");
      return;
    }

    setSections((prev) =>
      prev.map((section) => {
        if (section.name === sectionName) {
          return {
            ...section,
            issues: [
              ...section.issues,
              {
                id: Date.now().toString(),
                ...newIssue,
              },
            ],
          };
        }
        return section;
      })
    );

    // Reset form
    setNewIssue({
      location: "",
      description: "",
      time: "",
      date: "",
      engineer: "",
      phone: "",
      ticketNumber: "",
    });
  };

  const removeIssue = (sectionName: string, issueId: string) => {
    setSections((prev) =>
      prev.map((section) => {
        if (section.name === sectionName) {
          return {
            ...section,
            issues: section.issues.filter((issue) => issue.id !== issueId),
          };
        }
        return section;
      })
    );
  };

  const clearAllIssues = () => {
    if (confirm("Clear all issues? This cannot be undone.")) {
      setSections((prev) => prev.map((s) => ({ ...s, issues: [] })));
      setPreview("");
    }
  };

  const generateMessage = () => {
    const activeSections = sections.filter((s) => s.issues.length > 0);
    if (activeSections.length === 0) {
      alert("Add at least one issue to generate a message!");
      return;
    }

    const msg = formatBatchMessage(activeSections);
    const saved = localStorage.getItem("sentMessages");
    const messages = saved ? JSON.parse(saved) : [];
    messages.unshift(msg);
    localStorage.setItem("sentMessages", JSON.stringify(messages));
    alert("Message ready! Click Send to WhatsApp.");
  };

  const addEngineer = (name: string, phone: string) => {
    const engineerEntry = `${name} ${phone ? "(" + phone + ")" : ""}`.trim();
    if (!engineers.includes(engineerEntry)) {
      const updated = [...engineers, engineerEntry];
      setEngineers(updated);
      localStorage.setItem("engineerList", JSON.stringify(updated));
    }
  };

  const getTotalIssues = () => sections.reduce((sum, s) => sum + s.issues.length, 0);

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4 text-gray-800">
          Create Daily Issues Report
        </h2>

        {/* Quick Stats */}
        <div className="bg-blue-50 p-4 rounded mb-4 text-sm text-gray-700">
          <p>
            <span className="font-bold">{getTotalIssues()}</span> issues added •{" "}
            <span className="font-bold">
              {sections.filter((s) => s.issues.length > 0).length}
            </span>{" "}
            sections active
          </p>
        </div>

        {/* Issue Input Form */}
        <div className="bg-gray-50 p-5 rounded mb-6 space-y-3">
          <h3 className="font-semibold text-gray-800">Add Issue to Section</h3>

          <div className="grid grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="Location (e.g., ATM 98 Mumbwa)"
              className="border p-2 rounded text-sm"
              value={newIssue.location}
              onChange={(e) =>
                setNewIssue({ ...newIssue, location: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Issue Description"
              className="border p-2 rounded text-sm"
              value={newIssue.description}
              onChange={(e) =>
                setNewIssue({ ...newIssue, description: e.target.value })
              }
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <input
              type="time"
              placeholder="Time"
              className="border p-2 rounded text-sm"
              value={newIssue.time}
              onChange={(e) => setNewIssue({ ...newIssue, time: e.target.value })}
            />
            <input
              type="text"
              placeholder="Date (e.g., 28-02-26)"
              className="border p-2 rounded text-sm"
              value={newIssue.date}
              onChange={(e) => setNewIssue({ ...newIssue, date: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <select
              className="border p-2 rounded text-sm"
              value={newIssue.engineer}
              onChange={(e) =>
                setNewIssue({ ...newIssue, engineer: e.target.value })
              }
            >
              <option value="">Select Engineer...</option>
              {engineers.map((eng) => (
                <option key={eng} value={eng}>
                  {eng}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Phone (e.g., 260956789012)"
              className="border p-2 rounded text-sm"
              value={newIssue.phone}
              onChange={(e) => setNewIssue({ ...newIssue, phone: e.target.value })}
            />
          </div>

          <input
            type="text"
            placeholder="Ticket # (optional)"
            className="border p-2 rounded text-sm w-full"
            value={newIssue.ticketNumber}
            onChange={(e) =>
              setNewIssue({ ...newIssue, ticketNumber: e.target.value })
            }
          />

          {/* Section Selector */}
          <div className="border-t pt-3">
            <p className="text-xs font-semibold text-gray-600 mb-2">
              Choose section to add issue:
            </p>
            <div className="grid grid-cols-2 gap-2">
              {sections.map((section) => (
                <button
                  key={section.name}
                  onClick={() => addIssue(section.name)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded text-xs font-medium transition"
                >
                  Add to {section.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Issues List by Section */}
        <div className="space-y-3 mb-6">
          {sections.map((section) => (
            <div key={section.name} className="border rounded">
              <button
                onClick={() =>
                  setExpandedSection(
                    expandedSection === section.name ? null : section.name
                  )
                }
                className="w-full bg-gray-100 hover:bg-gray-200 p-3 flex items-center justify-between font-semibold text-gray-800 text-sm"
              >
                <span>
                  {section.name} ({section.issues.length})
                </span>
                <span>{expandedSection === section.name ? "▼" : "▶"}</span>
              </button>

              {expandedSection === section.name && (
                <div className="p-3 bg-white space-y-2 border-t">
                  {section.issues.length === 0 ? (
                    <p className="text-xs text-gray-500">No issues added yet</p>
                  ) : (
                    section.issues.map((issue, idx) => (
                      <div
                        key={issue.id}
                        className="bg-gray-50 p-2 rounded text-xs space-y-1 border-l-4 border-blue-500"
                      >
                        <p className="font-semibold">
                          ({String(idx + 1).padStart(2, "0")}) {issue.location}
                        </p>
                        <p className="text-gray-700">{issue.description}</p>
                        <p className="text-gray-600">
                          @ {issue.time || "--:--"} {issue.date}
                        </p>
                        <p className="text-gray-700">
                          {issue.engineer} {issue.phone ? "+" + issue.phone : ""}
                        </p>
                        {issue.ticketNumber && (
                          <p className="text-gray-600">
                            Ticket #: {issue.ticketNumber}
                          </p>
                        )}
                        <button
                          onClick={() => removeIssue(section.name, issue.id)}
                          className="text-red-600 hover:text-red-800 text-xs font-semibold mt-2"
                        >
                          Remove
                        </button>
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Message Preview */}
        {preview && (
          <div className="bg-gray-100 p-4 rounded border-l-4 border-green-600 space-y-2 mb-6">
            <p className="text-sm font-semibold text-gray-600">
              Message Preview:
            </p>
            <p className="text-sm whitespace-pre-wrap text-gray-800 font-mono text-xs">
              {preview}
            </p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="space-y-2">
          {getTotalIssues() > 0 && (
            <>
              <button
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded font-medium w-full transition"
                onClick={generateMessage}
              >
                Generate Message
              </button>

              {preview && (
                <a
                  className="inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded font-medium w-full text-center transition"
                  href={`https://wa.me/?text=${encodeURIComponent(preview)}`}
                  target="_blank"
                >
                  Send to WhatsApp
                </a>
              )}

              <button
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded font-medium w-full transition text-sm"
                onClick={clearAllIssues}
              >
                Clear All Issues
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
