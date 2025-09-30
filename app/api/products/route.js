
import { NextResponse } from "next/server";
import { mongooseConnect } from "../../lib/mongoose";

import { Product } from "../../models/Product"

// Create Product
export async function POST(req) {
  await mongooseConnect();
  const body = await req.json();
  const { productName, previousPrice, currentPrice, description, reviewStars, numberInStock } = body;

  const productDoc = await Product.create({
    productName,
    previousPrice,
    currentPrice,
    description,
    reviewStars,
    numberInStock,
  });

  return NextResponse.json(productDoc);
}

// Get All Products
export async function GET() {
  await mongooseConnect();
  const products = await Product.find();
  return NextResponse.json(products);
}

