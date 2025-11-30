import { registerHospitalService } from "./hospital.service.js";

export const registerHospital = async (req, res) => {
  const out = await registerHospitalService(req.body);
  if (out.error) return res.status(400).json({ message: out.error });
  res.json({ message: "Hospital registered", data: out });
};
