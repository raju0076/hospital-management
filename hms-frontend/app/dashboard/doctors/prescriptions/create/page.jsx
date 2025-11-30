"use client";

import { useState } from "react";
import Link from "next/link";

const patients = [
  { id: "P001", name: "Ravi Kumar" },
  { id: "P002", name: "Sita Devi" }
];

export default function CreatePrescription() {
  const [patientId, setPatientId] = useState("");
  const [medicines, setMedicines] = useState([
    { name: "", dosage: "", frequency: "", duration: "", notes: "" }
  ]);

  const addMedicine = () => {
    setMedicines([
      ...medicines,
      { name: "", dosage: "", frequency: "", duration: "", notes: "" }
    ]);
  };

  const updateMedicine = (index, field, value) => {
    const updated = [...medicines];
    updated[index][field] = value;
    setMedicines(updated);
  };

  const removeMedicine = (index) => {
    const updated = medicines.filter((_, i) => i !== index);
    setMedicines(updated);
  };

  const handleSubmit = () => {
    console.log("Prescription Data:", {
      patientId,
      medicines
    });

    alert("Prescription created (dummy only).");
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Create Prescription</h1>

      {/* Patient Select */}
      <div>
        <label className="text-sm font-medium">Select Patient</label>
        <select
          className="w-full border p-3 rounded-lg mt-1"
          value={patientId}
          onChange={(e) => setPatientId(e.target.value)}
        >
          <option value="">-- Choose Patient --</option>
          {patients.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-6">
        {medicines.map((med, index) => (
          <div key={index} className="border p-4 rounded-xl bg-white shadow">
            <div className="flex justify-between items-center mb-2">
              <h2 className="font-semibold">Medicine {index + 1}</h2>

              {medicines.length > 1 && (
                <button
                  className="text-red-500 text-sm underline"
                  onClick={() => removeMedicine(index)}
                >
                  Remove
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                placeholder="Medicine Name"
                className="border p-3 rounded-lg"
                value={med.name}
                onChange={(e) =>
                  updateMedicine(index, "name", e.target.value)
                }
              />

              <input
                placeholder="Dosage (e.g., 500mg)"
                className="border p-3 rounded-lg"
                value={med.dosage}
                onChange={(e) =>
                  updateMedicine(index, "dosage", e.target.value)
                }
              />

              <input
                placeholder="Frequency (e.g., 2 times/day)"
                className="border p-3 rounded-lg"
                value={med.frequency}
                onChange={(e) =>
                  updateMedicine(index, "frequency", e.target.value)
                }
              />

              <input
                placeholder="Duration (e.g., 5 days)"
                className="border p-3 rounded-lg"
                value={med.duration}
                onChange={(e) =>
                  updateMedicine(index, "duration", e.target.value)
                }
              />
            </div>

            <textarea
              placeholder="Special Instructions"
              className="w-full border p-3 rounded-lg mt-3"
              rows={2}
              value={med.notes}
              onChange={(e) =>
                updateMedicine(index, "notes", e.target.value)
              }
            />
          </div>
        ))}

        <button
          onClick={addMedicine}
          className="px-4 py-2 bg-purple-600 text-white rounded-lg"
        >
          + Add Another Medicine
        </button>
      </div>

      <div className="flex gap-3">
        <button
          onClick={handleSubmit}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg"
        >
          Submit Prescription
        </button>

        <Link
          href="/dashboard/doctors/prescriptions"
          className="px-6 py-3 border rounded-lg text-gray-700"
        >
          Cancel
        </Link>
      </div>
    </div>
  );
}
