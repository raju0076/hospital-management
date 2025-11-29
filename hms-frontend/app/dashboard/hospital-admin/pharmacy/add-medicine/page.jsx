"use client";

import { useState } from "react";

export default function AddMedicine() {
  const [form, setForm] = useState({
    name: "",
    category: "",
    stock: "",
    price: "",
    expiry: "",
    manufacturer: "",
  });

  return (
    <div className="p-6 max-w-3xl space-y-6">

      <h1 className="text-2xl font-semibold">Add Medicine</h1>

      <div className="bg-white p-6 rounded-xl shadow space-y-4">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <input className="inputField" placeholder="Medicine Name"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input className="inputField" placeholder="Category"
            onChange={(e) => setForm({ ...form, category: e.target.value })}
          />

          <input className="inputField" placeholder="Stock Quantity"
            onChange={(e) => setForm({ ...form, stock: e.target.value })}
          />

          <input className="inputField" placeholder="Price (₹)"
            onChange={(e) => setForm({ ...form, price: e.target.value })}
          />

          <input className="inputField" type="date" placeholder="Expiry Date"
            onChange={(e) => setForm({ ...form, expiry: e.target.value })}
          />

          <input className="inputField" placeholder="Manufacturer"
            onChange={(e) => setForm({ ...form, manufacturer: e.target.value })}
          />

        </div>

        <button className="w-full py-3 bg-purple-600 text-white rounded-xl text-lg">
          Add Medicine
        </button>

      </div>

    </div>
  );
}
