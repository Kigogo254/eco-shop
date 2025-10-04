"use client";
import { useState, useRef } from "react";
import { useEdgeStore } from "../lib/edgestore";

export default function CreateProductPage() {
  const { edgestore } = useEdgeStore();

  const [form, setForm] = useState({
    name: "",
    description: "",
    currentPrice: "",
    previousPrice: "",
    countInStock: "",
    rating: 1,
  });
  const [urls, setUrls] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (urls.length >= 5) {
      alert("You can upload a maximum of 5 images.");
      return;
    }

    setUploading(true);
    try {
      const res = await edgestore.publicFiles.upload({ file });
      setUrls((prev) => [...prev, res.url]);
    } catch (err) {
      console.error("Upload failed:", err);
      alert("Upload failed. Please try again.");
    } finally {
      setUploading(false);
      // Reset file input so same input can trigger again
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage("");

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, images: urls }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setMessage("✅ Product created successfully!");
      setForm({
        name: "",
        description: "",
        currentPrice: "",
        previousPrice: "",
        countInStock: "",
        rating: 1,
      });
      setUrls([]);
    } catch (err) {
      setMessage("❌ " + err.message);
    } finally {
      setSubmitting(false);
    }
  };

  const removeImage = (index) => {
    setUrls((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Create Product</h1>

      {/* Preview Box */}
      <div className="w-full min-h-[200px] bg-white rounded-2xl border-2 border-gray-300 mb-6 flex items-center justify-center overflow-hidden">
        {urls.length > 0 ? (
          <div className="grid grid-cols-3 gap-3 p-3 overflow-auto w-full">
            {urls.map((url, i) => (
              <div
                key={i}
                className="relative w-32 h-32 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center"
              >
                <img
                  src={url}
                  alt={`Uploaded ${i}`}
                  className="w-full h-full object-cover"
                />
                <button
                  type="button"
                  onClick={() => removeImage(i)}
                  className="absolute top-1 right-1 bg-red-600 text-white rounded-full px-2 text-xs"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        ) : (
          <span className="text-gray-500">
            {uploading ? "Uploading..." : "No image uploaded yet"}
          </span>
        )}
      </div>

      {/* Upload Button */}
      {urls.length < 5 && (
        <label
          className={`cursor-pointer px-6 py-2 mb-6 inline-block rounded-xl text-white ${
            uploading
              ? "bg-green-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {uploading ? "Uploading Image to the database..." : "Upload Image"}
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleFileChange}
            disabled={uploading}
            className="hidden"
          />
        </label>
      )}

      {/* Product Form */}
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-8 m-4 rounded-2xl">
        <label className="text-black font-extrabold">Product Name</label>
        <input
          type="text"
          name="name"
          placeholder="Name (max 20 chars)"
          value={form.name}
          onChange={handleChange}
          maxLength={20}
          required
          className="w-full border p-2 rounded"
        />
        <label className="text-black font-extrabold">Description</label>
        <textarea
          name="description"
          placeholder="Describe the product.."
          value={form.description}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />
        <label className="text-black font-extrabold">Cuurent Price</label>
        <input
          type="number"
          name="currentPrice"
          placeholder="Price after discount"
          value={form.currentPrice}
          onChange={handleChange}
          min="0"
          required
          className="w-full border p-2 rounded"
        />
        <label className="text-black font-extrabold">Previous Price </label>
        <input
          type="number"
          name="previousPrice"
          placeholder="Price before discount"
          value={form.previousPrice}
          onChange={handleChange}
          min="0"
          required
          className="w-full border p-2 rounded"
        />
        <label className="text-black font-extrabold">Stock</label>
        <input
          type="number"
          name="countInStock"
          placeholder="Count in Stock"
          value={form.countInStock}
          onChange={handleChange}
          min="1"
          required
          className="w-full border p-2 rounded"
        />
        <label className="text-black font-extrabold">Rate out of 5</label>
        <select
          name="rating"
          value={form.rating}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        >
          {[1, 2, 3, 4, 5].map((r) => (
            <option key={r} value={r}>
              {r} Star{r > 1 && "s"}
            </option>
          ))}
        </select>
        <button
          type="submit"
          disabled={submitting}
          className="bg-green-600 m-6 text-white px-6 py-2 rounded hover:bg-green-700"
        >
          {submitting ? "Saving Product in Db..." : "Create Product"}
        </button>
      </form>

      {message && <p className="mt-4">{message}</p>}
    </div>
  );
}
