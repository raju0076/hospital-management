"use client";

import { useState } from "react";
import Link from "next/link";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

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

      <div className="relative max-w-md w-full mx-4 p-8 rounded-3xl border border-white/20 
                      bg-white/10 backdrop-blur-xl shadow-2xl">

        <h1 className="text-3xl font-bold text-cyan-400 text-center mb-3">
          Forgot Password
        </h1>

        <p className="text-center text-gray-200 text-sm mb-8">
          Enter your registered email to receive a password reset link.
        </p>

        <input
          className="w-full px-4 py-3 rounded-xl bg-white/20 text-white 
                     placeholder-gray-300 border border-white/40
                     focus:outline-none focus:border-cyan-400 backdrop-blur-md"
          placeholder="Enter your email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          className="w-full mt-6 bg-cyan-500 hover:bg-cyan-400 text-black 
                     font-semibold py-3 rounded-xl shadow-lg transition"
        >
          Send Reset Link →
        </button>

        <p className="text-center text-gray-300 text-sm mt-6">
          Remember your password?{" "}
          <Link href="/auth/login" className="text-cyan-300 underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
