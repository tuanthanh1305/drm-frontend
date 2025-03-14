import React, { useEffect, useState } from "react";
import api from "../../axios/axios"; 
import Sidebar from "../training-office/Sidebar";
const CanBoLopPage = () => {
  const [classData, setClassData] = useState([]);
  const [selectedYear, setSelectedYear] = useState("Tất cả");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/class"); 
        setClassData(response.data);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu từ API:", error);
      }
    };

    fetchData();
  }, []);

  // Lọc dữ liệu theo năm
  const filteredData =
    selectedYear === "Tất cả"
      ? classData
      : classData.filter((item) => item.year.toString() === selectedYear);

  return (
    <div className="max-w-6xl mx-auto bg-gray-100 p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Danh sách lớp cố vấn học tập phụ trách</h2>

      {/* Dropdown chọn khóa */}
      <div className="mb-4">
        <select
          className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          <option>Tất cả</option>
          {[...new Set(classData.map((item) => item.year.toString()))].map((year, index) => (
            <option key={index}>{year}</option>
          ))}
        </select>
      </div>

      <div className="overflow-x-auto mb-4">
        <table className="min-w-full border bg-white rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-4 text-left">STT</th>
              <th className="border p-4 text-left">Mã lớp</th>
              <th className="border p-4 text-left">Tên lớp</th>
              <th className="border p-4 text-left">Khóa</th>
              <th className="border p-4 text-left">Số sinh viên</th>
              <th className="border p-4 text-left">Cán bộ lớp</th>
              <th className="border p-4 text-left">CBL đánh giá</th>
              <th className="border p-4 text-left">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <tr key={index} className="odd:bg-white even:bg-gray-100 hover:bg-gray-50">
                  <td className="border p-4 text-center">{index + 1}</td>
                  <td className="border p-4 text-center">{item.classId}</td>
                  <td className="border p-4">{item.className}</td>
                  <td className="border p-4 text-center">{item.year}</td>
                  <td className="border p-4 text-center">{item.numStudents}</td>
                  <td className="border p-4">{item.classLeader}</td>
                  <td className="border p-4 text-center text-green-600">{item.evaluation}</td>
                  <td className="border p-4 text-center text-blue-600 underline cursor-pointer">
                    Xem chi tiết
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="border p-4 text-center text-gray-500">
                  Không có dữ liệu
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default CanBoLopPage;
