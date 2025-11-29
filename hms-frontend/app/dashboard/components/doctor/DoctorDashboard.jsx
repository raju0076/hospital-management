import Image from "next/image";

export default function DoctorDashboard() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-indigo-700">DOCTOR</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Patients", count: 7, img: "/doctor.png" },
          { label: "Queue", count: 3, img: "/doctor.png" },
          { label: "Prescriptions", count: 3, img: "/doctor.png" },
          { label: "Appointments", count: 1, img: "/doctor.png" },
          { label: "Operation", count: 3, img: "/doctor.png" },
          { label: "Birth Report", count: 2, img: "/doctor.png" },
          { label: "Death Report", count: 9, img: "/doctor.png" },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white shadow rounded-xl p-4 flex items-center gap-4"
          >
            <Image src={item.img} alt={item.label} width={50} height={50} />
            <div>
              <p className="text-2xl font-bold text-indigo-600">
                {item.count}
              </p>
              <p className="text-gray-600">{item.label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white shadow rounded-xl p-6">
        <h2 className="text-xl font-bold mb-4">Calendar</h2>
        <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500">
          Calendar UI Placeholder
        </div>
      </div>
    </div>
  );
}
