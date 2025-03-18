import mongoose from "mongoose";

const childCriteriaSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  parentCriteriaId: {
    type: String,
    ref: "ParentCriteria",
  },
  criteriaName: {
    type: String,
    required: true,
  },
  maxScore: {
    type: Number,
    required: true,
  },
  note: {
    type: String,
  },
  orderIndex: {
    type: Number,
  },
  criteriaType: {
    type: Number,
  },
  isActive: {
    type: Number,
    default: 1,
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

export default mongoose.model("ChildCriteria", childCriteriaSchema);
