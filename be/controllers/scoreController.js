import { v4 as uuidv4 } from "uuid";
import ScoreStatus from "../models/ScoreStatus.js";
import CriteriaDetail from "../models/CriteriaDetail.js";
import ChildCriteria from "../models/ChildCriteria.js";
import ParentCriteria from "../models/ParentCriteria.js";
import Student from "../models/Student.js";
import Time from "../models/Time.js";
import ErrorResponse from "../utils/errorResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

//  Lấy tất cả điểm
//   GET /api/scores
export const getScores = asyncHandler(async (req, res, next) => {
  const scores = await ScoreStatus.find()
    .populate({
      path: "studentId",
      populate: {
        path: "classId",
      },
    })
    .populate("timeId");

  res.status(200).json({
    success: true,
    count: scores.length,
    data: scores,
  });
});

//   Lấy điểm theo sinh viên
//  GET /api/scores/student/:studentId
export const getScoresByStudent = asyncHandler(async (req, res, next) => {
  const scores = await ScoreStatus.find({
    studentId: req.params.studentId,
  }).populate("timeId");

  res.status(200).json({
    success: true,
    count: scores.length,
    data: scores,
  });
});

//   Lấy chi tiết điểm
//   GET /api/scores/:scoreId/details
export const getScoreDetails = asyncHandler(async (req, res, next) => {
  const details = await CriteriaDetail.find({
    scoreId: req.params.scoreId,
  }).populate({
    path: "childCriteriaId",
    populate: {
      path: "parentCriteriaId",
    },
  });

  res.status(200).json({
    success: true,
    count: details.length,
    data: details,
  });
});

//  Tạo điểm mới
//  POST /api/scores
export const createScore = asyncHandler(async (req, res, next) => {
  const { studentId, timeId, status, criteriaDetails } = req.body;

  // Tạo ID cho điểm
  const scoreId = uuidv4();

  // Tạo bản ghi điểm
  const scoreStatus = await ScoreStatus.create({
    scoreId,
    studentId,
    timeId,
    status: status || 0,
  });

  // Nếu có chi tiết điểm, tạo chúng
  if (criteriaDetails && Array.isArray(criteriaDetails)) {
    const detailsToCreate = criteriaDetails.map((detail) => ({
      id: uuidv4(),
      childCriteriaId: detail.childCriteriaId,
      scoreId,
      proof: detail.proof || "",
      note: detail.note || "",
      studentScore: detail.studentScore,
      moniterScore: detail.moniterScore,
      teacherScore: detail.teacherScore,
    }));

    await CriteriaDetail.insertMany(detailsToCreate);
  }

  res.status(201).json({
    success: true,
    data: scoreStatus,
  });
});

// Cập nhật chi tiết điểm
// PUT /api/scores/detail/:id
export const updateScoreDetail = asyncHandler(async (req, res, next) => {
  let detail = await CriteriaDetail.findOne({ id: req.params.id });

  if (!detail) {
    return next(
      new ErrorResponse(
        `Không tìm thấy chi tiết điểm với ID ${req.params.id}`,
        404
      )
    );
  }

  detail = await CriteriaDetail.findOneAndUpdate(
    { id: req.params.id },
    { ...req.body, updatedAt: Date.now() },
    { new: true, runValidators: true }
  );

  res.status(200).json({
    success: true,
    data: detail,
  });
});

// Lấy tiêu chí đánh giá cho sinh viên
//  GET /api/scores/criteria/:studentId/:timeId
export const getEvaluationCriteria = asyncHandler(async (req, res, next) => {
  const { studentId, timeId } = req.params;

  // Kiểm tra sinh viên và thời gian tồn tại
  const student = await Student.findOne({ studentId });
  const time = await Time.findOne({ id: timeId });

  if (!student) {
    return next(
      new ErrorResponse(`Không tìm thấy sinh viên với ID ${studentId}`, 404)
    );
  }

  if (!time) {
    return next(
      new ErrorResponse(`Không tìm thấy kỳ đánh giá với ID ${timeId}`, 404)
    );
  }

  // Lấy tất cả tiêu chí cha
  const parentCriteria = await ParentCriteria.find({ isActive: 1 }).sort({
    orderIndex: 1,
  });

  // Lấy tất cả tiêu chí con
  const childCriteria = await ChildCriteria.find({ isActive: 1 }).sort({
    orderIndex: 1,
  });

  // Kiểm tra xem sinh viên đã có điểm cho kỳ này chưa
  const existingScore = await ScoreStatus.findOne({ studentId, timeId });

  let criteriaDetails = [];

  if (existingScore) {
    // Nếu đã có điểm, lấy chi tiết
    criteriaDetails = await CriteriaDetail.find({
      scoreId: existingScore.scoreId,
    });
  }

  // Tạo cấu trúc dữ liệu phân cấp
  const result = parentCriteria.map((parent) => {
    const children = childCriteria
      .filter((child) => child.parentCriteriaId === parent.id)
      .map((child) => {
        // Tìm điểm chi tiết nếu có
        const detail = criteriaDetails.find(
          (d) => d.childCriteriaId === child.id
        );

        return {
          id: child.id,
          criteriaName: child.criteriaName,
          maxScore: child.maxScore,
          orderIndex: child.orderIndex,
          criteriaType: child.criteriaType,
          note: child.note,
          studentScore: detail ? detail.studentScore : null,
          moniterScore: detail ? detail.moniterScore : null,
          teacherScore: detail ? detail.teacherScore : null,
          proof: detail ? detail.proof : "",
          detailNote: detail ? detail.note : "",
        };
      });

    return {
      id: parent.id,
      criteriaName: parent.criteriaName,
      maxScore: parent.maxScore,
      orderIndex: parent.orderIndex,
      note: parent.note,
      children,
    };
  });

  res.status(200).json({
    success: true,
    data: {
      parentCriteria: result,
      scoreStatus: existingScore || null,
    },
  });
});
