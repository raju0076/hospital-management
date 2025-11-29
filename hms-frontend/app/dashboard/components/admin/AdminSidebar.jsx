"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { UserStar } from 'lucide-react';

export default function AdminSidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const sections = [
    {
      section: "MAIN",
      items: [
        { label: "Dashboard", path: "/dashboard/hospital-admin", icon: "/icons/dashboard.png" }
      ]
    },

    {
      section: "HOSPITAL CONFIGURATION",
      items: [
        { label: "Hospital Profile", path: "/dashboard/hospital-admin/profile", icon: "/icons/profile.png" },
        { label: "License Info", path: "/dashboard/hospital-admin/license", icon: "/icons/settings.png" }
      ]
    },

    {
      section: "DEPARTMENTS",
      items: [
        { label: "Departments", path: "/dashboard/hospital-admin/departments", icon: "/icons/departments.png" }
      ]
    },

    {
      section: "USER MANAGEMENT",
      items: [
        { label: "All Users", path: "/dashboard/hospital-admin/users", icon: "/icons/users.png" },
        { label: "Doctors", path: "/dashboard/hospital-admin/doctors", icon: "/icons/doctors.png" },
        { label: "Nurses", path: "/dashboard/hospital-admin/nurses", icon: "/icons/nurse.png" },
        { label: "Pharmacists", path: "/dashboard/hospital-admin/pharmacists", icon: "/icons/pharmacy.png" },
        { label: "Receptionists", path: "/dashboard/hospital-admin/receptionists", icon: "/icons/reception.png" },
        { label: "Accountants", path: "/dashboard/hospital-admin/accountants", icon: "/icons/account.png" },
        { label: "Lab Technicians", path: "/dashboard/hospital-admin/lab", icon: "/icons/lab.png" }
      ]
    },

    {
      section: "PATIENT MANAGEMENT",
      items: [
        { label: "Patients List", path: "/dashboard/hospital-admin/patients", icon: "/icons/patients.png" },
        { label: "Add Patient", path: "/dashboard/hospital-admin/patients/add", icon: "/icons/add-user.png" }
      ]
    },

    {
      section: "APPOINTMENTS",
      items: [
        { label: "Appointments", path: "/dashboard/hospital-admin/appointments", icon: "/icons/calendar.png" }
      ]
    },

    {
      section: "PHARMACY",
      items: [
        { label: "Inventory", path: "/dashboard/hospital-admin/pharmacy/inventory", icon: "/icons/pharmacy.png" },
        { label: "Prescriptions", path: "/dashboard/hospital-admin/pharmacy/prescriptions", icon: "/icons/prescriptions.png" }
      ]
    },

    {
      section: "REPORTS",
      items: [
        { label: "Birth Report", path: "/dashboard/hospital-admin/birth", icon: "/icons/birth.png" },
        { label: "Death Report", path: "/dashboard/hospital-admin/death", icon: "/icons/death.png" }
      ]
    }
  ];

  return (
    <div className="w-64 min-h-screen bg-white  p-4 overflow-y-auto">

      <h2 className="text-xl font-bold text-blue-700 flex items-center gap-2 mb-2 p-2">
       <UserStar />
        ADMIN
      </h2>
     <div className="border-2 border-b-black  "></div>
      {sections.map((section, idx) => (
        <Accordion
          key={idx}
          disableGutters
          sx={{
            boxShadow: "none",
            borderBottom: "1px solid #eee",
            backgroundColor: "transparent",
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography
  sx={{
    fontSize: "0.75rem",    
    fontWeight: 600,
    color: "#374151",
    fontFamily: "Roboto, sans-serif",
    whiteSpace: "nowrap",     
    overflow: "hidden",
    textOverflow: "ellipsis",
    paddingLeft: "6px",
  }}
>
  {section.section}
</Typography>

          </AccordionSummary>

          <AccordionDetails className="flex flex-col gap-2">
            {section.items.map((item) => {
              const active = pathname === item.path;

              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer transition border
                    ${active
                      ? "bg-purple-600 text-white border-purple-700 shadow"
                      : "bg-white hover:bg-gray-100 text-gray-700 border-gray-200"
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
