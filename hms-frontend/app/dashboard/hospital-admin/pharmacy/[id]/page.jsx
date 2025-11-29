"use client";
import { useState } from "react";

export default function PrescriptionDetails() {
  const [qty, setQty] = useState(0);

  const prescription = {
    rx: "RX-001",
    patient: "John Doe",
    doctor: "Dr. Smith",
    medicines: [
      { name: "Paracetamol 500mg", duration: "5 days", frequency: "2 times" },
      { name: "Cefixime 200mg", duration: "3 days", frequency: "2 times" },
    ],
  };

  return (
    <div className="p-6 space-y-6">

      <h1 className="text-2xl font-semibold">
        Prescription: {prescription.rx}
      </h1>

      <div className="bg-white p-6 rounded-xl shadow space-y-5">

        {prescription.medicines.map((m, i) => (
          <div key={i} className="border-b pb-4">
            <p className="font-semibold">{m.name}</p>
            <p className="text-sm text-gray-500">{m.frequency} • {m.duration}</p>

            <input
              type="number"
              min="0"
              className="mt-2 px-3 py-2 border rounded-lg w-32"
              placeholder="Qty"
              onChange={(e) => setQty(e.target.value)}
            />
          </div>
        ))}

        <button className="w-full py-3 bg-green-600 text-white rounded-xl text-lg">
          Dispense Medicine
        </button>
      </div>

    </div>
  );
}
