"use client"

import { HiCube, HiShoppingCart, HiCog } from "react-icons/hi"
import { HiUser, HiUsers } from "react-icons/hi2"  // moved here in new versions

export default function AdminNavbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-black via-yellow-500 to-white text-black shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <a href="/">
          <h1 className="text-lg font-bold bg-gradient-to-r from-yellow-400 via-white to-yellow-600 bg-clip-text text-transparent">
            Admin Dashboard
          </h1>
        </a>

        <ul className="flex space-x-6 font-medium">
          <li>
            <a
              href="/adminLogin"
              className="flex items-center gap-2 hover:text-yellow-600 transition-colors"
            >
              <HiUser className="text-xl" />
              Login
            </a>
          </li>
          <li>
            <a
              href="/products"
              className="flex items-center gap-2 hover:text-yellow-600 transition-colors"
            >
              <HiCube className="text-xl" />
              Products
            </a>
          </li>
          <li>
            <a
              href="/orders"
              className="flex items-center gap-2 hover:text-yellow-600 transition-colors"
            >
              <HiShoppingCart className="text-xl" />
              Orders
            </a>
          </li>
          <li>
            <a
              href="/account"
              className="flex items-center gap-2 hover:text-yellow-600 transition-colors"
            >
              <HiCog className="text-xl" />
              My Account
            </a>
          </li>
          <li>
            <a
              href="/all-users"
              className="flex items-center gap-2 hover:text-yellow-600 transition-colors"
            >
              <HiUsers className="text-xl" />
              Users
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
