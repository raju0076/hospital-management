"use client";
import Link from "next/link";

export default function OPDPatients() {
  const patients = [
    { id: "P001", name: "Ravi Kumar", dept: "Cardiology" }
  ];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl text-black font-bold">OPD Patients</h1>

      <table className="w-full border-collapse mt-4">
        <thead>
          <tr className="bg-gray-100  text-[#3c3c3c] text-left">
            <th className="p-3">ID</th>
            <th className="p-3">Name</th>
            <th className="p-3">Department</th>
            <th className="p-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((p) => (
            <tr key={p.id} className="border-b">
              <td className="p-3">{p.id}</td>
              <td className="p-3">{p.name}</td>
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
