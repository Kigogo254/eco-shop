"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();

  // fake login handler
  function handleLogin(e) {
    e.preventDefault(); // prevent page refresh
    router.push("/products"); // redirect to products page
  }

  return (
    <div className="min-h-screen flex items-center mt-6 justify-center bg-gradient-to-br from-black via-yellow-400 to-white p-6">
      
      <form
        onSubmit={handleLogin}
       className="w-full max-w-md bg-white/95 backdrop-blur-md p-8 rounded-2xl shadow-2xl space-y-6 border border-yellow-400 
             mt-6 sm:mt-16 md:mt-16"
>
        <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-black via-yellow-500 to-black bg-clip-text text-transparent">
          Admin Login
        </h2>

        {/* Admin Name */}
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-black">Admin Name</label>
          <input
            type="text"
            placeholder="Enter your admin name"
            className="px-4 py-2 border border-yellow-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        {/* Admin Secret Code */}
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-black">Admin Secret Code</label>
          <input
            type="text"
            placeholder="Enter secret code"
            className="px-4 py-2 border border-yellow-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-black">Password</label>
          <input
            type="password"
            placeholder="Enter password"
            className="px-4 py-2 border border-yellow-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        {/* Buttons */}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-gradient-to-r from-black via-yellow-500 to-black text-white font-medium rounded-lg shadow-lg hover:from-yellow-600 hover:via-black hover:to-yellow-600 transition"
        >
          Login to Dashboard
        </button>

        <p className="text-center text-sm text-gray-700">
          Not an Admin?{" "}
          <Link
            href="/newAdmin"
            className="text-yellow-600 hover:underline font-semibold"
          >
            Register as Admin
          </Link>
        </p>
      </form>
    </div>
  );
}
