"use client";

import { useState } from "react";
import { Box, Tab, TextField, Button } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";

export default function DoctorsPage() {
  const [tab, setTab] = useState("1");
  const handleChange = (e, v) => setTab(v);

  return (
    <div className="p-6">


      <TabContext value={tab}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange}>
            <Tab label="Doctors" value="1" />
            <Tab label="Add Doctor" value="2" />
          </TabList>
        </Box>


        <TabPanel value="1">
          <div className="flex items-center gap-2 mb-5">
            <TextField
              placeholder="Search"
              size="small"
              sx={{ width: "300px", background: "white" }}
            />
            <Button variant="contained" sx={{ backgroundColor: "#1e40af" }}>
              🔍
            </Button>
          </div>

          <div className="border rounded-xl shadow bg-white overflow-hidden">

            <div className="grid grid-cols-5 bg-purple-800 text-white font-semibold py-3 px-4">
              <span>#</span>
              <span>Name</span>
              <span>Department</span>
              <span>Phone</span>
              <span>Email</span>
            </div>

            <div className="grid grid-cols-5 border-b py-3 px-4 text-sm">
              <span>1</span>
              <span>Emmanuel Bassey</span>
              <span>Optometrist</span>
              <span>08132426534</span>
              <span>emmanuelbassey@gmail.com</span>
            </div>

            <div className="grid grid-cols-5 border-b py-3 px-4 text-sm bg-gray-100">
              <span>2</span>
              <span>Peter David</span>
              <span>Optometrist</span>
              <span>0912894302</span>
              <span>peterdavid@gmail.com</span>
            </div>

            <div className="grid grid-cols-5 border-b py-3 px-4 text-sm">
              <span>3</span>
              <span>Troy Bolton</span>
              <span>Medicine</span>
              <span>09123194809</span>
              <span>caladams@gmail.com</span>
            </div>

            <div className="grid grid-cols-5 border-b py-3 px-4 text-sm">
              <span>4</span>
              <span>Cally Andrews</span>
              <span>Admin</span>
              <span>0912894302</span>
              <span>callyandrews@gmail.com</span>
            </div>

            <div className="grid grid-cols-5 border-b py-3 px-4 text-sm">
              <span>5</span>
              <span>Lauretta Sam</span>
              <span>Optometrist</span>
              <span>07028934921</span>
              <span>laurettasam@gmail.com</span>
            </div>

            <div className="grid grid-cols-5 border-b py-3 px-4 text-sm">
              <span>6</span>
              <span>Akalezi Kelechi</span>
              <span>Surgery</span>
              <span>0912894302</span>
              <span>akalezikelechi@gmail.com</span>
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

        {/* ================== TAB 2: ADD DOCTOR ================== */}

        <TabPanel value="2">
          <div className="w-full max-w-3xl bg-[#e8edff] border border-blue-200 shadow-lg rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">ADD DOCTOR</h2>

            <form className="flex flex-col gap-6">

              <input
                type="text"
                placeholder="Name"
                className="border border-gray-300 rounded-lg px-4 py-2"
              />

              <input
                type="email"
                placeholder="Email"
                className="border border-gray-300 rounded-lg px-4 py-2"
              />

              <input
                type="text"
                placeholder="Department"
                className="border border-gray-300 rounded-lg px-4 py-2"
              />

              <input
                type="text"
                placeholder="Address"
                className="border border-gray-300 rounded-lg px-4 py-2"
              />

              <input
                type="text"
                placeholder="Phone"
                className="border border-gray-300 rounded-lg px-4 py-2"
              />

              <Button
                variant="contained"
                sx={{
                  width: "200px",
                  backgroundColor: "#4338ca",
                  padding: "10px",
                  fontSize: "16px",
                }}
              >
                Add Doctor
              </Button>
            </form>
          </div>
        </TabPanel>
      </TabContext>
    </div>
  );
}
