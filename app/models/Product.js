// const { default: mongoose } = require("mongoose");

// const ProductSchema = new mongoose.Schema({
//     productName: { type: String, required: true },
//     previousPrice: { type: Number },
//     currentPrice: { type: Number, required: true },
//     description: { type: String },
//     reviewStars: { type: Number, min: 1, max: 5, default: 1 },
//     numberInStock: { type: Number, min: 1, max: 50, default: 1 },
//   },
//   { timestamps: true }
// )
import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 20,
    },
    description: {
      type: String,
      required: true,
    },
    currentPrice: {
      type: Number,
      required: true,
      min: 0,
    },
    previousPrice: {
      type: Number,
      required: true,
      min: 0,
    },
    countInStock: {
      type: Number,
      required: true,
      min: 1,
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      required: true,
    },
    images: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true }
);

export const Product = mongoose.models.Product || mongoose.model("Product", ProductSchema)