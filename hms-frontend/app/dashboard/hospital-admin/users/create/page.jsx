"use client";

import { useState } from "react";

export default function CreateUserPage() {
  const [form, setForm] = useState({
    first: "",
    last: "",
    email: "",
    role: "",
    department: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    alert("User created: " + JSON.stringify(form, null, 2));
  };

  return (
    <div>
      <h1>Create User</h1>

      <input name="first" placeholder="First Name" onChange={handleChange} /><br />
      <input name="last" placeholder="Last Name" onChange={handleChange} /><br />
      <input name="email" placeholder="Email" onChange={handleChange} /><br />

      <select name="role" onChange={handleChange}>
        <option>Select Role</option>
        <option value="DOCTOR">Doctor</option>
        <option value="NURSE">Nurse</option>
        <option value="RECEPTIONIST">Receptionist</option>
        <option value="PHARMACIST">Pharmacist</option>
      </select><br />

      <input name="department" placeholder="Department" onChange={handleChange} /><br />

      <button onClick={handleSubmit} style={{ marginTop: 10 }}>
        Create
      </button>
    </div>
  );
}
