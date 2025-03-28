import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import gigRoutes from "./routes/gigRoutes.js";



dotenv.config();
const app = express();

app.use(cors());
app.use(express.json()); // Parse JSON requests
app.use("/api/gigs", gigRoutes);

// Database connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("📌 MongoDB Connected"))
.catch((err) => console.error(err));

app.get("/", (req, res) => {
  res.send("🚀 Student Freelancing API Running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
