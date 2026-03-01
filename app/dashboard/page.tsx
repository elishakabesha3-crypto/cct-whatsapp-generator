"use client";

import { useState } from "react";
import MessageForm from "./components/MessageForm";
import ITIssuesForm from "./components/ITIssuesForm";
import ManualForm from "./components/ManualForm";
import HourlySummary from "./components/HourlySummary";

export default function Dashboard() {
  const [tab, setTab] = useState<"atm" | "it" | "manual" | "summary">("atm");

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6 md:p-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h1 className="text-3xl font-bold mb-4 md:mb-0">
          CCT WhatsApp Generator 🚀
        </h1>

        <div className="flex gap-4">
          <button
            className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            onClick={() => alert("New Message clicked")}
          >
            + New Message
          </button>
          <button
            className="bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700 transition"
            onClick={() => alert("Logout clicked")}
          >
            Logout
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-8 flex-wrap">
        {["atm", "it", "manual", "summary"].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t as any)}
            className={`px-4 py-2 rounded-lg transition ${
              tab === t
                ? "bg-green-600 text-white"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            {t === "atm" ? "ATM Report" : t === "it" ? "I.T Issues" : t === "manual" ? "Manual Message" : "Hourly Summary"}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="space-y-6">
        {tab === "atm" && <MessageForm />}
        {tab === "it" && <ITIssuesForm />}
        {tab === "manual" && <ManualForm />}
        {tab === "summary" && <HourlySummary />}
      </div>
    </div>
  );
}