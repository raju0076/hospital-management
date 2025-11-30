"use client";

export default function DoctorDashboard() {
  const items = [
    { label: "Patients", count: 7, color: "bg-indigo-100 text-indigo-700" },
    { label: "Queue", count: 3, color: "bg-emerald-100 text-emerald-700" },
    { label: "Prescriptions", count: 3, color: "bg-orange-100 text-orange-700" },
    { label: "Appointments", count: 1, color: "bg-cyan-100 text-cyan-700" },
    { label: "Operation", count: 3, color: "bg-red-100 text-red-700" },
    { label: "Birth Report", count: 2, color: "bg-purple-100 text-purple-700" },
    { label: "Death Report", count: 9, color: "bg-gray-200 text-gray-800" },
  ];

  return (
    <div className="p-6 space-y-6">

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((item, i) => (
          <div
            key={i}
            className={`border rounded-xl p-4 bg-white shadow-sm hover:shadow-md transition flex flex-col`}
          >
            <div
              className={`w-12 h-12 rounded-lg flex items-center justify-center font-bold text-lg ${item.color}`}
            >
              {item.count}
            </div>

            <p className="mt-3 text-sm font-semibold text-black">
              {item.label}
            </p>
          </div>
        ))}
      </div>

      {/* Calendar placeholder */}
      <div className="bg-white shadow rounded-xl p-6">
        <h2 className="text-xl font-bold mb-4 text-black">Calendar</h2>
        <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500">
          Calendar UI Placeholder
        </div>
      </div>

    </div>
  );
}
