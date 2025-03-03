// models/Job.js
import mongoose from "mongoose";

const JobSchema = new mongoose.Schema({
  title: String,
  company: String,
  location: String,
  salary: String,
  description: String,
  postedAt: { type: Date, default: Date.now },
});

export default mongoose.model("Job", JobSchema);
