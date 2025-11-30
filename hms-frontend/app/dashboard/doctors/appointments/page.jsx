"use client";

import Link from "next/link";

const appointments = [
  { id: "A001", patient: "Ravi Kumar", time: "10:00 AM", type: "OPD", status: "SCHEDULED", dayType: "today" },
  { id: "A002", patient: "Sita Devi", time: "11:30 AM", type: "OPD", status: "CHECKED", dayType: "today" },
  { id: "A003", patient: "John Doe", time: "04:00 PM", type: "IPD", status: "SCHEDULED", dayType: "upcoming" },
  { id: "A004", patient: "Anjali", time: "05:30 PM", type: "OPD", status: "SCHEDULED", dayType: "upcoming" }
];

export default function DoctorAppointmentsDashboard() {
  const todayAppointments = appointments.filter(a => a.dayType === "today");
  const upcomingAppointments = appointments.filter(a => a.dayType === "upcoming");

  const totalToday = todayAppointments.length;
  const totalUpcoming = upcomingAppointments.length;
  const completedToday = todayAppointments.filter(a => a.status === "COMPLETED" || a.status === "CHECKED").length;

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Appointments</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow p-5">
          <p className="text-sm text-gray-500">Today's Appointments</p>
          <p className="text-3xl font-semibold text-blue-600 mt-2">{totalToday}</p>
        </div>

        <div className="bg-white rounded-xl shadow p-5">
          <p className="text-sm text-gray-500">Upcoming Appointments</p>
          <p className="text-3xl font-semibold text-purple-600 mt-2">{totalUpcoming}</p>
        </div>

        <div className="bg-white rounded-xl shadow p-5">
          <p className="text-sm text-gray-500">Completed / Checked Today</p>
          <p className="text-3xl font-semibold text-green-600 mt-2">{completedToday}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow p-5">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-semibold">Today</h2>
            <Link href="/dashboard/doctors/appointments/today" className="text-blue-600 text-sm underline">
              View all
            </Link>
          </div>

          <div className="space-y-2">
            {todayAppointments.map(a => (
              <Link
                key={a.id}
                href={`/dashboard/doctors/appointments/${a.id}`}
                className="flex justify-between items-center border rounded-lg px-3 py-2 hover:bg-gray-50"
              >
                <div>
                  <p className="font-medium">{a.patient}</p>
                  <p className="text-xs text-gray-500">{a.time} • {a.type}</p>
                </div>
                <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-700">
                  {a.status}
                </span>
              </Link>
            ))}
            {todayAppointments.length === 0 && (
              <p className="text-sm text-gray-500">No appointments today.</p>
            )}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-5">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-semibold">Upcoming</h2>
            <Link href="/dashboard/doctors/appointments/upcoming" className="text-blue-600 text-sm underline">
              View all
            </Link>
          </div>

          <div className="space-y-2">
            {upcomingAppointments.map(a => (
              <Link
                key={a.id}
                href={`/dashboard/doctors/appointments/${a.id}`}
                className="flex justify-between items-center border rounded-lg px-3 py-2 hover:bg-gray-50"
              >
                <div>
                  <p className="font-medium">{a.patient}</p>
                  <p className="text-xs text-gray-500">{a.time} • {a.type}</p>
                </div>
                <span className="text-xs px-2 py-1 rounded-full bg-purple-100 text-purple-700">
                  {a.status}
                </span>
              </Link>
            ))}
            {upcomingAppointments.length === 0 && (
              <p className="text-sm text-gray-500">No upcoming appointments.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
