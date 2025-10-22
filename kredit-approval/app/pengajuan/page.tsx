"use client";

import { useState } from "react";

export default function FormPengajuan() {
  const [formData, setFormData] = useState({
    nama: "",
    nik: "",
    pekerjaan: "",
    gaji: "",
    jumlahKredit: "",
    tenor: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Pengajuan atas nama ${formData.nama} berhasil disimpan!`);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center text-white">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-blue-400">
          Form Pengajuan Kredit
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium">Nama Lengkap</label>
            <input
              type="text"
              name="nama"
              value={formData.nama}
              onChange={handleChange}
              required
              className="w-full rounded-lg p-2 bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">NIK</label>
            <input
              type="text"
              name="nik"
              value={formData.nik}
              onChange={handleChange}
              required
              className="w-full rounded-lg p-2 bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Pekerjaan</label>
            <input
              type="text"
              name="pekerjaan"
              value={formData.pekerjaan}
              onChange={handleChange}
              required
              className="w-full rounded-lg p-2 bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Gaji Bulanan (Rp)</label>
            <input
              type="number"
              name="gaji"
              value={formData.gaji}
              onChange={handleChange}
              required
              className="w-full rounded-lg p-2 bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Jumlah Kredit (Rp)</label>
            <input
              type="number"
              name="jumlahKredit"
              value={formData.jumlahKredit}
              onChange={handleChange}
              required
              className="w-full rounded-lg p-2 bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Tenor (Bulan)</label>
            <select
              name="tenor"
              value={formData.tenor}
              onChange={handleChange}
              required
              className="w-full rounded-lg p-2 bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="">Pilih tenor</option>
              <option value="6">6 Bulan</option>
              <option value="12">12 Bulan</option>
              <option value="24">24 Bulan</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition-all py-2 rounded-lg font-semibold mt-4"
          >
            Kirim Pengajuan
          </button>
        </form>
      </div>
    </div>
  );
}
