"use client";

import { useState } from "react";

export default function HospitalProfile() {
  const [form, setForm] = useState({
    hospitalName: "",
    email: "",
    phone: "",
    contactPerson: "",
    website: "",
    address: "",
    city: "",
    state: "",
    country: "",
  });

  const handleChange = (field, value) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  return (
    <div className="p-8">

      <h1 className="text-3xl font-bold text-blue-700 mb-6">Hospital Profile</h1>

      <div className="max-w-3xl mx-auto p-8 rounded-2xl bg-white shadow-xl border border-gray-200">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div>
            <label className="font-semibold text-gray-700 text-sm">Hospital Name</label>
            <input
              className="inputField"
              placeholder="Apollo Health Care"
              onChange={(e) => handleChange("hospitalName", e.target.value)}
            />
          </div>

          <div>
            <label className="font-semibold text-gray-700 text-sm">Admin Email</label>
            <input
              className="inputField"
              type="email"
              placeholder="admin@hospital.com"
              onChange={(e) => handleChange("email", e.target.value)}
            />
          </div>

          <div>
            <label className="font-semibold text-gray-700 text-sm">Phone Number</label>
            <input
              className="inputField"
              placeholder="+91 9876543210"
              onChange={(e) => handleChange("phone", e.target.value)}
            />
          </div>

          <div>
            <label className="font-semibold text-gray-700 text-sm">Contact Person</label>
            <input
              className="inputField"
              placeholder="Dr. John Doe"
              onChange={(e) => handleChange("contactPerson", e.target.value)}
            />
          </div>

          <div className="md:col-span-2">
            <label className="font-semibold text-gray-700 text-sm">Website (optional)</label>
            <input
              className="inputField"
              placeholder="www.apollo.com"
              onChange={(e) => handleChange("website", e.target.value)}
            />
          </div>

          <div className="md:col-span-2">
            <label className="font-semibold text-gray-700 text-sm">Address</label>
            <textarea
              className="inputField"
              rows={3}
              placeholder="Full address of the hospital"
              onChange={(e) => handleChange("address", e.target.value)}
            />
          </div>

          <div>
            <label className="font-semibold text-gray-700 text-sm">City</label>
            <input
              className="inputField"
              onChange={(e) => handleChange("city", e.target.value)}
            />
          </div>

          <div>
            <label className="font-semibold text-gray-700 text-sm">State</label>
            <input
              className="inputField"
              onChange={(e) => handleChange("state", e.target.value)}
            />
          </div>

          <div>
            <label className="font-semibold text-gray-700 text-sm">Country</label>
            <input
              className="inputField"
              onChange={(e) => handleChange("country", e.target.value)}
            />
          </div>
        </div>

        <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold shadow-lg transition">
          Save Changes
        </button>
      </div>
    </div>
  );
}
