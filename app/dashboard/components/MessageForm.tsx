"use client";

import { useState, useEffect } from "react";

export default function MessageForm() {
  const [atm, setAtm] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [atmList, setAtmList] = useState<string[]>([]);
  const [locationList, setLocationList] = useState<string[]>([]);
  const [engineerList, setEngineerList] = useState<string[]>([]);

  // Load saved data from localStorage
  useEffect(() => {
    setAtmList(JSON.parse(localStorage.getItem("atmList") || "[]"));
    setLocationList(JSON.parse(localStorage.getItem("locationList") || "[]"));
    setEngineerList(JSON.parse(localStorage.getItem("engineerList") || "[]"));
  }, []);

  const addATM = (newATM: string) => {
    if (!newATM.trim()) return;
    const updated = [...atmList, newATM.trim()];
    setAtmList(updated);
    localStorage.setItem("atmList", JSON.stringify(updated));
  };

  const addLocation = (newLoc: string) => {
    if (!newLoc.trim()) return;
    const updated = [...locationList, newLoc.trim()];
    setLocationList(updated);
    localStorage.setItem("locationList", JSON.stringify(updated));
  };

  const addEngineer = (newEng: string) => {
    if (!newEng.trim()) return;
    const updated = [...engineerList, newEng.trim()];
    setEngineerList(updated);
    localStorage.setItem("engineerList", JSON.stringify(updated));
  };

  const generateMessage = () => {
    if (!atm || !time || !location || !assignedTo) {
      alert("Please fill all fields!");
      return;
    }

    const msg = `ATM Report:\nATM: ${atm}\nLocation: ${location}\nTime: ${time}\nAssigned to: ${assignedTo}`;
    const saved = localStorage.getItem("sentMessages");
    const messages = saved ? JSON.parse(saved) : [];
    messages.unshift(msg);
    localStorage.setItem("sentMessages", JSON.stringify(messages));
    alert("Message ready! Click Send to WhatsApp.");
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg text-black max-w-xl space-y-4">
      <h2 className="text-xl font-semibold">ATM Report</h2>

      {/* ATM Dropdown */}
      <select className="w-full border px-3 py-2 rounded" value={atm} onChange={(e) => setAtm(e.target.value)}>
        <option value="">-- Select ATM --</option>
        {atmList.map((a) => <option key={a} value={a}>{a}</option>)}
      </select>

      <div className="flex gap-2">
        <input type="text" id="newATM" placeholder="Add new ATM" className="border px-2 py-1 flex-1 rounded"/>
        <button
          className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
          onClick={() => {
            const input = document.getElementById("newATM") as HTMLInputElement;
            if (input.value.trim()) { addATM(input.value); input.value = ""; }
          }}
        >Add</button>
      </div>

      {/* Location Dropdown */}
      <select className="w-full border px-3 py-2 rounded" value={location} onChange={(e) => setLocation(e.target.value)}>
        <option value="">-- Select Location --</option>
        {locationList.map((l) => <option key={l} value={l}>{l}</option>)}
      </select>

      <div className="flex gap-2">
        <input type="text" id="newLoc" placeholder="Add new Location" className="border px-2 py-1 flex-1 rounded"/>
        <button
          className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
          onClick={() => {
            const input = document.getElementById("newLoc") as HTMLInputElement;
            if (input.value.trim()) { addLocation(input.value); input.value = ""; }
          }}
        >Add</button>
      </div>

      {/* Time */}
      <input type="time" className="w-full border px-3 py-2 rounded" value={time} onChange={(e) => setTime(e.target.value)} />

      {/* Engineer Dropdown */}
      <select className="w-full border px-3 py-2 rounded" value={assignedTo} onChange={(e) => setAssignedTo(e.target.value)}>
        <option value="">-- Assign Engineer --</option>
        {engineerList.map((eng) => <option key={eng} value={eng}>{eng}</option>)}
      </select>

      <div className="flex gap-2">
        <input type="text" id="newEngATM" placeholder="Add new Engineer" className="border px-2 py-1 flex-1 rounded"/>
        <button
          className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
          onClick={() => {
            const input = document.getElementById("newEngATM") as HTMLInputElement;
            if (input.value.trim()) { addEngineer(input.value); input.value = ""; }
          }}
        >Add</button>
      </div>

      <button
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full"
        onClick={generateMessage}
      >Generate Message</button>

      {atm && time && location && assignedTo && (
        <a
          className="inline-block mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full text-center"
          href={`https://wa.me/?text=${encodeURIComponent(`ATM Report:\nATM: ${atm}\nLocation: ${location}\nTime: ${time}\nAssigned to: ${assignedTo}`)}`}
          target="_blank"
        >
          Send to WhatsApp
        </a>
      )}
    </div>
  );
}