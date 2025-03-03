// models/Course.js
import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema({
  title: String,
  instructor: String,
  duration: String,
  description: String,
});

export default mongoose.model("Course", CourseSchema);
