"use client";

import { useState } from "react";
import { Box, Tab, TextField, Button, MenuItem } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";

export default function AccountantsPage() {
  const [tab, setTab] = useState("1");
  const handleChange = (e, v) => setTab(v);

  return (
    <div className="p-6">

      <h1 className="text-md font-bold text-blue-700 mb-6">ACCOUNTANTS</h1>

      <TabContext value={tab}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange}>
            <Tab label="Accountants List" value="1" />
            <Tab label="Add Accountant" value="2" />
          </TabList>
        </Box>

        <TabPanel value="1">
          <div className="flex items-center gap-2 mb-5">
            <TextField
              placeholder="Search accountant"
              size="small"
              sx={{ width: "300px", background: "white" }}
            />
            <Button variant="contained" sx={{ backgroundColor: "#1e40af" }}>
              🔍
            </Button>
          </div>

          <div className="border rounded-xl shadow bg-white overflow-hidden">
            <div className="grid grid-cols-4 bg-purple-800 text-white font-semibold py-3 px-4">
              <span>#</span>
              <span>Name</span>
              <span>Phone</span>
              <span>Experience</span>
            </div>

            <div className="grid grid-cols-4 border-b py-3 px-4 text-sm items-center">
              <span>1</span>
              <span>Ravi Sharma</span>
              <span>9876543210</span>
              <span>5 Years</span>
            </div>

            <div className="flex gap-4 py-3 px-4">
              <Button variant="contained" size="small" sx={{ backgroundColor: "#4f46e5" }}>
                Edit
              </Button>
              <Button variant="contained" size="small" sx={{ backgroundColor: "#dc2626" }}>
                Delete
              </Button>
            </div>
          </div>
        </TabPanel>

        <TabPanel value="2">
          <div className="w-full max-w-3xl bg-[#e8edff] border border-blue-200 shadow-lg rounded-xl p-8">

            <h2 className="text-2xl font-bold text-gray-800 mb-4">ADD ACCOUNTANT</h2>

            <form className="flex flex-col gap-6">
              <TextField label="First Name" fullWidth size="small" />
              <TextField label="Last Name" fullWidth size="small" />
              <TextField label="Email" type="email" fullWidth size="small" />
              <TextField label="Phone Number" fullWidth size="small" />

              <TextField label="Gender" select fullWidth size="small">
                {["Male", "Female", "Other"].map((g) => (
                  <MenuItem key={g} value={g}>{g}</MenuItem>
                ))}
              </TextField>

              <TextField label="Qualification" fullWidth size="small" />

              <TextField label="Experience (years)" type="number" fullWidth size="small" />

              <TextField label="Shift" select fullWidth size="small">
                {["Morning", "Afternoon", "Night"].map((s) => (
                  <MenuItem key={s} value={s}>{s}</MenuItem>
                ))}
              </TextField>

              <TextField label="Address" fullWidth multiline rows={2} size="small" />

              <Button
                variant="contained"
                sx={{ width: "220px", backgroundColor: "#4338ca", padding: "10px", fontSize: "16px" }}
              >
                Create Accountant
              </Button>
            </form>
          </div>
        </TabPanel>
      </TabContext>
    </div>
  );
}
