
import { mongooseConnect } from "../../../lib/mongoose";
import {Product} from "../../../models/Product";

// Delete Product
export async function DELETE(req, context) {
  await mongooseConnect();
  const { id } = await context.params;
  await Product.findByIdAndDelete(id);
  return Response.json({ success: true });
}

// Update Product
export async function PUT(req, context) {
  await mongooseConnect();
  const { id } = await context.params;
  const body = await req.json();

  const { productName, previousPrice, currentPrice, description, rating, countInStock } = body;

  const updatedProduct = await Product.findByIdAndUpdate(
    id,
    {
      $set: {
        productName,
        previousPrice,
        currentPrice,
        description,
        rating,
        countInStock,
      },
    },
    { new: true }
  );

  return Response.json(updatedProduct);
}
