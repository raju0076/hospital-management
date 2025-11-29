"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DoctorSidebar() {
  const pathname = usePathname();

  const menu = [
    { label: "Dashboard", path: "/dashboard/doctor", icon: "📊" },
    { label: "Patients", path: "/dashboard/doctor/patients", icon: "🧑‍⚕️" },
    { label: "Appointments", path: "/dashboard/doctor/appointments", icon: "📅" },
    { label: "Prescriptions", path: "/dashboard/doctor/prescriptions", icon: "💊" },
    { label: "Records", path: "/dashboard/doctor/records", icon: "📁" },
  ];

  return (
    <div className="w-64 min-h-screen bg-white shadow-xl flex flex-col p-4">
      <h2 className="text-2xl font-bold mb-4 text-green-600">DOCTOR PANEL</h2>

      {menu.map((item) => (
        <Link
          key={item.path}
          href={item.path}
          className={`flex items-center gap-3 px-4 py-2 rounded-lg mb-2 transition-all
            ${pathname === item.path ? "bg-green-600 text-white" : "hover:bg-green-100"}`}
        >
          <span className="text-xl">{item.icon}</span>
          <span>{item.label}</span>
        </Link>
      ))}
    </div>
  );
}

