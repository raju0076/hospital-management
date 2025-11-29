"use client";
import Link from "next/link";

export default function PharmacyDashboard() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Pharmacy Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <Link href="/dashboard/hospital-admin/pharmacy/inventory"
          className="p-6 bg-white shadow rounded-xl hover:bg-gray-50">
          <p className="text-xl font-medium">Inventory</p>
          <p className="text-gray-500">Manage medicines, stock, expiry</p>
        </Link>

        <Link href="/dashboard/hospital-admin/pharmacy/prescriptions"
          className="p-6 bg-white shadow rounded-xl hover:bg-gray-50">
          <p className="text-xl font-medium">Prescriptions</p>
          <p className="text-gray-500">View & dispense medicines</p>
        </Link>

        <Link href="/dashboard/hospital-admin/pharmacy/add-medicine"
          className="p-6 bg-white shadow rounded-xl hover:bg-gray-50">
          <p className="text-xl font-medium">Add Medicine</p>
          <p className="text-gray-500">Add new medicine to inventory</p>
        </Link>

      </div>
    </div>
  );
}
