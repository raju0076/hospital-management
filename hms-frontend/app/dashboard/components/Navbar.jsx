"use client";
import Image from "next/image";

export default function Navbar() {
  return (
   
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-blue-700 flex items-center gap-2">
              <Image src="/icons/admin.png" width={32} height={32} alt="admin" />
              ADMIN
            </h1>
    
            <div className="flex items-center gap-3">
              <p className="font-medium">Opubor Tony</p>
              <button className="bg-blue-600 text-white px-4 py-1 rounded-lg shadow hover:bg-blue-700">
                Logout
              </button>
            </div>
          </div>
  );
}
