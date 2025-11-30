'use client'
import { useState } from "react";
import { Tabs, Tab, Box, TextField, Button } from "@mui/material";

export default function DeathCertificateTabs() {
  const [tab, setTab] = useState(0);

  return (
    <Box p={4}>
      <Tabs
        value={tab}
        onChange={(e, v) => setTab(v)}
        indicatorColor="primary"
        textColor="inherit"
        sx={{
          "& .MuiTab-root": { color: "black" },
          "& .Mui-selected": { color: "black", fontWeight: "600" }
        }}
      >
        <Tab label="Death Certificate List" />
        <Tab label="Create Death Certificate" />
      </Tabs>

      {tab === 0 && (
        <Box mt={4} p={3} border="1px solid #ddd" borderRadius={2}>
          <h2 className="text-lg font-semibold mb-4 text-black">Death Certificates</h2>
          <table className="w-full text-sm border">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 border text-black">Certificate ID</th>
                <th className="p-2 border text-black">Patient Name</th>
                <th className="p-2 border text-black">Patient ID</th>
                <th className="p-2 border text-black">Date / Time</th>
                <th className="p-2 border text-black">Primary Cause</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border text-black">DC-001</td>
                <td className="p-2 border text-black">Ravi Kumar</td>
                <td className="p-2 border text-black">P-1001</td>
                <td className="p-2 border text-black">2025-11-28 03:45</td>
                <td className="p-2 border text-black">Cardiac Arrest</td>
              </tr>
            </tbody>
          </table>
        </Box>
      )}

      {tab === 1 && (
        <Box mt={4} p={3} border="1px solid #ddd" borderRadius={2} maxWidth={500}>
          <h2 className="text-lg font-semibold mb-4 text-black">Create Death Certificate</h2>
          <Box display="flex" flexDirection="column" gap={2}>
            <TextField 
              label="Patient ID" 
              fullWidth 
              InputLabelProps={{ style: { color: "black" } }}
              InputProps={{ style: { color: "black" } }}
            />

            <TextField 
              label="Patient Name" 
              fullWidth
              InputLabelProps={{ style: { color: "black" } }}
              InputProps={{ style: { color: "black" } }}
            />

            <TextField 
              type="datetime-local" 
              fullWidth
              InputProps={{ style: { color: "black" } }}
            />

            <TextField 
              label="Primary Cause of Death" 
              fullWidth 
              InputLabelProps={{ style: { color: "black" } }}
              InputProps={{ style: { color: "black" } }}
            />

            <TextField 
              label="Secondary Cause (optional)" 
              fullWidth 
              InputLabelProps={{ style: { color: "black" } }}
              InputProps={{ style: { color: "black" } }}
            />

            <TextField 
              label="Place of Death" 
              fullWidth 
              InputLabelProps={{ style: { color: "black" } }}
              InputProps={{ style: { color: "black" } }}
            />

            <TextField 
              label="Description" 
              fullWidth 
              multiline 
              rows={3}
              InputLabelProps={{ style: { color: "black" } }}
              InputProps={{ style: { color: "black" } }}
            />

            <Button variant="contained" color="primary">
              Generate Certificate
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
}
