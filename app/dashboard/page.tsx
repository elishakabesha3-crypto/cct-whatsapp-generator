"use client"

import { useState } from "react"
import BatchIssueForm from "./components/BatchIssueForm"
import ManualForm from "./components/ManualForm"
import History from "./components/History"

interface NavItem {
  id: string
  label: string
  icon: string
  description: string
}

const navItems: NavItem[] = [
  {
    id: "batch",
    label: "Daily Report",
    icon: "📋",
    description: "Build organized batch messages",
  },
  {
    id: "manual",
    label: "Quick Message",
    icon: "⚡",
    description: "Send urgent single messages",
  },
  {
    id: "history",
    label: "History",
    icon: "📜",
    description: "View sent messages",
  },
]

export default function DashboardPage() {
  const [tab, setTab] = useState<string>("batch")

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000" />
      </div>

      {/* Header */}
      <header className="relative border-b border-slate-800/50 backdrop-blur-xl bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between mb-6">
            <div className="fade-in">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-blue-300 to-emerald-400 bg-clip-text text-transparent">
                CCT Daily Issues Report
              </h1>
              <p className="text-slate-400 mt-2">Organize and send structured issue reports to WhatsApp</p>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-xs font-medium">
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-300">Live</span>
              </div>
            </div>
          </div>

          {/* Tab Navigation */}
          <nav className="flex gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setTab(item.id)}
                className={`group relative px-5 py-3 rounded-lg transition-all duration-300 font-medium ${
                  tab === item.id
                    ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-xl shadow-blue-500/20"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.label}</span>
                </span>
                {tab === item.id && (
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 opacity-0 group-hover:opacity-10 transition-opacity" />
                )}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative max-w-6xl mx-auto px-6 py-12">
        <div className="slide-in">
          {tab === "batch" && (
            <div className="glass rounded-2xl p-8 border border-slate-700/50">
              <BatchIssueForm />
            </div>
          )}
          {tab === "manual" && (
            <div className="glass rounded-2xl p-8 border border-slate-700/50">
              <ManualForm />
            </div>
          )}
          {tab === "history" && (
            <div className="glass rounded-2xl p-8 border border-slate-700/50">
              <History />
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative border-t border-slate-800/50 mt-20 py-6 text-center text-slate-500 text-sm">
        <p>CCT Message Generator &bull; Built for seamless team communication</p>
      </footer>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .fade-in {
          animation: fadeIn 0.5s ease-out;
        }

        .slide-in {
          animation: slideIn 0.4s ease-out;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  )
}
