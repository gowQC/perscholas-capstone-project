import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ["shirts", "pants", "footware", "seasonal"],
      required: true,
    },
    size: {
      type: String,
      enum: ["XS", "S", "M", "L", "XL", "XXL"],
      // each size has its own quantity
      XSQuantity: Number,
      SQuantity: Number,
      MQuantity: Number,
      LQuantity: Number,
      XLQuantity: Number,
      XLLQuantity: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0, //no negative prices
    },
    stock: {
      type: Number,
      required: true,
    },
    inStock: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
  },
  {}
);

// indexes
productSchema.index({ category: 1 });

export default mongoose.model("Product", productSchema);
