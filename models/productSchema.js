import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    title: String,
    desc: String,
    price: Number,
  },
  { timestamps: true }
);

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);