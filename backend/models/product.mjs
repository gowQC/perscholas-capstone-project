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
    // each size has its own quantity
    XSQuantity: {
      type: Number,
      required: true,
    },
    SQuantity: {
      type: Number,
      required: true,
    },
    MQuantity: {
      type: Number,
      required: true,
    },
    LQuantity: {
      type: Number,
      required: true,
    },
    XLQuantity: {
      type: Number,
      required: true,
    },
    XXLQuantity: {
      type: Number,
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
    imageUrl: {
      type: String,
      required: true,
    },
    promoted: {
      type: Boolean,
      required: true,
    },
  },
  {}
);

// indexes
productSchema.index({ category: 1, promoted: 1 });

export default mongoose.model("Product", productSchema);
