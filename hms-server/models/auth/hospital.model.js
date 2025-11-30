import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema({
  hospitalName: String,
  licenseNo: { type: String, unique: true },
  adminEmail: String,
  phone: String,
  contactPerson: String,
  website: String,
  address: String,
  city: String,
  state: String,
  country: String,
  tenantId: String,
  status: { type: String, default: "PENDING" }
});

export const Hospital = mongoose.model("Hospital", hospitalSchema);
