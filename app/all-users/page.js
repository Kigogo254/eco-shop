"use client";
import { useState } from "react";

export default function AllUsersPage() {
  // Dummy data for now
  const [users] = useState([
    {
      id: 1,
      name: "John Doe",
      address: "123 Green Street, EcoCity",
      orders: ["Eco Bag", "Reusable Bottle"],
    },
    {
      id: 2,
      name: "Jane Smith",
      address: "456 Yellow Avenue, SunTown",
      orders: ["Solar Charger", "Bamboo Toothbrush", "Eco Notebook"],
    },
    {
      id: 3,
      name: "Mike Johnson",
      address: "789 Black Road, RiverVille",
      orders: ["Compost Bin"],
    },
  ]);

  const [search, setSearch] = useState("");

  // Filter users by search term
  const filteredUsers = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-5xl mx-auto mt-24 p-6 bg-white rounded-xl shadow-lg border border-gray-200">
      <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-yellow-500 via-black to-yellow-700 bg-clip-text text-transparent">
        All Users
      </h1>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search user by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 border border-yellow-400 rounded-lg focus:ring-2 focus:ring-yellow-500 text-gray-800"
        />
      </div>

      {/* Users List */}
      <ul className="space-y-4">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <li
              key={user.id}
              className="p-6 bg-gray-50 rounded-lg shadow border border-gray-300"
            >
              <h2 className="text-lg font-semibold text-gray-900">{user.name}</h2>
              <p className="text-sm text-gray-600">
                📍 <span className="font-medium">Address:</span> {user.address}
              </p>
              <p className="text-sm text-gray-700 mt-2">
                🛒 <span className="font-medium">Orders:</span>{" "}
                {user.orders.join(", ")}
              </p>
            </li>
          ))
        ) : (
          <p className="text-gray-600 text-center font-medium">
            No users found with that name.
          </p>
        )}
      </ul>
    </div>
  );
}
