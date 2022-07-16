import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
    {
        totalPrice: Number,
        email: String,
        quantity: Number,
        name: String,
        img: String,
        size: Number,
    },
    { timestamps: true }
);

export default mongoose.models.Order ||
    mongoose.model("Order", orderSchema);