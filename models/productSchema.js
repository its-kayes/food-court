import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    title: String,
    category: String,
    desc: String,
    img: String,
    price: Number,
    rating: Number,
    status: Boolean,
  },
  { timestamps: true }
);

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);