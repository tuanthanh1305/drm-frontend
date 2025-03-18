import User from "../models/User.js";
import Student from "../models/Student.js";
import Teacher from "../models/Teacher.js";
import ErrorResponse from "../utils/errorResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

// @desc    Đăng ký người dùng
// @route   POST /api/auth/register
// @access  Public
export const register = asyncHandler(async (req, res, next) => {
  const { username, password, role, studentId, teacherId } = req.body;

  // Tạo người dùng
  const user = await User.create({
    username,
    password,
    role,
    studentId,
    teacherId,
  });

  sendTokenResponse(user, 200, res);
});

// @desc    Đăng nhập
// @route   POST /api/auth/login
// @access  Public
export const login = asyncHandler(async (req, res, next) => {
  const { username, password } = req.body;

  // Kiểm tra username và password
  if (!username || !password) {
    return next(
      new ErrorResponse("Vui lòng nhập tên đăng nhập và mật khẩu", 400)
    );
  }

  // Kiểm tra người dùng
  const user = await User.findOne({ username }).select("+password");

  if (!user) {
    return next(new ErrorResponse("Thông tin đăng nhập không hợp lệ", 401));
  }

  // Kiểm tra mật khẩu
  const isMatch = await user.matchPassword(password);

  if (!isMatch) {
    return next(new ErrorResponse("Thông tin đăng nhập không hợp lệ", 401));
  }

  // Lấy thông tin chi tiết của người dùng
  let userDetails = {};

  if (user.role === "student" && user.studentId) {
    const student = await Student.findOne({
      studentId: user.studentId,
    }).populate("classId");
    if (student) {
      userDetails = {
        id: student.studentId,
        name: student.name,
        class: student.classId ? student.classId.className : "",
        role: "Sinh viên",
      };
    }
  } else if (
    (user.role === "teacher" || user.role === "admin") &&
    user.teacherId
  ) {
    const teacher = await Teacher.findOne({ teacherId: user.teacherId });
    if (teacher) {
      userDetails = {
        id: teacher.teacherId,
        name: teacher.name,
        role: user.role === "admin" ? "Admin" : "Giáo viên",
      };
    }
  }

  sendTokenResponse(user, 200, res, userDetails);
});

// @desc    Đăng xuất
// @route   GET /api/auth/logout
// @access  Private
export const logout = asyncHandler(async (req, res, next) => {
  res.cookie("token", "none", {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    data: {},
  });
});

// @desc    Lấy thông tin người dùng hiện tại
// @route   GET /api/auth/me
// @access  Private
export const getMe = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id);

  let userDetails = {};

  if (user.role === "student" && user.studentId) {
    const student = await Student.findOne({
      studentId: user.studentId,
    }).populate("classId");
    if (student) {
      userDetails = {
        id: student.studentId,
        name: student.name,
        class: student.classId ? student.classId.className : "",
        role: "Sinh viên",
      };
    }
  } else if (
    (user.role === "teacher" || user.role === "admin") &&
    user.teacherId
  ) {
    const teacher = await Teacher.findOne({ teacherId: user.teacherId });
    if (teacher) {
      userDetails = {
        id: teacher.teacherId,
        name: teacher.name,
        role: user.role === "admin" ? "Admin" : "Giáo viên",
      };
    }
  }

  res.status(200).json({
    success: true,
    data: {
      _id: user._id,
      username: user.username,
      role: user.role,
      ...userDetails,
    },
  });
});

// Hàm gửi token trong response
const sendTokenResponse = (user, statusCode, res, userDetails = {}) => {
  // Tạo token
  const token = user.getSignedJwtToken();

  const options = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  if (process.env.NODE_ENV === "production") {
    options.secure = true;
  }

  res
    .status(statusCode)
    .cookie("token", token, options)
    .json({
      success: true,
      token,
      user: {
        _id: user._id,
        username: user.username,
        role: user.role,
        ...userDetails,
      },
    });
};
