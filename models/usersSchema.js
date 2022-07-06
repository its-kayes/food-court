import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        img: String,
        password: String
    },
    { timestamps: true }
);

export default mongoose.models.User ||
    mongoose.model("User", UsersSchema);