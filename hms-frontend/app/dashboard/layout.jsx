import AdminSidebar from "./components/admin/AdminSidebar";
import DoctorSidebar from "./components/doctor/DoctorSidebar";
import Navbar from "./components/Navbar";


async function getRole() {
  return "HOSPITAL_ADMIN"; 
}

export default async function DashboardLayout({ children }) {
  const role = "DOCTOR"

  return (
    <div className="flex min-h-screen bg-gray-100">
      
      {role === "HOSPITAL_ADMIN" && <AdminSidebar />}
      {role === "DOCTOR" && <DoctorSidebar />}

      <div className="flex-1">
        <Navbar />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
