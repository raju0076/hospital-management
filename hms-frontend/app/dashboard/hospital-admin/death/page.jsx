"use client";

import { useState } from "react";
import { TextField, Button } from "@mui/material";

const dummyDeathReports = [
  {
    id: "DR-001",
    patient: "Ravi Prasad",
    age: 68,
    doctor: "Dr. Ramesh",
    date: "2025-01-10",
    reason: "Cardiac Arrest"
  },
  {
    id: "DR-002",
    patient: "Kiran Devi",
    age: 55,
    doctor: "Dr. Joseph",
    date: "2025-02-05",
    reason: "Stroke"
  }
];

export default function DeathReportPage() {
  const [search, setSearch] = useState("");

  const filtered = dummyDeathReports.filter((r) =>
    r.patient.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold text-red-700 mb-4">Death Reports</h1>

      <div className="flex items-center gap-2 mb-5">
        <TextField
          placeholder="Search by Patient Name"
          size="small"
          sx={{ width: "300px", background: "white" }}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button variant="contained" color="error">Search</Button>
      </div>

      <div className="border rounded-xl shadow bg-white overflow-hidden">
        <div className="grid grid-cols-6 bg-red-700 text-white font-semibold py-3 px-4">
          <span>ID</span>
          <span>Patient</span>
          <span>Age</span>
          <span>Doctor</span>
          <span>Date</span>
          <span>Reason</span>
        </div>

        {filtered.map((r, idx) => (
          <div
            key={idx}
            className="grid grid-cols-6 border-b py-3 px-4 items-center"
          >
            <span>{r.id}</span>
            <span>{r.patient}</span>
            <span>{r.age}</span>
            <span>{r.doctor}</span>
            <span>{r.date}</span>
            <span>{r.reason}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
