"use client";

import { useState } from "react";
import Link from "next/link";

export default function RegisterHospital() {
  const [form, setForm] = useState({
    hospitalName: "",
    licenseNo: "",
    adminEmail: "",
    phone: "",
    contactPerson: "",
    website: "",
    address: "",
    city: "",
    state: "",
    country: ""
  });

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  return (
    <div className="relative min-h-screen flex justify-center items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://png.pngtree.com/thumb_back/fh260/background/20240528/pngtree-background-of-operation-room-in-hospital-health-care-concept-image_15733972.jpg')",
        }}
      />

      <div className="absolute inset-0 bg-black/70" />

      <div className="relative max-w-sm w-full mt-1 p-2 backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl">

        <h1 className="text-xl font-bold text-cyan-400 text-center mb-3">
          Register Your Hospital
        </h1>

        <p className="text-center text-gray-200 text-[11px] mb-3">
          Complete your hospital onboarding to create your tenant space.
        </p>

        <div className="space-y-1.5">

          <input
            className="w-full px-2 py-1.5 rounded-lg bg-white/20 text-white placeholder-gray-300
        border border-white/40 focus:outline-none focus:border-cyan-400 backdrop-blur-md"
            placeholder="Hospital Name"
            onChange={(e) => handleChange('hospitalName', e.target.value)}
          />

          <input
            className="w-full px-2 py-1.5 rounded-lg bg-white/20 text-white placeholder-gray-300
        border border-white/40 focus:outline-none focus:border-cyan-400 backdrop-blur-md"
            placeholder="License Number (must be unique)"
            onChange={(e) => handleChange('licenseNo', e.target.value)}
          />

          <input
            type="email"
            className="w-full px-2 py-1.5 rounded-lg bg-white/20 text-white placeholder-gray-300
        border border-white/40 focus:outline-none focus:border-cyan-400 backdrop-blur-md"
            placeholder="Admin Email"
            onChange={(e) => handleChange('adminEmail', e.target.value)}
          />

          <input
            className="w-full px-2 py-1.5 rounded-lg bg-white/20 text-white placeholder-gray-300
        border border-white/40 focus:outline-none focus:border-cyan-400 backdrop-blur-md"
            placeholder="Phone Number"
            onChange={(e) => handleChange('phone', e.target.value)}
          />

          <input
            className="w-full px-2 py-1.5 rounded-lg bg-white/20 text-white placeholder-gray-300
        border border-white/40 focus:outline-none focus:border-cyan-400 backdrop-blur-md"
            placeholder="Contact Person"
            onChange={(e) => handleChange('contactPerson', e.target.value)}
          />

          <input
            className="w-full px-2 py-1.5 rounded-lg bg-white/20 text-white placeholder-gray-300
        border border-white/40 focus:outline-none focus:border-cyan-400 backdrop-blur-md"
            placeholder="Hospital Website (optional)"
            onChange={(e) => handleChange('website', e.target.value)}
          />

          <textarea
            rows={2}
            className="w-full px-2 py-1.5 rounded-lg bg-white/20 text-white placeholder-gray-300
        border border-white/40 focus:outline-none focus:border-cyan-400 backdrop-blur-md"
            placeholder="Full Address"
            onChange={(e) => handleChange('address', e.target.value)}
          />

          <div className="grid grid-cols-3 gap-2">
            <input
              className="w-full px-2 py-1.5 rounded-lg bg-white/20 text-white placeholder-gray-300
          border border-white/40 focus:outline-none focus:border-cyan-400 backdrop-blur-md"
              placeholder="City"
              onChange={(e) => handleChange('city', e.target.value)}
            />

            <input
              className="w-full px-2 py-1.5 rounded-lg bg-white/20 text-white placeholder-gray-300
          border border-white/40 focus:outline-none focus:border-cyan-400 backdrop-blur-md"
              placeholder="State"
              onChange={(e) => handleChange('state', e.target.value)}
            />

            <input
              className="w-full px-2 py-1.5 rounded-lg bg-white/20 text-white placeholder-gray-300
          border border-white/40 focus:outline-none focus:border-cyan-400 backdrop-blur-md"
              placeholder="Country"
              onChange={(e) => handleChange('country', e.target.value)}
            />
          </div>

          <Link
            href="/auth/verify"
            className="block w-full text-center bg-cyan-500 hover:bg-cyan-400 text-black font-semibold py-1.5 rounded-lg shadow-md transition"
          >
            Continue →
          </Link>

          <p className="text-center text-gray-300 text-[11px] mt-2">
            Already registered?{" "}
            <Link href="/auth/login" className="text-cyan-300 underline">
              Login
            </Link>
          </p>

        </div>
      </div>
    </div>


  );
}
