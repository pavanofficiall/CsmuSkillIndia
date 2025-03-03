import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import jobRoutes from "./routes/jobRoutes.js";
import courseRoutes from "./routes/courseRoutes.js";
import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/api/auth", authRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/courses", courseRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
