import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
    {
        name: String,
        userName: String,
        email: String,
        quantity: Number,
        price: Number
    },
    { timestamps: true }
);

export default mongoose.models.Order ||
    mongoose.model("Order", orderSchema);