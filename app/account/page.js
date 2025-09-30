"use client";
import { useState } from "react";

export default function AccountPage() {
  const [admin, setAdmin] = useState({
    name: "EcoAdmin",
    secretCode: "ECO-12345",
    password: "********",
  });

  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState(admin);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function saveChanges() {
    setAdmin(form);
    setEditing(false);
  }

  return (
    <div className="max-w-3xl mx-auto mt-24 p-6 bg-white rounded-xl shadow-lg border border-gray-200">
      <h1 className="text-3xl font-bold bg-gradient-to-r from-yellow-500 via-black to-yellow-700 bg-clip-text text-transparent mb-6">
        Admin Account
      </h1>

      {!editing ? (
        <div className="space-y-4 text-black">
          <p>
            <span className="font-semibold text-gray-800">Admin Name:</span>{" "}
            {admin.name}
          </p>
          <p>
            <span className="font-semibold text-gray-800">Secret Code:</span>{" "}
            {admin.secretCode}
          </p>
          <p>
            <span className="font-semibold text-gray-800">Password:</span>{" "}
            {admin.password}
          </p>

          <button
            onClick={() => setEditing(true)}
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            Edit Info
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {/* Admin Name */}
          <div>
            <label className="block text-sm font-semibold text-yellow-600">
              Admin Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-yellow-400 rounded focus:ring-2 focus:ring-yellow-500 text-gray-800"
            />
          </div>

          {/* Secret Code */}
          <div>
            <label className="block text-sm font-semibold text-yellow-600">
              Secret Code
            </label>
            <input
              type="text"
              name="secretCode"
              value={form.secretCode}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-yellow-400 rounded focus:ring-2 focus:ring-yellow-500 text-gray-800"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-semibold text-yellow-600">
              New Password
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-yellow-400 rounded focus:ring-2 focus:ring-yellow-500 text-gray-800"
            />
          </div>

          <div className="flex gap-3 mt-4">
            <button
              onClick={saveChanges}
              className="px-6 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
            >
              Save
            </button>
            <button
              onClick={() => setEditing(false)}
              className="px-6 py-2 bg-gray-400 text-white rounded-lg shadow hover:bg-gray-500 transition"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
