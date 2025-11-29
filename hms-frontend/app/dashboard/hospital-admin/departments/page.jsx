"use client";

import { useState } from "react";
import { Box, Tab, TextField, Button } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";

export default function DepartmentsPage() {
  const [tab, setTab] = useState("1");
  const handleChange = (e, v) => setTab(v);

  return (
    <div className="p-6">


      <TabContext value={tab}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="department tabs">
            <Tab label="Departments" value="1" />
            <Tab label="Add Department" value="2" />
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
            <div className="grid grid-cols-3 bg-purple-800 text-white font-semibold py-3 px-4">
              <span>#</span>
              <span>Departments</span>
              <span>Description</span>
            </div>

            <div className="grid grid-cols-3 border-b py-3 px-4 items-center">
              <span>1</span>
              <span>Doctors</span>
              <span>Prescribe drugs</span>
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

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              ADD DEPARTMENT
            </h2>

            <form className="flex flex-col gap-6">
              <div className="flex flex-col">
                <label className="font-bold text-gray-700 mb-1">Department</label>
                <input
                  type="text"
                  placeholder="Enter department name"
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-blue-500"
                />
              </div>

              <div className="flex flex-col">
                <label className="font-bold text-gray-700 mb-1">Description</label>
                <input
                  type="text"
                  placeholder="Enter description"
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-blue-500"
                />
              </div>

              <Button
                variant="contained"
                sx={{
                  width: "200px",
                  backgroundColor: "#4338ca",
                  padding: "10px",
                  fontSize: "16px",
                }}
              >
                Add Department
              </Button>
            </form>
          </div>
        </TabPanel>
      </TabContext>
    </div>
  );
}
