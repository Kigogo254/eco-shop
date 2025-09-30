
import { mongooseConnect } from "../../../lib/mongoose";
import {Product} from "../../../models/Product";

// Delete Product
export async function DELETE(req, context) {
  await mongooseConnect();
  const { id } = context.params;
  await Product.findByIdAndDelete(id);
  return Response.json({ success: true });
}

// Update Product
export async function PUT(req, context) {
  await mongooseConnect();
  const { id } = context.params;
  const body = await req.json();

  const { productName, previousPrice, currentPrice, description, reviewStars, numberInStock } = body;

  const updatedProduct = await Product.findByIdAndUpdate(
    id,
    {
      $set: {
        productName,
        previousPrice,
        currentPrice,
        description,
        reviewStars,
        numberInStock,
      },
    },
    { new: true }
  );

  return Response.json(updatedProduct);
}
