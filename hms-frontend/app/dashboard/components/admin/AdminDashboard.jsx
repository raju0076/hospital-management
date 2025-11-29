import Image from "next/image";

const stats = [
  { label: "Patients", count: 6, image: "/icons/patients.png" },
  { label: "Doctor", count: 5, image: "/icons/doctors.png" },
  { label: "Nurse", count: 2, image: "/icons/nurse.png" },
  { label: "Receptionist", count: 2, image: "/icons/reception.png" },
  { label: "Pharmacist", count: 1, image: "/icons/pharmacy.png" },
  { label: "Lab Technicians", count: 2, image: "/icons/lab.png" },
  { label: "Accountants", count: 1, image: "/icons/account.png" },
  { label: "Bed", count: 2, image: "/icons/bed.png" },
  { label: "Blood Bank", count: 1, image: "/icons/bloodbank.png" },
  { label: "Appointments", count: 1, image: "/icons/appointment.png" },
  { label: "Payments", count: 1, image: "/icons/payment.png" },
  { label: "Profile", count: 1, image: "/icons/profile.png" },
];

export default function AdminDashboard() {
  return (
    <div className="p-6">
     
   
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
        {stats.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-4 bg-white shadow-md px-4 py-3 rounded-lg border border-blue-200"
          >
            <Image src={item.image} width={60} height={60} alt={item.label} />
            <div>
              <p className="text-2xl font-bold text-blue-700">{item.count}</p>
              <p className="text-gray-600">{item.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CALENDAR */}
      <div className="bg-white shadow-md rounded-lg p-6 border border-blue-200">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Image src="/icons/calendar.png" width={24} height={24} alt="calendar" />
          Calendar
        </h2>

        {/* Placeholder for now */}
        <div className="h-96 bg-gray-100 rounded-xl flex items-center justify-center text-gray-500 text-lg">
          Calendar UI Placeholder
        </div>
      </div>
    </div>
  );
}
