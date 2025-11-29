"use client";

import Image from "next/image";

export default function Navbar() {
  return (
    <div className="w-full bg-gradient-to-r from-blue-600 to-indigo-600  px-6 py-3  flex items-center justify-between">

      <div className="flex items-center gap-3">
        <img
          src="https://img.freepik.com/premium-vector/abstract-wings-cross-healthcare-icon_1034893-5577.jpg?semt=ais_hybrid&w=740&q=80"
          width={40}
          height={40}
          alt="logo"
          className="rounded-full"
        />
        <h1 className="text-xl text-[white] font-bold  tracking-wide">HMS</h1>
      </div>

      <div className="flex items-center gap-5">
        <div className="text-right">
          <p className="font-semibold text-gray-800">Opubor Tony</p>
          <p className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-md inline-block">
            Hospital Admin
          </p>
        </div>

       

        <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm shadow-md transition">
          Logout
        </button>
      </div>

    </div>
  );
}
