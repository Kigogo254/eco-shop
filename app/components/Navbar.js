"use client";

import { useState } from "react";
import Link from "next/link";
import {
  HiMenu,
  HiX,
  HiCube,
  HiShoppingCart,
  HiCog,
  HiHome,
} from "react-icons/hi";
import { HiUser, HiUsers } from "react-icons/hi2";

export default function AdminNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-yellow-200 via-yellow-700 to-yellow-200 text-black shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* Logo + Title */}
        <div className="flex items-center gap-2">
          <HiHome className="text-2xl text-black" />
          <Link
            href="/"
            className="text-lg font-bold bg-gradient-to-r from-yellow-400 via-green-900 to-yellow-600 bg-clip-text text-black"
          >
            Home
          </Link>
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="sm:hidden text-black focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <HiX className="text-2xl" /> : <HiMenu className="text-2xl" />}
        </button>

        {/* Desktop Nav */}
        <ul className="hidden sm:flex space-x-6 font-medium">
          <NavLinks />
        </ul>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`sm:hidden transition-[max-height, padding] duration-300 ease-in-out overflow-hidden bg-gradient-to-br from-black via-yellow-400 to-yellow-700 text-white ${
          isOpen ? "max-h-[500px] py-4 px-4" : "max-h-0"
        }`}
      >
        <ul className="space-y-4 text-sm font-medium text-white">
          <NavLinks onClick={() => setIsOpen(false)} />
        </ul>
      </div>
    </nav>
  );
}

function NavLinks({ onClick }) {
  return (
    <>
      <li>
        <Link
          href="/adminLogin"
          onClick={onClick}
          className="flex items-center gap-2 hover:text-white transition-colors"
        >
          <HiUser className="text-xl" />
          Login
        </Link>
      </li>
      <li>
        <Link
          href="/products"
          onClick={onClick}
          className="flex items-center gap-2 hover:text-white transition-colors"
        >
          <HiCube className="text-xl" />
          Products
        </Link>
      </li>
      <li>
        <Link
          href="/orders"
          onClick={onClick}
          className="flex items-center gap-2 hover:text-white transition-colors"
        >
          <HiShoppingCart className="text-xl" />
          Orders
        </Link>
      </li>
      <li>
        <Link
          href="/account"
          onClick={onClick}
          className="flex items-center gap-2 hover:text-white transition-colors"
        >
          <HiCog className="text-xl" />
          Account
        </Link>
      </li>
      <li>
        <Link
          href="/all-users"
          onClick={onClick}
          className="flex items-center gap-2 hover:text-white transition-colors"
        >
          <HiUsers className="text-xl" />
          Users
        </Link>
      </li>
    </>
  );
}
