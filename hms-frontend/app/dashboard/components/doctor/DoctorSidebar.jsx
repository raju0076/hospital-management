"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Stethoscope } from "lucide-react";

export default function DoctorSidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const sections = [
    {
      section: "MAIN",
      items: [
        { label: "Dashboard", path: "/dashboard/doctors" }
      ]
    },

    {
      section: "PATIENTS",
      items: [
        { label: "My Patients", path: "/dashboard/doctors/patients" },
        { label: "OPD Patients", path: "/dashboard/doctors/patients/opd" },
        { label: "IPD Patients", path: "/dashboard/doctors/patients/ipd" }
      ]
    },

    {
      section: "APPOINTMENTS",
      items: [
        { label: "Today's Appointments", path: "/dashboard/doctors/appointments/today" },
        { label: "All Appointments", path: "/dashboard/doctors/appointments" }
      ]
    },

    {
      section: "PRESCRIPTIONS",
      items: [
        { label: "New Prescription", path: "/dashboard/doctors/prescriptions/create" },
        { label: "Prescription History", path: "/dashboard/doctors/prescriptions" }
      ]
    },

    {
      section: "RECORDS & DIAGNOSTICS",
      items: [
        { label: "Death Certificate", path: "/dashboard/doctors/records/death" },
        { label: "Diagnostics", path: "/dashboard/doctors/diagnostics" },
        { label: "Clinical Notes", path: "/dashboard/doctors/notes" }
      ]
    }
  ];

  return (
    <div className="w-64 min-h-screen bg-gradient-to-b from-slate-900/90 via-slate-950 to-black/95 p-4 overflow-y-auto">

      <h2 className="text-xl font-bold text-blue-700 flex items-center gap-2 mb-2 p-2">
        <Stethoscope className="w-5 h-5" />
        DOCTOR
      </h2>

      <div className="border-2 border-b-black" />

      {sections.map((section, idx) => (
        <Accordion
          key={idx}
          disableGutters
          sx={{
            boxShadow: "none",
            borderBottom: "1px solid #222",
            backgroundColor: "transparent"
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}>
            <Typography
              sx={{
                fontSize: "0.75rem",
                fontWeight: 600,
                color: "#fff",
                fontFamily: "Roboto, sans-serif",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                paddingLeft: "6px"
              }}
            >
              {section.section}
            </Typography>
          </AccordionSummary>

          <AccordionDetails className="flex flex-col gap-3">
            {section.items.map((item) => {
              const active = pathname === item.path;

              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer transition border
                    ${active
                      ? "bg-purple-600 text-white border-purple-700 shadow"
                      : "bg-white hover:bg-gray-100 text-gray-800 border-gray-200"
                    }`}
                >
                  <span className="text-sm">{item.label}</span>
                </Link>
              );
            })}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
