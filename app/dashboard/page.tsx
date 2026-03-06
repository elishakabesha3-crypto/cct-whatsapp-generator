"use client"

import { useState } from "react"
import BatchIssueForm from "./components/BatchIssueForm"
import ManualForm from "./components/ManualForm"
import History from "./components/History"

export default function DashboardPage() {
  const [tab, setTab] = useState("batch")

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header with Navigation */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-8 py-4">
          <h1 className="text-3xl font-bold text-gray-800">CCT Daily Issues Report</h1>
          <p className="text-gray-600 text-sm mt-1">Organize and send structured issue reports to WhatsApp</p>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex space-x-1">
            <button
              onClick={() => setTab("batch")}
              className={`px-6 py-3 font-medium text-sm border-b-2 transition ${
                tab === "batch"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-600 hover:text-gray-900"
              }`}
            >
              Daily Report
            </button>
            <button
              onClick={() => setTab("manual")}
              className={`px-6 py-3 font-medium text-sm border-b-2 transition ${
                tab === "manual"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-600 hover:text-gray-900"
              }`}
            >
              Quick Message
            </button>
            <button
              onClick={() => setTab("history")}
              className={`px-6 py-3 font-medium text-sm border-b-2 transition ${
                tab === "history"
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-600 hover:text-gray-900"
              }`}
            >
              History
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          {tab === "batch" && <BatchIssueForm />}
          {tab === "manual" && <ManualForm />}
          {tab === "history" && <History />}
        </div>
      </main>
    </div>
  )
}
