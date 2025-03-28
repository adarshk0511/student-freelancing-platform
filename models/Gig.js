import mongoose from "mongoose";

const gigSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  budget: { type: Number, required: true },
  deadline: { type: Date, required: true },
  postedBy: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Gig", gigSchema);
