"use client";
import Link from "next/link";

const appointments = [
  { id: "A001", patient: "Ravi Kumar", time: "10:00 AM", type: "OPD", status: "SCHEDULED" },
  { id: "A002", patient: "Sita Devi", time: "11:30 AM", type: "OPD", status: "CHECKED" }
];

export default function TodayAppointments() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Today's Appointments</h1>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3 text-sm">ID</th>
              <th className="p-3 text-sm">Patient</th>
              <th className="p-3 text-sm">Time</th>
              <th className="p-3 text-sm">Type</th>
              <th className="p-3 text-sm">Status</th>
              <th className="p-3 text-sm">Action</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map(a => (
              <tr key={a.id} className="border-b">
                <td className="p-3 text-sm">{a.id}</td>
                <td className="p-3 text-sm">{a.patient}</td>
                <td className="p-3 text-sm">{a.time}</td>
                <td className="p-3 text-sm">{a.type}</td>
                <td className="p-3 text-sm">{a.status}</td>
                <td className="p-3 text-sm">
                  <Link
                    href={`/dashboard/doctors/appointments/${a.id}`}
                    className="text-blue-600 underline"
                  >
                    Open
                  </Link>
                </td>
              </tr>
            ))}

            {appointments.length === 0 && (
              <tr>
                <td className="p-3 text-sm text-gray-500" colSpan={6}>
                  No appointments for today.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
