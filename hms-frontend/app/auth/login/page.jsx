"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const adminDummy = {
    tenantId: "TENANT_ABC123",
    role: "HOSPITAL_ADMIN",
    permissions: [
      "DASHBOARD:VIEW",
      "USER:READ",
      "USER:CREATE",
      "DEPARTMENT:MANAGE",
      "PATIENT:READ",
      "SETTINGS:MANAGE"
    ],
    token: "dummy.access.token"
  };

  const handleLogin = () => {
    localStorage.setItem("user", JSON.stringify(adminDummy));
    router.push("/dashboard");
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>Admin Login</h2>
      <input
        placeholder="Email"
        onChange={e => setEmail(e.target.value)}
      /><br />
      <input
        placeholder="Password"
        type="password"
        onChange={e => setPassword(e.target.value)}
      /><br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
