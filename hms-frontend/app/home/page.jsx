"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen text-white flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://png.pngtree.com/thumb_back/fh260/background/20240528/pngtree-background-of-operation-room-in-hospital-health-care-concept-image_15733972.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-slate-950/80" />

      <div className="relative max-w-5xl w-full px-4">
        <div className="mx-auto max-w-3xl">
          <div className="relative mx-auto max-w-3xl">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900/90 via-slate-950 to-black/95 backdrop-blur-xl shadow-[0_25px_80px_rgba(0,0,0,0.9)] overflow-hidden">
              
              <div className="flex items-center justify-between px-8 pt-4 pb-3 text-sm">
                <div className="flex items-center gap-2">
                  <div className="h-7 w-7 rounded-full bg-cyan-500/80 flex items-center justify-center text-xs font-semibold">
                    HMS
                  </div>
                  <span className="font-semibold tracking-wide">CareSaaS</span>
                </div>

                <div className="flex items-center gap-4">
                  <button className="text-xs md:text-sm text-slate-300 hover:text-white transition">
                    About
                  </button>

                  <Link
                    href="/auth/login"
                    className="hidden md:inline-flex text-xs md:text-sm px-4 py-1.5 rounded-full border border-slate-600/70 hover:border-slate-300 transition"
                  >
                    Login
                  </Link>

                  <Link
                    href="/auth/register"
                    className="text-xs md:text-sm px-4 py-1.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-medium transition"
                  >
                    Register
                  </Link>
                </div>
              </div>

              {/* CONTENT */}
              <div className="px-8 pb-10 pt-4 md:pb-14 md:pt-6">
                <div className="max-w-xl">
                  <p className="text-xs uppercase tracking-[0.3em] text-cyan-400/80 mb-3">
                    Hospital SaaS Platform
                  </p>
                  <h1 className="text-2xl md:text-4xl font-semibold leading-tight mb-4">
                    Custom cloud-based{" "}
                    <span className="text-cyan-400">hospital management</span>{" "}
                    solutions
                  </h1>
                  <p className="text-sm md:text-base text-slate-300/90 mb-6">
                    Delivering a secure, multi-tenant HMS to digitize hospital
                    operations, from onboarding to patient lifecycle
                    management.
                  </p>

                  <div className="flex flex-wrap items-center gap-3">
                    <Link
                      href="/auth/register"
                      className="px-5 py-2.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-sm font-medium transition"
                    >
                      Register your hospital
                    </Link>

                    <Link
                      href="/auth/login"
                      className="px-5 py-2.5 rounded-full border border-slate-600/80 hover:border-slate-300 text-sm text-slate-200 transition"
                    >
                      Login
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="mx-auto h-4 w-[82%] rounded-b-3xl bg-slate-900/90 shadow-[0_20px_40px_rgba(0,0,0,1)] mt-1" />
          </div>
        </div>
      </div>
    </div>
  );
}
