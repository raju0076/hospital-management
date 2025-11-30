"use client";
import Link from "next/link";
import { useState } from "react";

export default function DoctorPatients() {
  const [search, setSearch] = useState("");

  const dummyPatients = [
    { id: "P001", name: "Ravi Kumar", type: "OPD", dept: "Cardiology" },
    { id: "P002", name: "Sita Devi", type: "IPD", dept: "Neurology" }
  ];

  const filtered = dummyPatients.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">My Patients</h1>

      <input
        placeholder="Search by name / patient ID..."
        className="w-full px-4 py-2 rounded-lg border shadow"
        onChange={(e) => setSearch(e.target.value)}
      />

      <table className="w-full mt-4 border-collapse">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-3">Patient ID</th>
            <th className="p-3">Name</th>
            <th className="p-3">Type</th>
            <th className="p-3">Department</th>
            <th className="p-3">Action</th>
          </tr>
        </thead>

        <tbody>
          {filtered.map((p) => (
            <tr key={p.id} className="border-b">
              <td className="p-3">{p.id}</td>
              <td className="p-3">{p.name}</td>
              <td className="p-3">{p.type}</td>
              <td className="p-3">{p.dept}</td>
              <td className="p-3">
                <Link
                  href={`/dashboard/doctors/patients/${p.id}`}
                  className="text-blue-600 underline"
                >
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
