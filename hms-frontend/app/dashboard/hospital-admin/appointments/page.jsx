"use client";

import { useState } from "react";
import { Box, Tab, TextField, Button } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import AppointmentList from "../../components/appointments/AppointmentList";
import CreateAppointment from "../../components/appointments/CreateAppointment";

export default function AppointmentsPage() {
  const [tab, setTab] = useState("1");
  const handleChange = (e, v) => setTab(v);

  return (
    <div className="p-6">
      <TabContext value={tab}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange}>
            <Tab label="All Appointments" value="1" />
            <Tab label="Create Appointment" value="2" />
          </TabList>
        </Box>

        <TabPanel value="1">
          <AppointmentList />
        </TabPanel>

        <TabPanel value="2">
          <CreateAppointment />
        </TabPanel>
      </TabContext>
    </div>
  );
}
