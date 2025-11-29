"use client";

import { useState } from "react";
import { TextField, Button } from "@mui/material";

const dummyAppointments = [
  {
    id: "APT-001",
    patient: "Ravi Kumar",
    doctor: "Dr. Ramesh",
    date: "2025-02-01",
    time: "11:00 AM",
    type: "OPD",
  },
  {
    id: "APT-002",
    patient: "Sita Devi",
    doctor: "Dr. Anitha",
    date: "2025-02-01",
    time: "02:00 PM",
    type: "IPD",
  },
];

export default function AppointmentList() {
  const [search, setSearch] = useState("");

  const filtered = dummyAppointments.filter((i) =>
    i.patient.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="flex items-center gap-2 mb-5">
        <TextField
          placeholder="Search by patient name"
          size="small"
          sx={{ width: "300px", background: "white" }}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button variant="contained">Search</Button>
      </div>

      <div className="border rounded-xl shadow bg-white overflow-hidden">
        <div className="grid grid-cols-5 bg-blue-700 text-white font-semibold py-3 px-4">
          <span>ID</span>
          <span>Patient</span>
          <span>Doctor</span>
          <span>Date</span>
          <span>Type</span>
        </div>

        {filtered.map((a, idx) => (
          <div
            key={idx}
            className="grid grid-cols-5 border-b py-3 px-4 items-center"
          >
            <span>{a.id}</span>
            <span>{a.patient}</span>
            <span>{a.doctor}</span>
            <span>
              {a.date} — {a.time}
            </span>
            <span>{a.type}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
