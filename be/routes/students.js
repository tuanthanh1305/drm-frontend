import express from "express";
import {
  getStudents,
  getStudent,
  createStudent,
  updateStudent,
  deleteStudent,
} from "../controllers/studentController.js";
import { protect, authorize } from "../middleware/auth.js";

const router = express.Router();

router.use(protect);

router
  .route("/")
  .get(getStudents)
  .post(authorize("admin", "teacher"), createStudent);

router
  .route("/:id")
  .get(getStudent)
  .put(authorize("admin", "teacher"), updateStudent)
  .delete(authorize("admin"), deleteStudent);

export default router;
