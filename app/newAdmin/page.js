"use client";
import { useRouter } from "next/navigation";
export default function NewAdmin() {
     const router = useRouter();
       // fake login handler
  function handleCreate(e) {
    e.preventDefault(); // prevent page refresh
    router.push("/"); // redirect to products page
  }
  return (
    <div className="min-h-screen flex items-center justify-center mt-10 bg-gradient-to-br from-black via-yellow-400 to-white p-6">
      <form onSubmit={handleCreate} className="w-full mt-6 max-w-md bg-white/95 backdrop-blur-md p-8 rounded-2xl shadow-2xl space-y-6 border border-yellow-400">
        <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-black via-yellow-500 to-black bg-clip-text text-transparent">
          Register as Admin
        </h2>

        {/* Admin Name */}
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-black">Admin Name</label>
          <input
            type="text"
            placeholder="Choose your admin name"
            className="px-4 py-2 border border-yellow-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        {/* Secret Code (approval by higher authority maybe) */}
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-black">Secret Code (Cleared by Which Admin??)</label>
          <input
            type="text"
            placeholder="Enter provided secret code"
            className="px-4 py-2 border border-yellow-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        {/* Set Secret Code */}
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-black">Set Secret Code</label>
          <input
            type="text"
            placeholder="Create your secret code"
            className="px-4 py-2 border border-yellow-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        {/* Confirm Secret Code */}
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-black">Confirm Secret Code</label>
          <input
            type="text"
            placeholder="Re-enter secret code"
            className="px-4 py-2 border border-yellow-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        {/* Password */}
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-black">Password</label>
          <input
            type="password"
            placeholder="Set your password"
            className="px-4 py-2 border border-yellow-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        {/* Confirm Password */}
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-black">Confirm Password</label>
          <input
            type="password"
            placeholder="Re-enter password"
            className="px-4 py-2 border border-yellow-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        <button
           type="submit"
          className="w-full py-2 px-4 bg-gradient-to-r from-black via-yellow-500 to-black text-white font-medium rounded-lg shadow-lg hover:from-yellow-600 hover:via-black hover:to-yellow-600 transition"
        >
          Register as Admin
        </button>
      </form>
    </div>
  );
}
