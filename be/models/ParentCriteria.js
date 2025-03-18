import mongoose from "mongoose";

const parentCriteriaSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
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

export default mongoose.model("ParentCriteria", parentCriteriaSchema);
