"use client";
import Link from "next/link";

export default function IPDPatients() {
  const patients = [
    { id: "P002", name: "Sita Devi", ward: "Ward 5", bed: "Bed 12" }
  ];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl text-black font-bold">IPD Patients</h1>

      <table className="w-full border-collapse mt-4">
        <thead>
          <tr className="bg-gray-100 text-left text-[#3c3c3c]">
            <th className="p-3">ID</th>
            <th className="p-3">Name</th>
            <th className="p-3">Ward</th>
            <th className="p-3">Bed</th>
            <th className="p-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((p) => (
            <tr key={p.id} className="border-b">
              <td className="p-3">{p.id}</td>
              <td className="p-3">{p.name}</td>
              <td className="p-3">{p.ward}</td>
              <td className="p-3">{p.bed}</td>
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
