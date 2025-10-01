"use client";

import { useState } from "react";

export default function OrdersPage() {
  const [orders, setOrders] = useState([
    {
      id: "ORD001",
      user: "John Doe",
      datetime: "2025-09-29 14:32",
      status: "processing",
      address: "123 Green Street, Springfield",
    },
    {
      id: "ORD002",
      user: "Jane Smith",
      datetime: "2025-09-28 10:15",
      status: "cancelled",
      address: "456 Eco Avenue, Shelbyville",
    },
  ]);

  function updateStatus(id, newStatus) {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === id ? { ...order, status: newStatus } : order
      )
    );
  }

  function getStatusColor(status) {
    if (status === "processing") return "text-green-600";
    if (status === "cancelled") return "text-red-600";
    if (status === "shipped") return "text-blue-600";
    return "text-gray-600";
  }

  return (
    <div className="max-w-5xl mx-auto mt-24 min-h-screen px-4 sm:px-6 md:px-8 bg-gradient-to-br from-yellow-700 via-yellow-400 to-black space-y-8 ">
      <h1 className="text-3xl font-bold  text-white">
        Orders
      </h1>

      {orders.map((order) => (
        <div
          key={order.id}
          className="p-5 sm:p-6 bg-white shadow-md rounded-xl border border-gray-200 space-y-3"
        >
          {/* Top Section: Order ID and Status */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-lg font-semibold text-yellow-800">
              Order ID: <span className="text-gray-700">{order.id}</span>
            </h2>
            <p className={`font-bold mt-2 sm:mt-0 ${getStatusColor(order.status)}`}>
              {order.status.toUpperCase()}
            </p>
          </div>

          {/* User and Date Info */}
          <p className="text-sm text-gray-600">
            Placed by <span className="font-medium">{order.user}</span> on {order.datetime}
          </p>

          {/* Shipping Address */}
          <p className="text-sm text-gray-700">
            <span className="font-semibold">Shipping Address:</span> {order.address}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 mt-3">
            <button
              onClick={() => updateStatus(order.id, "cancelled")}
              className="flex-1 sm:flex-initial min-w-[140px] px-4 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition"
            >
              Cancel
            </button>
            <button
              onClick={() => updateStatus(order.id, "shipped")}
              className="flex-1 sm:flex-initial min-w-[180px] px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
            >
              Process for Shipping
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
