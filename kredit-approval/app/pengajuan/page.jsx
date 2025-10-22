"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function PengajuanPage() {
  const [formData, setFormData] = useState({
    nama: "",
    nik: "",
    tglLahir: "",
    statusPerkawinan: "",
    namaPasangan: "",
    merk: "",
    model: "",
    harga: "",
    dp: "",
    lamaKredit: "",
    asuransi: "",
  });

  const [files, setFiles] = useState({
    ktp: null,
    kk: null,
    buktiTandaJadi: null,
    formPengajuan: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFiles({ ...files, [e.target.name]: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ ...formData, files });
    alert("Data pengajuan berhasil disimpan (simulasi)");
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-lg mt-8">
      <h1 className="text-2xl font-bold mb-4 text-center text-blue-700">
        Form Pengajuan Kredit Kendaraan
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <input name="nama" placeholder="Nama Konsumen" onChange={handleChange} className="border p-2 rounded" />
          <input name="nik" placeholder="NIK" onChange={handleChange} className="border p-2 rounded" />
          <input type="date" name="tglLahir" onChange={handleChange} className="border p-2 rounded" />
          <select name="statusPerkawinan" onChange={handleChange} className="border p-2 rounded">
            <option value="">Status Perkawinan</option>
            <option value="Belum Kawin">Belum Kawin</option>
            <option value="Kawin">Kawin</option>
          </select>
          <input name="namaPasangan" placeholder="Nama Pasangan (opsional)" onChange={handleChange} className="border p-2 rounded col-span-2" />
        </div>

        <h2 className="font-semibold mt-4 text-lg text-blue-600">Data Kendaraan</h2>
        <div className="grid grid-cols-2 gap-4">
          <input name="merk" placeholder="Merk" onChange={handleChange} className="border p-2 rounded" />
          <input name="model" placeholder="Model" onChange={handleChange} className="border p-2 rounded" />
          <input name="harga" type="number" placeholder="Harga Kendaraan" onChange={handleChange} className="border p-2 rounded col-span-2" />
        </div>

        <h2 className="font-semibold mt-4 text-lg text-blue-600">Data Pinjaman</h2>
        <div className="grid grid-cols-2 gap-4">
          <input name="dp" type="number" placeholder="Down Payment" onChange={handleChange} className="border p-2 rounded" />
          <input name="lamaKredit" type="number" placeholder="Lama Kredit (bulan)" onChange={handleChange} className="border p-2 rounded" />
          <select name="asuransi" onChange={handleChange} className="border p-2 rounded col-span-2">
            <option value="">Pilih Asuransi</option>
            <option value="Comprehensive">Comprehensive</option>
            <option value="TLO">TLO</option>
          </select>
        </div>

        <h2 className="font-semibold mt-4 text-lg text-blue-600">Upload Dokumen</h2>
        <div className="space-y-2">
          <input type="file" name="ktp" onChange={handleFileChange} />
          <input type="file" name="kk" onChange={handleFileChange} />
          <input type="file" name="buktiTandaJadi" onChange={handleFileChange} />
          <input type="file" name="formPengajuan" onChange={handleFileChange} />
        </div>

        <Button type="submit" className="w-full mt-4 bg-blue-700 hover:bg-blue-800 text-white">
          Submit Pengajuan
        </Button>
      </form>
    </div>
  );
}
