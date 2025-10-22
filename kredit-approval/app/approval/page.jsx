"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function ApprovalPage() {
  const [data, setData] = useState([
    {
      id: 1,
      nama: "Andi Saputra",
      kendaraan: "Toyota Avanza",
      status: "Menunggu",
    },
    {
      id: 2,
      nama: "Budi Rahman",
      kendaraan: "Honda Brio",
      status: "Disetujui",
    },
  ]);

  const updateStatus = (id, newStatus) => {
    setData((prev) =>
      prev.map((d) => (d.id === id ? { ...d, status: newStatus } : d))
    );
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-lg mt-8">
      <h1 className="text-2xl font-bold mb-4 text-center text-blue-700">
        Approval Pengajuan Kredit
      </h1>

      <table className="w-full border border-gray-300 rounded-md">
        <thead className="bg-blue-50">
          <tr>
            <th className="border p-2">Nama Konsumen</th>
            <th className="border p-2">Kendaraan</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d) => (
            <tr key={d.id} className="text-center">
              <td className="border p-2">{d.nama}</td>
              <td className="border p-2">{d.kendaraan}</td>
              <td className="border p-2">{d.status}</td>
              <td className="border p-2 space-x-2">
                <Button
                  size="sm"
                  onClick={() => updateStatus(d.id, "Disetujui")}
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  Approve
                </Button>
                <Button
                  size="sm"
                  onClick={() => updateStatus(d.id, "Ditolak")}
                  className="bg-red-600 hover:bg-red-700 text-white"
                >
                  Reject
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
