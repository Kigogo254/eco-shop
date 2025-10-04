
import { NextResponse } from "next/server";
import { mongooseConnect } from "../../lib/mongoose";

import { Product } from "../../models/Product"

// Create Product
// export async function POST(req) {
//   await mongooseConnect();
//   const body = await req.json();
//   const { productName, previousPrice, currentPrice, description, reviewStars, numberInStock } = body;

//   const productDoc = await Product.create({
//     productName,
//     previousPrice,
//     currentPrice,
//     description,
//     reviewStars,
//     numberInStock,
//   });

//   return NextResponse.json(productDoc);
// }

// Get All Products
export async function GET() {
  await mongooseConnect();
  const products = await Product.find();
  return NextResponse.json(products);
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, description, currentPrice, previousPrice, countInStock, rating, images } = body;

    // Validation
    if (!name || name.length > 20) {
      return new Response(JSON.stringify({ error: "Name is required and must be ≤ 20 chars" }), { status: 400 });
    }
    if (!description) {
      return new Response(JSON.stringify({ error: "Description is required" }), { status: 400 });
    }
    if (currentPrice < 0 || previousPrice < 0) {
      return new Response(JSON.stringify({ error: "Prices must be non-negative" }), { status: 400 });
    }
    if (countInStock < 1) {
      return new Response(JSON.stringify({ error: "Count in stock must be at least 1" }), { status: 400 });
    }
    if (rating < 1 || rating > 5) {
      return new Response(JSON.stringify({ error: "Rating must be between 1 and 5" }), { status: 400 });
    }
    if (!images || !Array.isArray(images) || images.length === 0) {
      return new Response(JSON.stringify({ error: "At least one image is required" }), { status: 400 });
    }

    await mongooseConnect();
    const product = await Product.create({
      name,
      description,
      currentPrice,
      previousPrice,
      countInStock,
      rating,
      images,
    });

    return new Response(JSON.stringify(product), { status: 201 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
