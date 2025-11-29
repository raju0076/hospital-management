"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

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
      "SETTINGS:MANAGE",
    ],
    token: "dummy.access.token",
  };

  const handleLogin = () => {
    localStorage.setItem("user", JSON.stringify(adminDummy));
    router.push("/dashboard");
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

      <div className="relative max-w-md w-full mx-4 p-10 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">

        <h1 className="text-3xl font-bold text-cyan-400 text-center mb-2">
          Welcome Back
        </h1>

        <p className="text-center text-gray-300 text-sm mb-8">
          Login to access your hospital dashboard.
        </p>

        <div className="space-y-6">

          <div>
            <input
              className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-gray-300 border border-white/40 focus:outline-none focus:border-cyan-400 backdrop-blur-md"
              placeholder="Email Address"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <input
              className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-gray-300 border border-white/40 focus:outline-none focus:border-cyan-400 backdrop-blur-md"
              placeholder="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="text-right mt-2">
              <Link
                href="/auth/forgot-password"
                className="text-cyan-300 text-sm hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
          </div>

          <button
            onClick={handleLogin}
            className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-semibold py-3 rounded-xl shadow-lg transition"
          >
            Login →
          </button>

          <p className="text-center text-gray-300 text-sm">
            Don’t have an account?{" "}
            <Link href="/auth/register" className="text-cyan-300 underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
