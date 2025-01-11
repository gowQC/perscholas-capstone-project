import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  products: [
    {
      product: {
        // the actual product being put into cart
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      // the amount of the product being put into cart
      quantity: { type: Number, required: true, default: 1 },
    },
  ],
});

export default mongoose.model("Cart", cartSchema);
