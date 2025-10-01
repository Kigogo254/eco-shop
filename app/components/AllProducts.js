
"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [editProduct, setEditProduct] = useState({
    productName: "",
    previousPrice: "",
    currentPrice: "",
    description: "",
    reviewStars: 1,
    numberInStock: 1,
  });

  const router = useRouter();

  // fetch products
  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await axios.get("/api/products");
        setProducts(res.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  // delete product
  async function deleteProduct(id) {
    if (!confirm("Are you sure you want to delete this product?")) return;
    setLoading(true);
    await axios.delete(`/api/products/${id}`);
    setProducts((prev) => prev.filter((p) => p._id !== id));
    setLoading(false);
  }

  // start editing
  function startEditing(product) {
    setEditingId(product._id);
    setEditProduct({
      productName: product.productName,
      previousPrice: product.previousPrice,
      currentPrice: product.currentPrice,
      description: product.description,
      reviewStars: product.reviewStars,
      numberInStock: product.numberInStock,
    });
  }

  // save changes
  async function saveEdit(id) {
    setLoading(true);
    const res = await axios.put(`/api/products/${id}`, editProduct);
    setProducts((prev) => prev.map((p) => (p._id === id ? res.data : p)));
    setEditingId(null);
    setLoading(false);
  }

  // handle input changes
  function handleChange(e) {
    const { name, value } = e.target;
    setEditProduct((prev) => ({
      ...prev,
      [name]:
        name === "reviewStars" || name === "numberInStock"
          ? Number(value)
          : value,
    }));
  }

  return (
    <div className="max-w-7xl mx-auto mb-6 mt-20 px-4 sm:px-6 lg:px-8 space-y-8 text-black bg-gradient-to-br from-black via-white to-yellow-700">
      <h1 className="text-3xl font-bold bg-gradient-to-r from-yellow-500 via-black to-yellow-700 bg-clip-text text-white">
        All Products
      </h1>

      {/* Loading State */}
      {loading ? (
  <div className="flex flex-col items-center justify-center mt-10 text-green-800 font-extrabold animate-pulse space-y-4">
    {/* Spinner */}
    <div className="w-16 h-16 border-4 border-red-800 border-t-transparent rounded-full animate-spin"></div>

    {/* Text */}
    <div className="text-center">
      <p>Fetching all products</p>
      <p className="text-sm font-norma">
        This might take a few seconds, please wait!!
      </p>
    </div>
  </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 p-3 bg-gradient-to-br from-yellow-700 via-yellow-400 to-black">
          {products.map((p) => (
            <div
              key={p._id}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-200"
            >
              {editingId === p._id ? (
                <div className="space-y-4">
                  {/* Product Name */}
                  <label className="block text-sm font-semibold text-yellow-600">
                    Change the Name
                  </label>
                  <input
                    type="text"
                    name="productName"
                    value={editProduct.productName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-yellow-400 rounded focus:ring-2 focus:ring-yellow-500 text-gray-800"
                    placeholder="Product Name"
                  />

                  {/* Previous Price */}
                  <label className="block text-sm font-semibold text-yellow-600">
                    Previous Price
                  </label>
                  <input
                    type="number"
                    name="previousPrice"
                    value={editProduct.previousPrice}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-yellow-400 rounded focus:ring-2 focus:ring-yellow-500 text-gray-800"
                    placeholder="Previous Price"
                  />

                  {/* Current Price */}
                  <label className="block text-sm font-semibold text-yellow-600">
                    Current Price
                  </label>
                  <input
                    type="number"
                    name="currentPrice"
                    value={editProduct.currentPrice}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-yellow-400 rounded focus:ring-2 focus:ring-yellow-500 text-gray-800"
                    placeholder="Current Price"
                  />

                  {/* Description */}
                  <label className="block text-sm font-semibold text-yellow-600">
                    Describe the Product better!
                  </label>
                  <textarea
                    name="description"
                    value={editProduct.description}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-yellow-400 rounded focus:ring-2 focus:ring-yellow-500 text-gray-800"
                    placeholder="Description"
                    rows={3}
                  />

                  {/* Review Stars */}
                  <label className="block text-sm font-semibold text-yellow-600">
                    How are the Sales?
                  </label>
                  <select
                    name="reviewStars"
                    value={editProduct.reviewStars}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-yellow-400 rounded focus:ring-2 focus:ring-yellow-500 text-gray-800"
                  >
                    {[1, 2, 3, 4, 5].map((star) => (
                      <option key={star} value={star}>
                        {star} Star{star > 1 ? "s" : ""}
                      </option>
                    ))}
                  </select>

                  {/* Number in Stock */}
                  <label className="block text-sm font-semibold text-yellow-600">
                    How many in Stock?
                  </label>
                  <input
                    type="number"
                    name="numberInStock"
                    min="1"
                    max="50"
                    value={editProduct.numberInStock}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-yellow-400 rounded focus:ring-2 focus:ring-yellow-500 text-gray-800"
                    placeholder="Number in Stock"
                  />

                  {/* Save/Cancel Buttons */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => saveEdit(p._id)}
                      className="px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setEditingId(null)}
                      className="px-4 py-2 bg-gray-400 text-white rounded-lg shadow hover:bg-gray-500 transition"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  {/* Optimized Image */}
                  <Image
                    src="/dummy-Product.jpg"
                    alt="Product"
                    width={400}
                    height={300}
                    className="w-full aspect-[3/2] object-cover mb-4 rounded-lg"
                  />

                  <h2 className="text-lg font-semibold text-gray-900">
                    {p.productName}
                  </h2>
                  <p className="text-sm text-gray-600">{p.description}</p>
                  <p className="text-sm">
                    💰{" "}
                    <span className="line-through text-red-500">
                      ${p.previousPrice}
                    </span>{" "}
                    <span className="font-bold text-green-600">
                      ${p.currentPrice}
                    </span>
                  </p>
                  <p className="text-sm text-yellow-600">
                    ⭐ {p.reviewStars} / 5
                  </p>
                  <p className="text-sm text-gray-700">
                    Stock: {p.numberInStock}
                  </p>

                  <div className="flex gap-2 mt-3">
                    <button
                      onClick={() => startEditing(p)}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteProduct(p._id)}
                      className="px-4 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 transition"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* CTA Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mt-10">
        <button
          onClick={() => router.push("/create-product")}
          className="px-6 mb-6 py-3 rounded-lg font-medium shadow-md bg-gradient-to-r from-green-500 via-yellow-500 to-black text-white hover:from-black hover:to-yellow-600 transition"
        >
          Create New Product
        </button>
        <button
          onClick={() => router.push("/")}
          className="px-6 mb-6 py-3 rounded-lg font-medium shadow-md bg-gradient-to-r from-black via-blue-500 to-black text-white hover:via-black hover:to-yellow-600 transition"
        >
          Go to Customer&apos;s Site
        </button>
      </div>
    </div>
  );
}
