import express from "express";
import { registerHospital } from "./hospital.controller.js";

const router = express.Router();

router.post("/register", registerHospital);

export default router;
