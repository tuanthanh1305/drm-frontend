import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import errorHandler from "./middleware/error.js";
import morgan from "morgan";

// Load env vars
dotenv.config();

// Connect to database
connectDB();

// Route files
import authRoutes from "./routes/auth.js";
import studentRoutes from "./routes/students.js";
import scoreRoutes from "./routes/scores.js";
import criteriaRoutes from "./routes/criteria.js";
import timesRoutes from "./routes/times.js"; // Thêm dòng này

const app = express();

// Body parser
app.use(express.json());

// Cookie parser
app.use(cookieParser());

// Dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Cấu hình CORS
app.use(
  cors({
    origin: (origin, callback) => {
      const allowedOrigins = ["http://localhost:3000", "http://localhost:5173"];
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

// Định nghĩa routes
app.use("/api/auth", authRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/scores", scoreRoutes);
app.use("/api/criteria", criteriaRoutes);
app.use("/api/times", timesRoutes); // Thêm dòng này

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "API is running",
    environment: process.env.NODE_ENV,
    version: "1.0.0",
  });
});

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
  console.log(`API available at http://localhost:${PORT}`);
});

process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  console.error("Stack trace:", err.stack);
  server.close(() => process.exit(1));
});

process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.error("Stack trace:", err.stack);
  process.exit(1);
});
