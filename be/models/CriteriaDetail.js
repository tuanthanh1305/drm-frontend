import mongoose from "mongoose";

const criteriaDetailSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  childCriteriaId: {
    type: String,
    ref: "ChildCriteria",
  },
  scoreId: {
    type: String,
    ref: "ScoreStatus",
  },
  proof: {
    type: String,
  },
  note: {
    type: String,
  },
  studentScore: {
    type: Number,
  },
  moniterScore: {
    type: Number,
  },
  teacherScore: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("CriteriaDetail", criteriaDetailSchema);
