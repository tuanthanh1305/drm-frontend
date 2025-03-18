import { v4 as uuidv4 } from "uuid";
import ParentCriteria from "../models/ParentCriteria.js";
import ChildCriteria from "../models/ChildCriteria.js";
import ErrorResponse from "../utils/errorResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

//  Lấy tất cả tiêu chí cha
//  GET /api/criteria/parent
export const getParentCriteria = asyncHandler(async (req, res, next) => {
  const criteria = await ParentCriteria.find().sort({ orderIndex: 1 });

  res.status(200).json({
    success: true,
    count: criteria.length,
    data: criteria,
  });
});

//   Lấy một tiêu chí cha
//  GET /api/criteria/parent/:id
export const getParentCriterion = asyncHandler(async (req, res, next) => {
  const criterion = await ParentCriteria.findOne({ id: req.params.id });

  if (!criterion) {
    return next(
      new ErrorResponse(`Không tìm thấy tiêu chí với ID ${req.params.id}`, 404)
    );
  }

  res.status(200).json({
    success: true,
    data: criterion,
  });
});

//   Tạo tiêu chí cha mới
//  POST /api/criteria/parent
export const createParentCriterion = asyncHandler(async (req, res, next) => {
  const { criteriaName, maxScore, note, orderIndex, isActive } = req.body;

  const criterion = await ParentCriteria.create({
    id: uuidv4(),
    criteriaName,
    maxScore,
    note,
    orderIndex,
    isActive: isActive !== undefined ? isActive : 1,
  });

  res.status(201).json({
    success: true,
    data: criterion,
  });
});

//   Cập nhật tiêu chí cha
//  PUT /api/criteria/parent/:id
export const updateParentCriterion = asyncHandler(async (req, res, next) => {
  let criterion = await ParentCriteria.findOne({ id: req.params.id });

  if (!criterion) {
    return next(
      new ErrorResponse(`Không tìm thấy tiêu chí với ID ${req.params.id}`, 404)
    );
  }

  criterion = await ParentCriteria.findOneAndUpdate(
    { id: req.params.id },
    { ...req.body, updatedAt: Date.now() },
    { new: true, runValidators: true }
  );

  res.status(200).json({
    success: true,
    data: criterion,
  });
});

//   Xóa tiêu chí cha
//  DELETE /api/criteria/parent/:id
export const deleteParentCriterion = asyncHandler(async (req, res, next) => {
  const criterion = await ParentCriteria.findOne({ id: req.params.id });

  if (!criterion) {
    return next(
      new ErrorResponse(`Không tìm thấy tiêu chí với ID ${req.params.id}`, 404)
    );
  }

  // Kiểm tra xem có tiêu chí con không
  const childCount = await ChildCriteria.countDocuments({
    parentCriteriaId: req.params.id,
  });

  if (childCount > 0) {
    return next(
      new ErrorResponse(
        `Không thể xóa tiêu chí này vì có ${childCount} tiêu chí con liên quan`,
        400
      )
    );
  }

  await ParentCriteria.deleteOne({ id: req.params.id });

  res.status(200).json({
    success: true,
    data: {},
  });
});

//   Lấy tất cả tiêu chí con
//   GET /api/criteria/child
export const getChildCriteria = asyncHandler(async (req, res, next) => {
  const criteria = await ChildCriteria.find()
    .populate("parentCriteriaId")
    .sort({ orderIndex: 1 });

  res.status(200).json({
    success: true,
    count: criteria.length,
    data: criteria,
  });
});

//   Lấy tiêu chí con theo tiêu chí cha
//   GET /api/criteria/child/parent/:parentId
export const getChildCriteriaByParent = asyncHandler(async (req, res, next) => {
  const criteria = await ChildCriteria.find({
    parentCriteriaId: req.params.parentId,
  }).sort({ orderIndex: 1 });

  res.status(200).json({
    success: true,
    count: criteria.length,
    data: criteria,
  });
});

//   Lấy một tiêu chí con
//   GET /api/criteria/child/:id
export const getChildCriterion = asyncHandler(async (req, res, next) => {
  const criterion = await ChildCriteria.findOne({ id: req.params.id }).populate(
    "parentCriteriaId"
  );

  if (!criterion) {
    return next(
      new ErrorResponse(
        `Không tìm thấy tiêu chí con với ID ${req.params.id}`,
        404
      )
    );
  }

  res.status(200).json({
    success: true,
    data: criterion,
  });
});

//   Tạo tiêu chí con mới
//   POST /api/criteria/child
export const createChildCriterion = asyncHandler(async (req, res, next) => {
  const {
    parentCriteriaId,
    criteriaName,
    maxScore,
    note,
    orderIndex,
    criteriaType,
    isActive,
  } = req.body;

  // Kiểm tra tiêu chí cha tồn tại
  const parentExists = await ParentCriteria.findOne({ id: parentCriteriaId });

  if (!parentExists) {
    return next(
      new ErrorResponse(
        `Không tìm thấy tiêu chí cha với ID ${parentCriteriaId}`,
        404
      )
    );
  }

  const criterion = await ChildCriteria.create({
    id: uuidv4(),
    parentCriteriaId,
    criteriaName,
    maxScore,
    note,
    orderIndex,
    criteriaType,
    isActive: isActive !== undefined ? isActive : 1,
  });

  res.status(201).json({
    success: true,
    data: criterion,
  });
});

//   Cập nhật tiêu chí con
//  PUT /api/criteria/child/:id
export const updateChildCriterion = asyncHandler(async (req, res, next) => {
  let criterion = await ChildCriteria.findOne({ id: req.params.id });

  if (!criterion) {
    return next(
      new ErrorResponse(
        `Không tìm thấy tiêu chí con với ID ${req.params.id}`,
        404
      )
    );
  }

  // Nếu cập nhật parentCriteriaId, kiểm tra tồn tại
  if (req.body.parentCriteriaId) {
    const parentExists = await ParentCriteria.findOne({
      id: req.body.parentCriteriaId,
    });

    if (!parentExists) {
      return next(
        new ErrorResponse(
          `Không tìm thấy tiêu chí cha với ID ${req.body.parentCriteriaId}`,
          404
        )
      );
    }
  }

  criterion = await ChildCriteria.findOneAndUpdate(
    { id: req.params.id },
    { ...req.body, updatedAt: Date.now() },
    { new: true, runValidators: true }
  );

  res.status(200).json({
    success: true,
    data: criterion,
  });
});

//   Xóa tiêu chí con
//  DELETE /api/criteria/child/:id
export const deleteChildCriterion = asyncHandler(async (req, res, next) => {
  const criterion = await ChildCriteria.findOne({ id: req.params.id });

  if (!criterion) {
    return next(
      new ErrorResponse(
        `Không tìm thấy tiêu chí con với ID ${req.params.id}`,
        404
      )
    );
  }

  await ChildCriteria.deleteOne({ id: req.params.id });

  res.status(200).json({
    success: true,
    data: {},
  });
});
