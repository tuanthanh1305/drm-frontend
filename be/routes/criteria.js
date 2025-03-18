import express from "express";
import {
  getParentCriteria,
  getParentCriterion,
  createParentCriterion,
  updateParentCriterion,
  deleteParentCriterion,
  getChildCriteria,
  getChildCriteriaByParent,
  getChildCriterion,
  createChildCriterion,
  updateChildCriterion,
  deleteChildCriterion,
} from "../controllers/criteriaController.js";
import { protect, authorize } from "../middleware/auth.js";

const router = express.Router();

router.use(protect);

// Tiêu chí cha
router
  .route("/parent")
  .get(getParentCriteria)
  .post(authorize("admin"), createParentCriterion);

router
  .route("/parent/:id")
  .get(getParentCriterion)
  .put(authorize("admin"), updateParentCriterion)
  .delete(authorize("admin"), deleteParentCriterion);

// Tiêu chí con
router
  .route("/child")
  .get(getChildCriteria)
  .post(authorize("admin"), createChildCriterion);

router.get("/child/parent/:parentId", getChildCriteriaByParent);

router
  .route("/child/:id")
  .get(getChildCriterion)
  .put(authorize("admin"), updateChildCriterion)
  .delete(authorize("admin"), deleteChildCriterion);

export default router;
