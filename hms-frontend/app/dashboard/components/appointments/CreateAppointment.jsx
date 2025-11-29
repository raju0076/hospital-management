"use client";

import { useState } from "react";
import { TextField, MenuItem, Button } from "@mui/material";

export default function CreateAppointment() {
  const [form, setForm] = useState({
    patient: "",
    doctor: "",
    date: "",
    time: "",
    type: "",
    reason: "",
  });

  const handleChange = (field, value) =>
    setForm({ ...form, [field]: value });

  return (
    <div className="max-w-3xl bg-[#eef2ff] border border-blue-200 shadow-lg rounded-xl p-8 mx-auto">

      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Schedule Appointment
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <TextField
          label="Patient Name"
          fullWidth
          value={form.patient}
          onChange={(e) => handleChange("patient", e.target.value)}
        />

        <TextField
          label="Doctor"
          select
          fullWidth
          value={form.doctor}
          onChange={(e) => handleChange("doctor", e.target.value)}
        >
          <MenuItem value="Dr. Ramesh">Dr. Ramesh</MenuItem>
          <MenuItem value="Dr. Anitha">Dr. Anitha</MenuItem>
          <MenuItem value="Dr. Manoj">Dr. Manoj</MenuItem>
        </TextField>

        <TextField
          label="Date"
          type="date"
          InputLabelProps={{ shrink: true }}
          fullWidth
          onChange={(e) => handleChange("date", e.target.value)}
        />

        <TextField
          label="Time"
          type="time"
          InputLabelProps={{ shrink: true }}
          fullWidth
          onChange={(e) => handleChange("time", e.target.value)}
        />

        <TextField
          label="Type"
          select
          fullWidth
          value={form.type}
          onChange={(e) => handleChange("type", e.target.value)}
        >
          <MenuItem value="OPD">OPD</MenuItem>
          <MenuItem value="IPD">IPD</MenuItem>
          <MenuItem value="EMERGENCY">EMERGENCY</MenuItem>
        </TextField>

        <TextField
          label="Reason"
          fullWidth
          onChange={(e) => handleChange("reason", e.target.value)}
        />
      </div>

      <Button
        variant="contained"
        sx={{ marginTop: 4, backgroundColor: "#4338ca", paddingX: 4 }}
      >
        Create Appointment
      </Button>
    </div>
  );
}
