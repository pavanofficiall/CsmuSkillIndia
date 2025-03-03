// routes/courseRoutes.js
import express from "express";
import { getCourses, createCourse } from "../controllers/courseController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();
router.get("/", getCourses);
router.post("/", authMiddleware, createCourse);

export default router;
