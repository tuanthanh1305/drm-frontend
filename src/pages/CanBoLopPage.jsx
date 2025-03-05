import React from "react";
import { Search, Bell } from "lucide-react";

const CanBoLopPage = () => {
  return (
    <div className="w-[1120px] mx-auto bg-gray-100 p-4 rounded-lg shadow-lg flex">
      <div className="w-1/5 bg-blue-800 text-white p-4 rounded-lg flex flex-col items-center">
        <div className="w-20 h-20 bg-gray-300 rounded-full mb-4"></div>
        <h2 className="text-lg font-bold">Nguyễn Văn Đông - CNTT</h2>
        <span className="text-sm mb-4">Chức vụ: Cán bộ lớp</span>
        <button className="w-full bg-blue-600 p-2 rounded mt-2">Đánh giá điểm cá nhân</button>
        <button className="w-full bg-blue-600 p-2 rounded mt-2">Đánh giá điểm rèn luyện</button>
      </div>

      <div className="w-4/5">
        <div className="flex justify-between items-center bg-blue-600 text-white p-4 rounded-t-lg">
          <div className="flex items-center space-x-4">
            <img src="/logo.png" alt="Logo Trường" className="w-12 h-12" />
            <h1 className="text-lg font-bold">TRƯỜNG ĐẠI HỌC SƯ PHẠM HÀ NỘI</h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Tìm kiếm..."
                className="p-2 rounded text-black w-48"
              />
              <Search className="absolute right-2 top-2 text-gray-600" size={18} />
            </div>
            <Bell className="text-white cursor-pointer" size={24} />
            <span className="text-sm">Nguyễn Văn Đông - CNTT</span>
          </div>
        </div>

        <div className="text-center py-4">
          <h2 className="text-xl font-bold text-blue-600">HỆ THỐNG ĐÁNH GIÁ ĐIỂM RÈN LUYỆN</h2>
        </div>

        <div className="flex space-x-2 p-4">
          <input
            type="text"
            placeholder="MSV"
            className="border p-2 rounded w-1/4"
          />
          <input
            type="text"
            placeholder="Tên"
            className="border p-2 rounded w-1/4"
          />
          <input
            type="text"
            placeholder="Trạng thái"
            className="border p-2 rounded w-1/4"
          />
          <select className="border p-2 rounded w-1/4">
            <option>2024</option>
          </select>
          <select className="border p-2 rounded w-1/4">
            <option>Học kỳ</option>
          </select>
        </div>

        <div className="flex justify-between px-4 py-2">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Xuất file Excel</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Xem biên bản</button>
        </div>
        <div className="overflow-x-auto p-4">
          <table className="min-w-full border bg-white rounded-lg">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">STT</th>
                <th className="border p-2">MS</th>
                <th className="border p-2">Họ tên</th>
                <th className="border p-2">Ngày sinh</th>
                <th className="border p-2">Tổng</th>
                <th className="border p-2">Trạng thái</th>
                <th className="border p-2">Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(13)].map((_, index) => (
                <tr key={index} className="odd:bg-white even:bg-gray-100">
                  <td className="border p-2 text-center">{index + 1}</td>
                  <td className="border p-2 text-center">PH31167</td>
                  <td className="border p-2">Nguyễn Văn Đông</td>
                  <td className="border p-2 text-center">20/01/2003</td>
                  <td className="border p-2 text-center">10.0</td>
                  <td className="border p-2 text-center text-green-600">Đã xử lý</td>
                  <td className="border p-2 text-center text-blue-600 underline cursor-pointer">Xem chi tiết</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-between items-center p-4">
          <span>Số bản hiển thị: 3</span>
          <span>Hiển thị 5 trong 5 kết quả</span>
        </div>
      </div>
    </div>
  );
};

export default CanBoLopPage;
