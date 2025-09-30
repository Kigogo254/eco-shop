const { default: mongoose } = require("mongoose");

const ProductSchema = new mongoose.Schema({
    productName: { type: String, required: true },
    previousPrice: { type: Number },
    currentPrice: { type: Number, required: true },
    description: { type: String },
    reviewStars: { type: Number, min: 1, max: 5, default: 1 },
    numberInStock: { type: Number, min: 1, max: 50, default: 1 },
  },
  { timestamps: true }
)
export const Product = mongoose.models.Product || mongoose.model("Product", ProductSchema)