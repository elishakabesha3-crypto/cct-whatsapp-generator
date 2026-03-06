import { Dispatch, SetStateAction } from "react";

interface SidebarProps {
  setTab: Dispatch<SetStateAction<string>>;
}

export default function Sidebar({ setTab }: SidebarProps) {
  return (
    <div className="w-64 bg-blue-900 text-white p-6 flex flex-col h-screen">
      <h1 className="text-2xl font-bold mb-10">CCT Dashboard</h1>

      <button
        className="mb-4 bg-yellow-500 text-black py-2 px-4 rounded hover:bg-yellow-400 transition font-medium"
        onClick={() => setTab("atm")}
      >
        🏧 Generate ATM Report
      </button>

      <button
        className="mb-4 bg-orange-500 text-black py-2 px-4 rounded hover:bg-orange-400 transition font-medium"
        onClick={() => setTab("it")}
      >
        🖥️ Report I.T Issue
      </button>

      <button
        className="mb-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition font-medium"
        onClick={() => setTab("firstline")}
      >
        📞 First Line Call
      </button>

      <button
        className="mb-4 bg-yellow-500 text-black py-2 px-4 rounded hover:bg-yellow-400 transition font-medium"
        onClick={() => setTab("manual")}
      >
        ✉️ Manual Message
      </button>

      <button
        className="mt-auto bg-gray-700 py-2 px-4 rounded hover:bg-gray-600 transition"
        onClick={() => setTab("history")}
      >
        Sent History
      </button>
    </div>
  );
}
