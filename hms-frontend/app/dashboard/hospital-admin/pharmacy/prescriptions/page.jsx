"use client";
import Link from "next/link";

export default function PrescriptionsPage() {
  const data = [
    { id: 1, rx: "RX-001", patient: "John Doe", doctor: "Dr. Smith", status: "Pending" },
    { id: 2, rx: "RX-002", patient: "Ravi", doctor: "Dr. Amit", status: "Dispensed" },
  ];

  return (
    <div className="p-6 space-y-6">

      <h1 className="text-2xl font-semibold">Prescriptions</h1>

      <div className="bg-white rounded-xl shadow divide-y">
        {data.map((item) => (
          <Link
            key={item.id}
            href={`/dashboard/hospital-admin/pharmacy/prescriptions/${item.id}`}
            className="flex justify-between p-4 hover:bg-gray-50"
          >
            <span>{item.rx}</span>
            <span>{item.patient}</span>
            <span>{item.doctor}</span>
            <span className={item.status === "Pending" ? "text-red-500" : "text-green-600"}>
              {item.status}
            </span>
          </Link>
        ))}
      </div>

    </div>
  );
}
