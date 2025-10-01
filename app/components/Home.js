"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function HomeLanding() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="flex-1 bg-gradient-to-br from-yellow-700 via-yellow-400 to-black">
        <div className="max-w-7xl mx-0.5 px-2 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Banner */}
           
          <div className="flex justify-center md:justify-end ">
            <Image
              src="/banner.png" // replace with your image
              alt="Eco Shop Admin"
              width={500}
              height={400}
              className="rounded-2xl shadow-lg"
            />
          </div>
                  {/* Right Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r text-white bg-clip-text">
              Welcome to Eco-Shop Admin Panel
            </h1>
            <p className="text-lg text-white leading-relaxed">
              Eco-Shop is your trusted sustainable shopping platform.  
              This secure <span className="font-bold text-red-700">Admin Panel</span> 
              allows authorized users to manage products, monitor sales, and ensure 
              everything runs smoothly.  
            </p>
            <p className="text-md text-red-700 font-bold">
              If you don’t have admin credentials, you can return to the shop.  
              Otherwise, log in as an admin below.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => router.push("#")}
                className="px-6 py-3 rounded-lg font-medium shadow-md bg-gradient-to-r from-green-500 via-yellow-500 to-black text-white hover:from-black hover:to-yellow-600 transition"
              >
                Go Back to Shop
              </button>
              <button
                onClick={() => router.push("/adminLogin")}
                className="px-6 py-3 rounded-lg font-medium shadow-md bg-gradient-to-r from-black via-blue-500 to-black text-white hover:via-black hover:to-yellow-600 transition"
              >
                Login as Admin
              </button>
            </div>
          </div>

 
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-black text-white text-center py-4">
        <p className="text-sm">
          © {new Date().getFullYear()} Eco-Shop. All rights reserved.  
        </p>
      </footer>
    </div>
  );
}
