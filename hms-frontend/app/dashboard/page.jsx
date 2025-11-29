import { redirect } from "next/navigation";
import { getUserRole } from "@/lib/rbac";

export default async function DashboardHome() {
  const role = await getUserRole();  

  if (role === "SUPER_ADMIN") redirect("/dashboard/super-admin");
  if (role === "HOSPITAL_ADMIN") redirect("/dashboard/hospital-admin");
  if (role === "DOCTOR") redirect("/dashboard/doctors");
  if (role === "NURSE") redirect("/dashboard/nurse");
  if (role === "PHARMACIST") redirect("/dashboard/pharmacist");
  if (role === "RECEPTIONIST") redirect("/dashboard/receptionist");

  return <div>Unauthorized</div>;
}
