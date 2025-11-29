"use client";

import { useState } from "react";

export default function LicenseInfo() {
  const [form, setForm] = useState({
    licenseNumber: "",
    issuedDate: "",
    expiryDate: "",
    registrationAuthority: "",
    status: "ACTIVE"
  });

  const handleChange = (field, value) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  return (
    <div className="p-8">

      <h1 className="text-3xl font-bold text-blue-700 mb-6">License Information</h1>

      <div className="max-w-2xl mx-auto p-8 rounded-2xl bg-white shadow-xl border border-gray-200">

        <div className="space-y-6">

          <div>
            <label className="font-semibold text-gray-700 text-sm">License Number</label>
            <input
              className="inputField"
              placeholder="LIC-98765"
              onChange={(e) => handleChange("licenseNumber", e.target.value)}
            />
          </div>

          <div>
            <label className="font-semibold text-gray-700 text-sm">Issuing Authority</label>
            <input
              className="inputField"
              placeholder="Medical Council of India"
              onChange={(e) => handleChange("registrationAuthority", e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="font-semibold text-gray-700 text-sm">Issued Date</label>
              <input
                type="date"
                className="inputField"
                onChange={(e) => handleChange("issuedDate", e.target.value)}
              />
            </div>

            <div>
              <label className="font-semibold text-gray-700 text-sm">Expiry Date</label>
              <input
                type="date"
                className="inputField"
                onChange={(e) => handleChange("expiryDate", e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="font-semibold text-gray-700 text-sm">License Status</label>
            <select
              className="inputField"
              onChange={(e) => handleChange("status", e.target.value)}
            >
              <option value="ACTIVE">ACTIVE</option>
              <option value="EXPIRED">EXPIRED</option>
              <option value="SUSPENDED">SUSPENDED</option>
            </select>
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold shadow-lg transition">
            Save License Info
          </button>
        </div>
      </div>
    </div>
  );
}
