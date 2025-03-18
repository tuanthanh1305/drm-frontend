import Student from "../models/Student.js";
import ErrorResponse from "../utils/errorResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

//  Lấy tất cả sinh viên
// GET /api/students

export const getStudents = asyncHandler(async (req, res, next) => {
  const students = await Student.find().populate("classId");

  res.status(200).json({
    success: true,
    count: students.length,
    data: students,
  });
});

//  Lấy một sinh viên
//  GET /api/students/:id

export const getStudent = asyncHandler(async (req, res, next) => {
  const student = await Student.findOne({ studentId: req.params.id }).populate(
    "classId"
  );

  if (!student) {
    return next(
      new ErrorResponse(`Không tìm thấy sinh viên với ID ${req.params.id}`, 404)
    );
  }

  res.status(200).json({
    success: true,
    data: student,
  });
});

// Tạo sinh viên mới
//  POST /api/students
export const createStudent = asyncHandler(async (req, res, next) => {
  const student = await Student.create(req.body);

  res.status(201).json({
    success: true,
    data: student,
  });
});

// Cập nhật sinh viên
// PUT /api/students/:id
export const updateStudent = asyncHandler(async (req, res, next) => {
  let student = await Student.findOne({ studentId: req.params.id });

  if (!student) {
    return next(
      new ErrorResponse(`Không tìm thấy sinh viên với ID ${req.params.id}`, 404)
    );
  }

  student = await Student.findOneAndUpdate(
    { studentId: req.params.id },
    { ...req.body, updatedAt: Date.now() },
    { new: true, runValidators: true }
  );

  res.status(200).json({
    success: true,
    data: student,
  });
});

// Xóa sinh viên
// DELETE /api/students/:id
export const deleteStudent = asyncHandler(async (req, res, next) => {
  const student = await Student.findOne({ studentId: req.params.id });

  if (!student) {
    return next(
      new ErrorResponse(`Không tìm thấy sinh viên với ID ${req.params.id}`, 404)
    );
  }

  await Student.deleteOne({ studentId: req.params.id });

  res.status(200).json({
    success: true,
    data: {},
  });
});
