"use client";

import { useState } from "react";
import Link from "next/link";

const allAppointments = [
  { id: "A001", patient: "Ravi Kumar", date: "Today", time: "10:00 AM", type: "OPD", status: "SCHEDULED", notes: "Fever, headache" },
  { id: "A002", patient: "Sita Devi", date: "Today", time: "11:30 AM", type: "OPD", status: "CHECKED", notes: "Diabetes follow-up" },
  { id: "A003", patient: "John Doe", date: "2024-02-20", time: "04:00 PM", type: "IPD", status: "SCHEDULED", notes: "Post-op review" },
  { id: "A004", patient: "Anjali", date: "2024-02-21", time: "05:30 PM", type: "OPD", status: "SCHEDULED", notes: "Migraine evaluation" }
];

export default function AppointmentDetails({ params }) {
  const { id } = params;
  const appt = allAppointments.find(a => a.id === id);

  const [status, setStatus] = useState(appt?.status || "SCHEDULED");
  const [consultationNotes, setConsultationNotes] = useState("");

  if (!appt) {
    return (
      <div className="p-6">
        <p className="text-red-500">Appointment not found.</p>
        <Link href="/dashboard/doctors/appointments" className="text-blue-600 underline">
          Back to appointments
        </Link>
      </div>
    );
  }

  const handleStatusUpdate = () => {
    console.log("Updated status:", status);
    console.log("Consultation notes:", consultationNotes);
    alert("Status and notes updated (dummy, frontend only).");
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Appointment Details</h1>

      <div className="bg-white rounded-xl shadow p-6 space-y-4">
        <div className="grid grid-cols-2 gap-4 text-gray-700">
          <p><strong>Appointment ID:</strong> {appt.id}</p>
          <p><strong>Patient:</strong> {appt.patient}</p>
          <p><strong>Date:</strong> {appt.date}</p>
          <p><strong>Time:</strong> {appt.time}</p>
          <p><strong>Type:</strong> {appt.type}</p>
          <p><strong>Current Status:</strong> {status}</p>
        </div>

        <div className="space-y-2">
          <p className="text-sm text-gray-500">Reason / Previous Notes</p>
          <p className="text-gray-800">{appt.notes}</p>
        </div>

        <div className="space-y-3">
          <label className="block text-sm font-medium text-gray-700">Update Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-60 px-3 py-2 border rounded-lg"
          >
            <option value="SCHEDULED">SCHEDULED</option>
            <option value="CHECKED">CHECKED</option>
            <option value="COMPLETED">COMPLETED</option>
            <option value="CANCELLED">CANCELLED</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Consultation Notes</label>
          <textarea
            rows={4}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="Enter clinical notes, diagnosis, treatment summary..."
            value={consultationNotes}
            onChange={(e) => setConsultationNotes(e.target.value)}
          />
        </div>

        <div className="flex gap-3">
          <button
            onClick={handleStatusUpdate}
            className="px-5 py-2 bg-blue-600 text-white rounded-lg"
          >
            Save Changes
          </button>

          <Link
            href={`/dashboard/doctors/patients/P001`}
            className="px-5 py-2 border rounded-lg text-sm text-gray-700"
          >
            View Patient Profile
          </Link>
        </div>
      </div>
    </div>
  );
}
