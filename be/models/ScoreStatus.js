import mongoose from "mongoose";

const scoreStatusSchema = new mongoose.Schema({
  scoreId: {
    type: String,
    required: true,
    unique: true,
  },
  studentId: {
    type: String,
    ref: "Student",
  },
  timeId: {
    type: String,
    ref: "Time",
  },
  status: {
    type: Number,
    default: 0,
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

export default mongoose.model("ScoreStatus", scoreStatusSchema);
