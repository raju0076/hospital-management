"use client";

import { useState } from "react";
import { Box, Tab, TextField, Button } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";

export default function PatientsPage() {
  const [tab, setTab] = useState("1");
  const handleChange = (e, v) => setTab(v);

  return (
    <div className="p-6">


      <TabContext value={tab}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange}>
            <Tab label="Patients" value="1" />
            <Tab label="Add Patient" value="2" />
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
              <span>Age</span>
              <span>Phone</span>
              <span>Email</span>
            </div>

            <div className="grid grid-cols-5 border-b py-3 px-4 text-sm">
              <span>1</span>
              <span>John Doe</span>
              <span>32</span>
              <span>0912345678</span>
              <span>john@gmail.com</span>
            </div>

            <div className="grid grid-cols-5 border-b py-3 px-4 text-sm bg-gray-100">
              <span>2</span>
              <span>Sarah Paul</span>
              <span>28</span>
              <span>0812398456</span>
              <span>sarahp@gmail.com</span>
            </div>

            <div className="grid grid-cols-5 border-b py-3 px-4 text-sm">
              <span>3</span>
              <span>Michael Lee</span>
              <span>40</span>
              <span>0701283948</span>
              <span>mlee@gmail.com</span>
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">ADD PATIENT</h2>

            <form className="flex flex-col gap-6">

              <input
                type="text"
                placeholder="Name"
                className="border border-gray-300 rounded-lg px-4 py-2"
              />

              <input
                type="number"
                placeholder="Age"
                className="border border-gray-300 rounded-lg px-4 py-2"
              />

              <input
                type="email"
                placeholder="Email"
                className="border border-gray-300 rounded-lg px-4 py-2"
              />

              <input
                type="text"
                placeholder="Phone"
                className="border border-gray-300 rounded-lg px-4 py-2"
              />

              <input
                type="text"
                placeholder="Address"
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
                Add Patient
              </Button>
            </form>
          </div>
        </TabPanel>
      </TabContext>
    </div>
  );
}
