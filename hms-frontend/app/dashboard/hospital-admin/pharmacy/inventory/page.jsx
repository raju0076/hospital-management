"use client";
import { useState } from "react";

export default function InventoryPage() {
  const [search, setSearch] = useState("");

  const medicines = [
    { id: 1, name: "Paracetamol", stock: 120, expiry: "2025-06-10", price: 20 },
    { id: 2, name: "Cefixime", stock: 40, expiry: "2024-12-05", price: 85 },
    { id: 3, name: "Ibuprofen", stock: 12, expiry: "2024-08-01", price: 15 },
  ];

  return (
    <div className="p-6 space-y-6">

      <h1 className="text-2xl font-semibold">Inventory</h1>

      <div className="flex gap-3">
        <input
          className="px-4 py-2 border rounded-lg w-72"
          placeholder="Search medicine..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <div className="grid grid-cols-5 bg-purple-600 text-white p-3 font-medium">
          <span>Name</span>
          <span>Stock</span>
          <span>Price</span>
          <span>Expiry</span>
          <span>Action</span>
        </div>

        {medicines
          .filter((m) =>
            m.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((med) => (
            <div key={med.id}
              className="grid grid-cols-5 p-3 border-b items-center">
              <span>{med.name}</span>
              <span>{med.stock}</span>
              <span>₹{med.price}</span>
              <span>{med.expiry}</span>
              <button className="px-3 py-1 bg-blue-600 text-white rounded">
                Update
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}
