"use client";

import { useEffect, useState } from "react";

export default function UserListPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers([
      { name: "Dr. Kumar", role: "DOCTOR", dept: "Cardiology" },
      { name: "Nurse Latha", role: "NURSE", dept: "ICU" }
    ]);
  }, []);

  return (
    <div>
      <h1>Users</h1>

      <table border={1} cellPadding={6} style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Department</th>
          </tr>
        </thead>

        <tbody>
          {users.map((u, i) => (
            <tr key={i}>
              <td>{u.name}</td>
              <td>{u.role}</td>
              <td>{u.dept}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
