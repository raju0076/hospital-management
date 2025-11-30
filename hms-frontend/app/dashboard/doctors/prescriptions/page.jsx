"use client";

import Link from "next/link";

const prescriptions = [
  {
    id: "RX-001",
    patient: "Ravi Kumar",
    date: "2024-02-10",
    items: 3,
    status: "ISSUED"
  },
  {
    id: "RX-002",
    patient: "Sita Devi",
    date: "2024-02-11",
    items: 2,
    status: "DISPENSED"
  }
];

export default function PrescriptionsList() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Prescriptions</h1>

        <Link
          href="/dashboard/doctors/prescriptions/create"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          + Create Prescription
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left text-sm">
              <th className="p-3">ID</th>
              <th className="p-3">Patient</th>
              <th className="p-3">Date</th>
              <th className="p-3">Medicines</th>
              <th className="p-3">Status</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {prescriptions.map((rx) => (
              <tr key={rx.id} className="border-b text-sm">
                <td className="p-3">{rx.id}</td>
                <td className="p-3">{rx.patient}</td>
                <td className="p-3">{rx.date}</td>
                <td className="p-3">{rx.items}</td>
                <td className="p-3">{rx.status}</td>
                <td className="p-3">
                  <Link
                    href={`/dashboard/doctors/prescriptions/${rx.id}`}
                    className="text-blue-600 underline"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}

            {prescriptions.length === 0 && (
              <tr>
                <td colSpan={7} className="text-center p-4 text-gray-500">
                  No prescriptions found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
