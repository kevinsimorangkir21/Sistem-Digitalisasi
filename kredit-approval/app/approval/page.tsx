"use client";

import { useState } from "react";

export default function ApprovalPage() {
  const [data, setData] = useState([
    {
      id: 1,
      nama: "Budi Santoso",
      nik: "3201112223334445",
      pekerjaan: "Karyawan Swasta",
      gaji: 6000000,
      jumlahKredit: 20000000,
      tenor: 12,
      status: "Menunggu",
    },
    {
      id: 2,
      nama: "Siti Aminah",
      nik: "3209998887776665",
      pekerjaan: "Wiraswasta",
      gaji: 8000000,
      jumlahKredit: 30000000,
      tenor: 24,
      status: "Menunggu",
    },
  ]);

  const handleStatus = (id: number, status: string) => {
    setData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status } : item
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-400">
        Approval Pengajuan Kredit
      </h1>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-700 bg-gray-800 rounded-lg">
          <thead>
            <tr className="bg-gray-700 text-sm text-gray-200">
              <th className="p-3 border border-gray-700">Nama</th>
              <th className="p-3 border border-gray-700">NIK</th>
              <th className="p-3 border border-gray-700">Pekerjaan</th>
              <th className="p-3 border border-gray-700">Gaji</th>
              <th className="p-3 border border-gray-700">Jumlah Kredit</th>
              <th className="p-3 border border-gray-700">Tenor</th>
              <th className="p-3 border border-gray-700">Status</th>
              <th className="p-3 border border-gray-700">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="text-center text-sm hover:bg-gray-700">
                <td className="p-3 border border-gray-700">{item.nama}</td>
                <td className="p-3 border border-gray-700">{item.nik}</td>
                <td className="p-3 border border-gray-700">{item.pekerjaan}</td>
                <td className="p-3 border border-gray-700">
                  Rp{item.gaji.toLocaleString("id-ID")}
                </td>
                <td className="p-3 border border-gray-700">
                  Rp{item.jumlahKredit.toLocaleString("id-ID")}
                </td>
                <td className="p-3 border border-gray-700">{item.tenor} bulan</td>
                <td
                  className={`p-3 border border-gray-700 font-semibold ${
                    item.status === "Disetujui"
                      ? "text-green-400"
                      : item.status === "Ditolak"
                      ? "text-red-400"
                      : "text-yellow-300"
                  }`}
                >
                  {item.status}
                </td>
                <td className="p-3 border border-gray-700 space-x-2">
                  <button
                    onClick={() => handleStatus(item.id, "Disetujui")}
                    className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-md"
                  >
                    Setujui
                  </button>
                  <button
                    onClick={() => handleStatus(item.id, "Ditolak")}
                    className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md"
                  >
                    Tolak
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
