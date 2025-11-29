"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar({ user }) {
  const pathname = usePathname();

  const menu = [
    { label: "Dashboard", icon: "📊", path: "/dashboard", permission: "DASHBOARD:VIEW" },
    { label: "Departments", icon: "🏥", path: "/dashboard/hospital-admin/departments", permission: "DEPARTMENT:MANAGE" },
    { label: "Users", icon: "👥", path: "/dashboard/hospital-admin/users", permission: "USER:READ" },
    { label: "Create User", icon: "➕", path: "/dashboard/hospital-admin/users/create", permission: "USER:CREATE" },
    { label: "Patients", icon: "🧑‍⚕️", path: "/dashboard/patients", permission: "PATIENT:READ" },
    { label: "Hospital Settings", icon: "⚙️", path: "/dashboard/hospital-admin/hospital-settings", permission: "SETTINGS:MANAGE" },
  ];

  return (
    <div className="w-64 min-h-screen h-full bg-white shadow-lg p-4 flex flex-col gap-2 overflow-y-auto">
      <h2 className="text-xl font-bold mb-3">ADMIN</h2>

      {menu.map((item) =>
        user.permissions.includes(item.permission) ? (
          <Link
            key={item.path}
            href={item.path}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer transition
              ${pathname === item.path ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-900 hover:bg-blue-100"}`}
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ) : null
      )}
    </div>
  );
}
