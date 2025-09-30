"use client";
import { useSearchParams, useRouter } from "next/navigation";

export default function ErrorDisplay() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Read error message passed via query string
  const errorMessage = searchParams.get("message") || "Something went wrong.";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-red-500 to-white p-6">
      <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-red-400 max-w-lg w-full text-center space-y-6">
        <h1 className="text-3xl font-bold text-red-600">⚠️ Error</h1>
        <p className="text-gray-800 font-medium">{errorMessage}</p>
        <button
          onClick={() => router.back()}
          className="mt-4 px-6 py-3 rounded-lg font-semibold shadow bg-gradient-to-r from-red-600 to-black text-white hover:from-black hover:to-red-600 transition"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
