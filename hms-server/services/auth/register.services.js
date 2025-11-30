
import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";

export const registerHospitalService = async (data) => {
  const exists = await Hospital.findOne({ licenseNo: data.licenseNo });
  if (exists) return { error: "License number already exists" };

  const tenantId = uuid();

  const hospital = await Hospital.create({
    ...data,
    tenantId,
    status: "PENDING"
  });

  const password = await bcrypt.hash("Admin@123", 10);

  await User.create({
    tenantId,
    firstName: "Admin",
    lastName: "User",
    email: data.adminEmail,
    phone: data.phone,
    roles: ["HOSPITAL_ADMIN"],
    password,
    status: "ACTIVE"
  });

  return { hospital, tempPassword: "Admin@123" };
};
