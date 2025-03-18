import path from "path";
import { fileURLToPath } from "url";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";

// Load env vars
dotenv.config();

// Models
import User from "./models/User.js";
import Student from "./models/Student.js";
import Teacher from "./models/Teacher.js";
import Class from "./models/Class.js";
import Time from "./models/Time.js";
import ParentCriteria from "./models/ParentCriteria.js";
import ChildCriteria from "./models/ChildCriteria.js";
import ScoreStatus from "./models/ScoreStatus.js";
import CriteriaDetail from "./models/CriteriaDetail.js";

// Connect to DB
await mongoose.connect(process.env.MONGO_URI);

// Đường dẫn hiện tại
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Tạo dữ liệu mẫu
const createSampleData = async () => {
  try {
    // Xóa dữ liệu cũ
    await User.deleteMany();
    await Student.deleteMany();
    await Teacher.deleteMany();
    await Class.deleteMany();
    await Time.deleteMany();
    await ParentCriteria.deleteMany();
    await ChildCriteria.deleteMany();
    await ScoreStatus.deleteMany();
    await CriteriaDetail.deleteMany();

    console.log("Dữ liệu cũ đã được xóa");

    // Tạo giáo viên
    const teacherId = "GV001";
    await Teacher.create({
      teacherId,
      name: "Nguyễn Văn B",
      role: 1,
    });

    // Tạo lớp học
    const classId = "K71CNTT";
    await Class.create({
      classId,
      className: "K71 Công nghệ thông tin",
      teacherId,
    });

    // Tạo sinh viên
    const studentId = "12345678";
    await Student.create({
      studentId,
      name: "Nguyễn Văn A",
      dob: new Date("2000-01-01"),
      classId,
      role: 0,
    });

    // Tạo tài khoản
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash("password123", salt);

    await User.create({
      username: "admin",
      password: hashedPassword,
      role: "admin",
      teacherId,
    });

    await User.create({
      username: "student",
      password: hashedPassword,
      role: "student",
      studentId,
    });

    // Tạo kỳ học
    const timeId = "HK12023";
    await Time.create({
      id: timeId,
      semester: 1,
      startYear: 2023,
      endYear: 2024,
      startDate: new Date("2023-09-01"),
      endDate: new Date("2024-01-31"),
      createdBy: "admin",
    });

    // Tạo tiêu chí cha
    const parentId1 = "PC001";
    const parentId2 = "PC002";

    await ParentCriteria.create({
      id: parentId1,
      criteriaName: "Ý thức học tập",
      maxScore: 25,
      orderIndex: 1,
      isActive: 1,
    });

    await ParentCriteria.create({
      id: parentId2,
      criteriaName: "Ý thức và kết quả chấp hành nội quy, quy chế",
      maxScore: 25,
      orderIndex: 2,
      isActive: 1,
    });

    // Tạo tiêu chí con
    const childId1 = "CC001";
    const childId2 = "CC002";
    const childId3 = "CC003";
    const childId4 = "CC004";

    await ChildCriteria.create({
      id: childId1,
      parentCriteriaId: parentId1,
      criteriaName: "Kết quả học tập",
      maxScore: 8,
      orderIndex: 1,
      criteriaType: 1,
      isActive: 1,
    });

    await ChildCriteria.create({
      id: childId2,
      parentCriteriaId: parentId1,
      criteriaName: "Tham gia nghiên cứu khoa học",
      maxScore: 8,
      orderIndex: 2,
      criteriaType: 1,
      isActive: 1,
    });

    await ChildCriteria.create({
      id: childId3,
      parentCriteriaId: parentId2,
      criteriaName: "Chấp hành nội quy, quy chế",
      maxScore: 10,
      orderIndex: 1,
      criteriaType: 1,
      isActive: 1,
    });

    await ChildCriteria.create({
      id: childId4,
      parentCriteriaId: parentId2,
      criteriaName: "Tham gia sinh hoạt lớp, đoàn, hội",
      maxScore: 10,
      orderIndex: 2,
      criteriaType: 1,
      isActive: 1,
    });

    // Tạo bản ghi điểm
    const scoreId = "SCORE001";
    await ScoreStatus.create({
      scoreId,
      studentId,
      timeId,
      status: 0,
    });

    // Tạo chi tiết điểm
    await CriteriaDetail.create({
      id: "CD001",
      childCriteriaId: childId1,
      scoreId,
      proof: "Điểm trung bình học kỳ: 3.5/4.0",
      note: "Đạt kết quả tốt",
      studentScore: 7,
      moniterScore: null,
      teacherScore: null,
    });

    await CriteriaDetail.create({
      id: "CD002",
      childCriteriaId: childId2,
      scoreId,
      proof: "Tham gia đề tài NCKH cấp trường",
      note: "Đạt giải khuyến khích",
      studentScore: 6,
      moniterScore: null,
      teacherScore: null,
    });

    await CriteriaDetail.create({
      id: "CD003",
      childCriteriaId: childId3,
      scoreId,
      proof: "Không vi phạm nội quy, quy chế",
      note: "Chấp hành tốt",
      studentScore: 9,
      moniterScore: null,
      teacherScore: null,
    });

    await CriteriaDetail.create({
      id: "CD004",
      childCriteriaId: childId4,
      scoreId,
      proof: "Tham gia đầy đủ các buổi sinh hoạt",
      note: "Tích cực tham gia",
      studentScore: 8,
      moniterScore: null,
      teacherScore: null,
    });

    console.log("Dữ liệu mẫu đã được tạo");
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

// Gọi hàm tạo dữ liệu mẫu
createSampleData();
