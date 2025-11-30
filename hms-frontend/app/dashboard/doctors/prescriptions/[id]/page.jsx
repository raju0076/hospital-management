"use client";

import Link from "next/link";

const prescription = {
  id: "RX-001",
  patient: "Ravi Kumar",
  date: "2024-02-10",
  items: [
    {
      name: "Paracetamol",
      dosage: "500mg",
      frequency: "2 times/day",
      duration: "3 days",
      notes: "After food"
    },
    {
      name: "Azithromycin",
      dosage: "250mg",
      frequency: "1 time/day",
      duration: "5 days",
      notes: "Before breakfast"
    }
  ]
};

export default function PrescriptionDetail() {
  const rx = prescription;

  return (
    <div className="p-6 space-y-6">
      <Link href="/dashboard/doctors/prescriptions" className="text-blue-600 underline">
        ← Back
      </Link>

      <h1 className="text-2xl font-bold">Prescription Details</h1>

      <div className="bg-white rounded-xl shadow p-6 space-y-4">
        <div className="grid grid-cols-2 gap-4 text-gray-700 text-sm">
          <p><strong>ID:</strong> {rx.id}</p>
          <p><strong>Patient:</strong> {rx.patient}</p>
          <p><strong>Date:</strong> {rx.date}</p>
          <p><strong>Total Medicines:</strong> {rx.items.length}</p>
        </div>

        <h2 className="text-lg font-semibold mt-4">Medicines</h2>

        <div className="space-y-4">
          {rx.items.map((med, index) => (
            <div key={index} className="border p-4 rounded-xl bg-gray-50">
              <p><strong>Name:</strong> {med.name}</p>
              <p><strong>Dosage:</strong> {med.dosage}</p>
              <p><strong>Frequency:</strong> {med.frequency}</p>
              <p><strong>Duration:</strong> {med.duration}</p>
              <p><strong>Instructions:</strong> {med.notes}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
