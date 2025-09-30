"use client"
import { useEffect, useState } from "react"
import axios from "axios";
import { useRouter } from "next/navigation";
import { Creating } from "./Creating";

export default function ProductForm() {
  const [productName, setProductName] = useState('');
  const [previousPrice, setPreviousPrice] = useState('');
  const [currentPrice, setCurrentPrice] = useState('');
  const [description, setDescription] = useState('');
  const [reviewStars, setReviewStars] = useState(1);
  const [numberInStock, setNumberInStock] = useState(1);

  const [goToProducts, setGoToProducts] = useState(false);
  const [creating, setCreating] = useState(false);

  const router = useRouter();

  async function createProduct(ev) {
    ev.preventDefault();
    setCreating(true);

    try {
      const data = {
        productName,
        previousPrice,
        currentPrice,
        description,
        reviewStars,
        numberInStock,
      };
      await axios.post("/api/products", data);
      setGoToProducts(true);
    } catch (error) {
      console.error("Error creating product:", error);

      // Grab meaningful error message
      const message =
        error?.response?.data?.error ||
        error?.message ||
        "An unexpected error occurred.";

      // Redirect to errorDisplay with message
      router.push(`/errorDisplay?message=${"Product Field's input not Matching the Organization Rules, Request for Help 0793406784 active now "}`);
      setCreating(false);
    }
  }


  useEffect(() => {
    if (goToProducts) {
      router.push("/products");
    }
  }, [goToProducts, router]);

  if (creating) {
    return <Creating />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center mt-10.5 bg-gradient-to-br from-black via-yellow-400 to-white p-6">
      <form
        onSubmit={createProduct}
        className="w-full max-w-md bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-2xl space-y-4 border border-yellow-300"
      >
        <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-black via-yellow-500 to-black bg-clip-text text-transparent">
          Create Product
        </h2>

        {/* Product Name */}
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-black">Product Name</label>
          <input
            type="text"
            maxLength={16}
            placeholder="Enter product name (max 16 chars)"
            value={productName}
            onChange={e => setProductName(e.target.value)}
            className="px-4 py-2 border border-yellow-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        {/* Previous Price */}
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-black">Previous Price</label>
          <input
            type="number"
            min="10"
            max="100000"
            placeholder="Enter previous price"
            value={previousPrice}
            onChange={e => setPreviousPrice(e.target.value)}
            className="px-4 py-2 border border-yellow-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        {/* Current Price */}
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-black">Current Price</label>
          <input
            type="number"
            min="10"
            max="100000"
            placeholder="Enter current price"
            value={currentPrice}
            onChange={e => setCurrentPrice(e.target.value)}
            className="px-4 py-2 border border-yellow-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        {/* Description */}
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-black">Description</label>
          <textarea
            placeholder="Enter product description"
            value={description}
            onChange={e => setDescription(e.target.value)}
            className="px-4 py-2 border border-yellow-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            rows={3}
          />
        </div>

        {/* Review Stars */}
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-black">Review Stars</label>
          <select
            value={reviewStars}
            onChange={e => setReviewStars(Number(e.target.value))}
            className="px-4 py-2 border border-yellow-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            {[1, 2, 3, 4, 5].map(star => (
              <option key={star} value={star}>
                {star} Star{star > 1 ? "s" : ""}
              </option>
            ))}
          </select>
        </div>

        {/* Number in Stock */}
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-black">Number in Stock</label>
          <input
            type="number"
            min="1"
            max="50"
            value={numberInStock}
            onChange={e => setNumberInStock(Number(e.target.value))}
            className="px-4 py-2 border border-yellow-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-gradient-to-r from-black via-yellow-500 to-black hover:from-yellow-600 hover:via-black hover:to-yellow-600 text-white font-medium rounded-lg shadow-lg transition"
        >
          Create Now
        </button>
      </form>
    </div>
  );
}
