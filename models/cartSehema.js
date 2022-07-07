import mongoose from "mongoose";

const CartSchema = new mongoose.Schema(
  {
    productId:{type: mongoose.Types.ObjectId,ref:"products"},
    quantity:Number
  },
  { timestamps: true }
);

export default mongoose.models.Cart ||
  mongoose.model("Cart", CartSchema);