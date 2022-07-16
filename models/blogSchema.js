import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
  {
    title: String,
    date: String,
    img: String,
    category:String,
    details:String
  },
  { timestamps: true }
);

export default mongoose.models.Blog ||
  mongoose.model("Blog", BlogSchema);