import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            minlength: 50
        },
        email: {
            type: String,
            required: true
        },
        img: String,
        password: String
    },
    { timestamps: true }
);

export default mongoose.models.User ||
    mongoose.model("User", UsersSchema);