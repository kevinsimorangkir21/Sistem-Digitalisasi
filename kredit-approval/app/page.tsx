export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white text-center px-4">
      <div className="max-w-lg bg-gray-800/60 backdrop-blur-md rounded-2xl shadow-lg p-10 border border-gray-700">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-400 mb-4">
          Selamat Datang di Sistem Kredit PT JKL
        </h1>

        <p className="text-gray-300 mb-8">
          Silakan pilih halaman untuk melanjutkan:
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="/pengajuan"
            className="bg-blue-600 hover:bg-blue-700 transition-all text-white font-medium py-2 px-6 rounded-lg shadow-md"
          >
            📝 Form Pengajuan
          </a>

          <a
            href="/approval"
            className="bg-green-600 hover:bg-green-700 transition-all text-white font-medium py-2 px-6 rounded-lg shadow-md"
          >
            ✅ Approval Pengajuan
          </a>
        </div>
      </div>

      <footer className="mt-10 text-gray-500 text-sm">
        © {new Date().getFullYear()} PT JKL Kredit System. All rights reserved.
      </footer>
    </main>
  );
}
