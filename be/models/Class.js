import mongoose from "mongoose";

const classSchema = new mongoose.Schema({
  classId: {
    type: String,
    required: true,
    unique: true,
  },
  className: {
    type: String,
    required: true,
  },
  teacherId: {
    type: String,
    ref: "Teacher",
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

export default mongoose.model("Class", classSchema);
