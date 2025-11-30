"use client";
import Link from "next/link";

export default function PatientProfile({ params }) {
  const { id } = params;

  const patient = {
    id,
    name: "Ravi Kumar",
    age: 45,
    gender: "Male",
    type: "OPD",
    bloodGroup: "O+",
    phone: "9876543210",
    address: "Hyderabad",
    vitals: [
      { date: "2024-01-01", bp: "120/80", pulse: 74 },
      { date: "2024-01-07", bp: "118/76", pulse: 72 }
    ],
    prescriptions: [
      { id: "RX001", date: "2024-01-03" },
      { id: "RX002", date: "2024-01-10" }
    ]
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Patient Profile</h1>

      <div className="bg-white shadow rounded-xl p-6 space-y-4">
        <h2 className="text-xl font-semibold">{patient.name}</h2>

        <div className="grid grid-cols-2 gap-4 text-gray-700">
          <p><strong>Patient ID:</strong> {patient.id}</p>
          <p><strong>Age:</strong> {patient.age}</p>
          <p><strong>Gender:</strong> {patient.gender}</p>
          <p><strong>Patient Type:</strong> {patient.type}</p>
          <p><strong>Blood Group:</strong> {patient.bloodGroup}</p>
          <p><strong>Phone:</strong> {patient.phone}</p>
          <p><strong>Address:</strong> {patient.address}</p>
        </div>

        <Link
          href={`/dashboard/doctor/prescriptions/create?patient=${id}`}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          + Create Prescription
        </Link>
      </div>

      <div className="bg-white shadow rounded-xl p-6">
        <h3 className="text-lg font-semibold mb-3">Vitals History</h3>
        <ul className="space-y-2 text-gray-700">
          {patient.vitals.map((v, idx) => (
            <li key={idx}>
              {v.date} — BP: {v.bp}, Pulse: {v.pulse}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white shadow rounded-xl p-6">
        <h3 className="text-lg font-semibold mb-3">Past Prescriptions</h3>
        <ul className="space-y-2">
          {patient.prescriptions.map((p) => (
            <li key={p.id}>
              <Link
                href={`/dashboard/doctor/prescriptions/${p.id}`}
                className="text-blue-600 underline"
              >
                {p.id} — {p.date}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
