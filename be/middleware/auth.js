import jwt from "jsonwebtoken";
import asyncHandler from "../utils/asyncHandler.js";
import ErrorResponse from "../utils/errorResponse.js";
import User from "../models/User.js";

// Bảo vệ routes
export const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    // Lấy token từ header
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies.token) {
    // Lấy token từ cookie
    token = req.cookies.token;
  }

  // Kiểm tra token có tồn tại không
  if (!token) {
    return next(new ErrorResponse("Không có quyền truy cập", 401));
  }

  try {
    // Xác thực token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(decoded.id);

    next();
  } catch (err) {
    return next(new ErrorResponse("Không có quyền truy cập", 401));
  }
});

// Cấp quyền truy cập dựa trên vai trò
export const authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorResponse(
          `Vai trò ${req.user.role} không có quyền truy cập`,
          403
        )
      );
    }
    next();
  };
};
