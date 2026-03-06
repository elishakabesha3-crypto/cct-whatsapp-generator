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
  const [activeSection, setActiveSection] = useState<string>(DEFAULT_SECTIONS[0]);

  const [newIssue, setNewIssue] = useState({
    location: "",
    description: "",
    time: "",
    date: "",
    engineer: "",
    phone: "",
    ticketNumber: "",
  });

  useEffect(() => {
    const saved = localStorage.getItem("engineerList");
    setEngineers(saved ? JSON.parse(saved) : []);
  }, []);

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

    if (!engineers.includes(newIssue.engineer)) {
      const updated = [...engineers, newIssue.engineer];
      setEngineers(updated);
      localStorage.setItem("engineerList", JSON.stringify(updated));
    }

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

  const generateMessage = () => {
    if (preview.trim()) {
      const saved = localStorage.getItem("sentMessages");
      const messages = saved ? JSON.parse(saved) : [];
      messages.unshift(preview);
      localStorage.setItem("sentMessages", JSON.stringify(messages));
      alert("Message saved! Click Send to WhatsApp.");
    }
  };

  const clearAll = () => {
    if (confirm("Clear all issues?")) {
      setSections(DEFAULT_SECTIONS.map((name) => ({ name, issues: [] })));
    }
  };

  const sectionCounts = sections.map((s) => s.issues.length);
  const totalIssues = sectionCounts.reduce((a, b) => a + b, 0);

  return (
    <div className="space-y-6">
      {/* Stats Bar */}
      <div className="flex items-center justify-between p-4 rounded-lg bg-slate-800/30 border border-slate-700/50">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-blue-400">{totalIssues}</span>
            <span className="text-slate-400">total issues</span>
          </div>
          <div className="w-px h-6 bg-slate-700" />
          <div className="flex items-center gap-2">
            <span className="text-lg text-emerald-400">
              {sections.filter((s) => s.issues.length > 0).length}
            </span>
            <span className="text-slate-400">sections active</span>
          </div>
        </div>
        <button
          onClick={clearAll}
          disabled={totalIssues === 0}
          className="px-3 py-1 text-xs rounded-lg bg-red-500/10 text-red-400 border border-red-500/30 hover:bg-red-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Clear All
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Input Form */}
        <div className="lg:col-span-1 space-y-4">
          <div className="rounded-lg bg-slate-800/30 border border-slate-700/50 p-4">
            <h3 className="text-sm font-bold text-blue-300 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-400" />
              Add Issue
            </h3>

            <div className="space-y-3">
              <div>
                <label className="text-xs font-medium text-slate-300 mb-1 block">
                  Section
                </label>
                <select
                  value={activeSection}
                  onChange={(e) => setActiveSection(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-900/50 border border-slate-700 text-white rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                >
                  {DEFAULT_SECTIONS.map((section) => (
                    <option key={section} value={section}>
                      {section}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs font-medium text-slate-300 mb-1 block">
                  Location
                </label>
                <input
                  type="text"
                  placeholder="e.g., ATM 98 Mumbwa"
                  value={newIssue.location}
                  onChange={(e) =>
                    setNewIssue({ ...newIssue, location: e.target.value })
                  }
                  className="w-full px-3 py-2 bg-slate-900/50 border border-slate-700 text-white rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-slate-300 mb-1 block">
                  Description
                </label>
                <textarea
                  placeholder="Issue details"
                  value={newIssue.description}
                  onChange={(e) =>
                    setNewIssue({ ...newIssue, description: e.target.value })
                  }
                  className="w-full px-3 py-2 bg-slate-900/50 border border-slate-700 text-white rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none h-20"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-xs font-medium text-slate-300 mb-1 block">
                    Time
                  </label>
                  <input
                    type="time"
                    value={newIssue.time}
                    onChange={(e) =>
                      setNewIssue({ ...newIssue, time: e.target.value })
                    }
                    className="w-full px-3 py-2 bg-slate-900/50 border border-slate-700 text-white rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-slate-300 mb-1 block">
                    Date (DD-MM-YY)
                  </label>
                  <input
                    type="text"
                    placeholder="28-02-26"
                    value={newIssue.date}
                    onChange={(e) =>
                      setNewIssue({ ...newIssue, date: e.target.value })
                    }
                    className="w-full px-3 py-2 bg-slate-900/50 border border-slate-700 text-white rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-slate-300 mb-1 block">
                  Engineer
                </label>
                <select
                  value={newIssue.engineer}
                  onChange={(e) =>
                    setNewIssue({ ...newIssue, engineer: e.target.value })
                  }
                  className="w-full px-3 py-2 bg-slate-900/50 border border-slate-700 text-white rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                >
                  <option value="">Select engineer</option>
                  {engineers.map((eng) => (
                    <option key={eng} value={eng}>
                      {eng}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs font-medium text-slate-300 mb-1 block">
                  Phone (+260...)
                </label>
                <input
                  type="text"
                  placeholder="0714556086"
                  value={newIssue.phone}
                  onChange={(e) =>
                    setNewIssue({ ...newIssue, phone: e.target.value })
                  }
                  className="w-full px-3 py-2 bg-slate-900/50 border border-slate-700 text-white rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-slate-300 mb-1 block">
                  Ticket # (optional)
                </label>
                <input
                  type="text"
                  placeholder="INC1095183O"
                  value={newIssue.ticketNumber}
                  onChange={(e) =>
                    setNewIssue({ ...newIssue, ticketNumber: e.target.value })
                  }
                  className="w-full px-3 py-2 bg-slate-900/50 border border-slate-700 text-white rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                />
              </div>

              <button
                onClick={() => addIssue(activeSection)}
                className="w-full mt-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg font-medium text-sm hover:shadow-lg hover:shadow-blue-500/30 active:scale-95 transition-all duration-200"
              >
                Add Issue
              </button>
            </div>
          </div>
        </div>

        {/* Middle: Issues List */}
        <div className="lg:col-span-1 space-y-2 max-h-96 overflow-y-auto">
          {sections.map((section) => (
            <div key={section.name} className="rounded-lg overflow-hidden">
              <button
                onClick={() =>
                  setExpandedSection(
                    expandedSection === section.name ? null : section.name
                  )
                }
                className="w-full px-4 py-3 bg-slate-800/30 border border-slate-700/50 hover:bg-slate-800/50 transition-all flex items-center justify-between group"
              >
                <span className="flex items-center gap-2">
                  <span className="text-xs font-bold text-blue-300 bg-blue-500/20 px-2 py-1 rounded">
                    {section.issues.length}
                  </span>
                  <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                    {section.name}
                  </span>
                </span>
                <span className="text-xl text-slate-400 group-hover:text-slate-300 transition-transform transform group-hover:rotate-180 duration-300">
                  {expandedSection === section.name ? "▼" : "▶"}
                </span>
              </button>

              {expandedSection === section.name && section.issues.length > 0 && (
                <div className="bg-slate-900/50 border border-t-0 border-slate-700/50 p-3 space-y-2">
                  {section.issues.map((issue, idx) => (
                    <div
                      key={issue.id}
                      className="text-xs bg-slate-800/50 border border-slate-600/30 rounded p-2 flex items-start justify-between group hover:bg-slate-800/70 transition-all"
                    >
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-slate-200 truncate">
                          ({String(idx + 1).padStart(2, "0")}) {issue.location}
                        </p>
                        <p className="text-slate-400 text-xs truncate">
                          {issue.description}
                        </p>
                        <p className="text-slate-500 text-xs mt-1">
                          {issue.engineer} • {issue.date}
                        </p>
                      </div>
                      <button
                        onClick={() => removeIssue(section.name, issue.id)}
                        className="ml-2 px-2 py-1 rounded text-red-400 hover:bg-red-500/20 hover:text-red-300 transition-colors opacity-0 group-hover:opacity-100"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right: Preview */}
        <div className="lg:col-span-1">
          <div className="rounded-lg bg-slate-800/30 border border-slate-700/50 p-4 sticky top-6">
            <h3 className="text-sm font-bold text-emerald-300 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Message Preview
            </h3>

            {preview ? (
              <>
                <div className="bg-slate-900/80 rounded p-3 mb-4 max-h-64 overflow-y-auto">
                  <p className="text-xs font-mono text-slate-300 whitespace-pre-wrap leading-relaxed">
                    {preview}
                  </p>
                </div>

                <div className="space-y-2">
                  <button
                    onClick={generateMessage}
                    className="w-full px-4 py-2 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white rounded-lg font-medium text-sm hover:shadow-lg hover:shadow-emerald-500/30 active:scale-95 transition-all duration-200"
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
              </>
            ) : (
              <div className="py-8 text-center">
                <p className="text-sm text-slate-500">
                  Add issues to see preview
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
