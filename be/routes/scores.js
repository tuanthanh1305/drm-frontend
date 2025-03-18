import express from "express";
import {
  getScores,
  getScoresByStudent,
  getScoreDetails,
  createScore,
  updateScoreDetail,
  getEvaluationCriteria,
} from "../controllers/scoreController.js";
import { protect, authorize } from "../middleware/auth.js";

const router = express.Router();

router.use(protect);

router
  .route("/")
  .get(authorize("admin", "teacher"), getScores)
  .post(createScore);

router.get("/student/:studentId", getScoresByStudent);
router.get("/:scoreId/details", getScoreDetails);
router.put("/detail/:id", updateScoreDetail);
router.get("/criteria/:studentId/:timeId", getEvaluationCriteria);

export default router;
