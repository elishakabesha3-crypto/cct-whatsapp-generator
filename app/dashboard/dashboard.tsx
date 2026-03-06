import { useState } from "react";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("atm");

  // Report states
  const [atmReports, setAtmReports] = useState([]);
  const [itReports, setItReports] = useState([]);
  const [firstLineReports, setFirstLineReports] = useState([]);
  const [manualReports, setManualReports] = useState([]);

  // Form states
  const [atmForm, setAtmForm] = useState({ atmName: "", location: "", engineer: "", timeDown: "", fault: "" });
  const [itForm, setItForm] = useState({ reportedBy: "", system: "", issue: "", engineer: "", time: "" });
  const [firstLineForm, setFirstLineForm] = useState({ callerName: "", issue: "", team: "", time: "" });
  const [manualForm, setManualForm] = useState({ title: "", description: "", assignedTo: "", time: "" });

  // Handle form submissions
  const handleSubmit = (type) => {
    switch (type) {
      case "atm":
        setAtmReports([...atmReports, atmForm]);
        setAtmForm({ atmName: "", location: "", engineer: "", timeDown: "", fault: "" });
        break;
      case "it":
        setItReports([...itReports, itForm]);
        setItForm({ reportedBy: "", system: "", issue: "", engineer: "", time: "" });
        break;
      case "firstLine":
        setFirstLineReports([...firstLineReports, firstLineForm]);
        setFirstLineForm({ callerName: "", issue: "", team: "", time: "" });
        break;
      case "manual":
        setManualReports([...manualReports, manualForm]);
        setManualForm({ title: "", description: "", assignedTo: "", time: "" });
        break;
    }
  };

  // Generate WhatsApp message
  const generateWhatsAppMessage = (type = "individual") => {
    let message = "CCT Reports Summary:\n\n";

    const includeReports = (reports, label) => {
      if (reports.length > 0) {
        message += `${label}:\n`;
        reports.forEach((r, i) => {
          message += `${i + 1}. `;
          for (const key in r) {
            message += `${key.replace(/([A-Z])/g, " $1")}: ${r[key]} | `;
          }
          message = message.slice(0, -3); // remove last separator
          message += "\n";
        });
        message += "\n";
      }
    };

    if (type === "individual") {
      switch (activeTab) {
        case "atm":
          includeReports(atmReports, "ATM Down Reports");
          break;
        case "it":
          includeReports(itReports, "IT Issues");
          break;
        case "firstLine":
          includeReports(firstLineReports, "First Line Calls");
          break;
        case "manual":
          includeReports(manualReports, "Manual Reports");
          break;
      }
    } else if (type === "combined") {
      includeReports(atmReports, "ATM Down Reports");
      includeReports(itReports, "IT Issues");
      includeReports(firstLineReports, "First Line Calls");
      includeReports(manualReports, "Manual Reports");
    }

    if (message === "CCT Reports Summary:\n\n") {
      alert("No reports to send!");
      return;
    }

    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  // Form renderers
  const renderForm = () => {
    switch (activeTab) {
      case "atm":
        return (
          <form className="space-y-3" onSubmit={(e) => { e.preventDefault(); handleSubmit("atm"); }}>
            <input type="text" placeholder="ATM Name" value={atmForm.atmName} onChange={(e) => setAtmForm({ ...atmForm, atmName: e.target.value })} className="w-full p-2 border rounded" required />
            <input type="text" placeholder="Location" value={atmForm.location} onChange={(e) => setAtmForm({ ...atmForm, location: e.target.value })} className="w-full p-2 border rounded" required />
            <input type="text" placeholder="Engineer" value={atmForm.engineer} onChange={(e) => setAtmForm({ ...atmForm, engineer: e.target.value })} className="w-full p-2 border rounded" required />
            <input type="datetime-local" value={atmForm.timeDown} onChange={(e) => setAtmForm({ ...atmForm, timeDown: e.target.value })} className="w-full p-2 border rounded" required />
            <textarea placeholder="Fault Description" value={atmForm.fault} onChange={(e) => setAtmForm({ ...atmForm, fault: e.target.value })} className="w-full p-2 border rounded" required />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add Report</button>
          </form>
        );
      case "it":
        return (
          <form className="space-y-3" onSubmit={(e) => { e.preventDefault(); handleSubmit("it"); }}>
            <input type="text" placeholder="Reported By" value={itForm.reportedBy} onChange={(e) => setItForm({ ...itForm, reportedBy: e.target.value })} className="w-full p-2 border rounded" required />
            <input type="text" placeholder="System" value={itForm.system} onChange={(e) => setItForm({ ...itForm, system: e.target.value })} className="w-full p-2 border rounded" required />
            <input type="text" placeholder="Issue" value={itForm.issue} onChange={(e) => setItForm({ ...itForm, issue: e.target.value })} className="w-full p-2 border rounded" required />
            <input type="text" placeholder="Assigned Engineer" value={itForm.engineer} onChange={(e) => setItForm({ ...itForm, engineer: e.target.value })} className="w-full p-2 border rounded" required />
            <input type="datetime-local" value={itForm.time} onChange={(e) => setItForm({ ...itForm, time: e.target.value })} className="w-full p-2 border rounded" required />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add Report</button>
          </form>
        );
      case "firstLine":
        return (
          <form className="space-y-3" onSubmit={(e) => { e.preventDefault(); handleSubmit("firstLine"); }}>
            <input type="text" placeholder="Caller Name" value={firstLineForm.callerName} onChange={(e) => setFirstLineForm({ ...firstLineForm, callerName: e.target.value })} className="w-full p-2 border rounded" required />
            <input type="text" placeholder="Issue" value={firstLineForm.issue} onChange={(e) => setFirstLineForm({ ...firstLineForm, issue: e.target.value })} className="w-full p-2 border rounded" required />
            <input type="text" placeholder="Assigned Team" value={firstLineForm.team} onChange={(e) => setFirstLineForm({ ...firstLineForm, team: e.target.value })} className="w-full p-2 border rounded" required />
            <input type="datetime-local" value={firstLineForm.time} onChange={(e) => setFirstLineForm({ ...firstLineForm, time: e.target.value })} className="w-full p-2 border rounded" required />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add Report</button>
          </form>
        );
      case "manual":
        return (
          <form className="space-y-3" onSubmit={(e) => { e.preventDefault(); handleSubmit("manual"); }}>
            <input type="text" placeholder="Title" value={manualForm.title} onChange={(e) => setManualForm({ ...manualForm, title: e.target.value })} className="w-full p-2 border rounded" required />
            <textarea placeholder="Description" value={manualForm.description} onChange={(e) => setManualForm({ ...manualForm, description: e.target.value })} className="w-full p-2 border rounded" required />
            <input type="text" placeholder="Assigned To" value={manualForm.assignedTo} onChange={(e) => setManualForm({ ...manualForm, assignedTo: e.target.value })} className="w-full p-2 border rounded" required />
            <input type="datetime-local" value={manualForm.time} onChange={(e) => setManualForm({ ...manualForm, time: e.target.value })} className="w-full p-2 border rounded" required />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add Report</button>
          </form>
        );
    }
  };

  const renderReportTable = () => {
    const reportsMap = {
      atm: atmReports,
      it: itReports,
      firstLine: firstLineReports,
      manual: manualReports,
    };
    const reports = reportsMap[activeTab];
    if (reports.length === 0) return <p>No reports added yet.</p>;
    return (
      <div className="mt-4 overflow-x-auto">
        <table className="table-auto w-full border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              {Object.keys(reports[0]).map((key) => (
                <th key={key} className="border px-2 py-1">{key.replace(/([A-Z])/g, " $1")}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {reports.map((r, i) => (
              <tr key={i} className="text-center">
                {Object.keys(r).map((key) => (
                  <td key={key} className="border px-2 py-1">{r[key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">CCT Dashboard</h1>

      {/* Tabs */}
      <div className="flex space-x-4 mb-6 flex-wrap">
        {["atm", "it", "firstLine", "manual"].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 rounded mb-2 ${activeTab === tab ? "bg-blue-500 text-white" : "bg-white border"}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab === "atm" ? "ATM Down" : tab === "it" ? "IT Issues" : tab === "firstLine" ? "First Line" : "Manual Reports"}
          </button>
        ))}
      </div>

      {/* Form */}
      <div className="bg-white p-6 rounded shadow mb-6">
        {renderForm()}

        {["atm", "it", "firstLine", "manual"].includes(activeTab) && (
          <div className="mt-4 flex space-x-4">
            <button onClick={() => generateWhatsAppMessage("individual")} className="bg-green-500 text-white px-4 py-2 rounded">Send Individual Report</button>
            <button onClick={() => generateWhatsAppMessage("combined")} className="bg-purple-500 text-white px-4 py-2 rounded">Send Combined Reports</button>
          </div>
        )}
      </div>

      {/* Report Table */}
      <div className="bg-white p-6 rounded shadow">
        <h2 className="font-bold mb-2">Reports Added</h2>
        {renderReportTable()}
      </div>
    </div>
  );
}
