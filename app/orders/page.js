"use client";
import { useState } from "react";

export default function OrdersPage() {
  const [orders, setOrders] = useState([
    {
      id: "ORD001",
      user: "John Doe",
      datetime: "2025-09-29 14:32",
      status: "processing", // processing | shipped | cancelled
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
    <div className="max-w-4xl mx-auto mt-24 space-y-8 bg-gradient-to-br from-black via-yellow-400 to-white">
      <h1 className="text-3xl font-bold bg-gradient-to-r from-yellow-500 via-black to-yellow-700 bg-clip-text text-transparent">
        Orders
      </h1>

      {orders.map((order) => (
        <div
          key={order.id}
          className="p-6 bg-white shadow-lg rounded-xl border border-gray-200"
        >
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-yellow-800">
              Order ID: <span className="text-gray-700">{order.id}</span>
            </h2>
            <p className={`font-bold ${getStatusColor(order.status)}`}>
              {order.status.toUpperCase()}
            </p>
          </div>

          <p className="text-sm text-gray-600 mt-1">
            Placed by <span className="font-medium">{order.user}</span> on{" "}
            {order.datetime}
          </p>

          <p className="text-sm text-gray-700 mt-3">
            <span className="font-semibold">Shipping Address:</span>{" "}
            {order.address}
          </p>

          <div className="flex gap-3 mt-4">
            <button
              onClick={() => updateStatus(order.id, "cancelled")}
              className="px-4 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition"
            >
              Cancel
            </button>
            <button
              onClick={() => updateStatus(order.id, "shipped")}
              className="px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
            >
              Process for Shipping
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
