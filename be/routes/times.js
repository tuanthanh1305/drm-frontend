import express from "express";
import Time from "../models/Time.js"; // Import model Time

const router = express.Router();

// Route GET /api/times - Lấy danh sách kỳ học
router.get("/", async (req, res) => {
  try {
    const times = await Time.find(); // Lấy tất cả kỳ học từ DB
    res.json({ success: true, data: times });
  } catch (error) {
    res.status(500).json({ success: false, message: "Lỗi server", error });
  }
});

export default router;
