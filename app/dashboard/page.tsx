"use client"

import { useState } from "react"
import Sidebar from "./components/Sidebar"
import MessageForm from "./components/MessageForm"
import ITIssuesForm from "./components/ITIssuesForm"
import FirstLineCallsForm from "./components/FirstLineCallsForm"
import ManualForm from "./components/ManualForm"
import History from "./components/History"

export default function DashboardPage() {
  const [tab, setTab] = useState("atm")

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar setTab={setTab} />
      
      <main className="flex-1 p-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-gray-800">CCT Message Generator</h1>
          
          {/* Form Content */}
          <div className="mb-8">
            {tab === "atm" && <MessageForm />}
            {tab === "it" && <ITIssuesForm />}
            {tab === "firstline" && <FirstLineCallsForm />}
            {tab === "manual" && <ManualForm />}
            {tab === "history" && <History />}
          </div>

          {/* History Section */}
          {tab !== "history" && (
            <div className="mt-8">
              <History />
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
