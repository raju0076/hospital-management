"use client";

import { useState } from "react";
import { TextField, Button } from "@mui/material";

const dummyBirthReports = [
  {
    id: "BR-001",
    babyName: "Baby A",
    gender: "Female",
    motherName: "Lakshmi",
    doctor: "Dr. Anitha",
    date: "2025-01-12",
    weight: "3.2 kg"
  },
  {
    id: "BR-002",
    babyName: "Baby B",
    gender: "Male",
    motherName: "Sujatha",
    doctor: "Dr. Manoj",
    date: "2025-02-03",
    weight: "2.9 kg"
  }
];

export default function BirthReportPage() {
  const [search, setSearch] = useState("");

  const filtered = dummyBirthReports.filter((r) =>
    r.babyName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold text-blue-700 mb-4">Birth Reports</h1>

      <div className="flex items-center gap-2 mb-5">
        <TextField
          placeholder="Search by Baby Name"
          size="small"
          sx={{ width: "300px", background: "white" }}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button variant="contained">Search</Button>
      </div>

      <div className="border rounded-xl shadow bg-white overflow-hidden">
        <div className="grid grid-cols-6 bg-green-700 text-white font-semibold py-3 px-4">
          <span>ID</span>
          <span>Baby Name</span>
          <span>Gender</span>
          <span>Mother</span>
          <span>Doctor</span>
          <span>Date</span>
        </div>

        {filtered.map((r, idx) => (
          <div
            key={idx}
            className="grid grid-cols-6 border-b py-3 px-4 items-center"
          >
            <span>{r.id}</span>
            <span>{r.babyName}</span>
            <span>{r.gender}</span>
            <span>{r.motherName}</span>
            <span>{r.doctor}</span>
            <span>{r.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
