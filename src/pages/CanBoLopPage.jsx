import React from "react";

const CanBoLopPage = () => {
  return (
    <div className="max-w-6xl mx-auto bg-gray-100 p-6 rounded-lg shadow-lg">
      {/* Các trường tìm kiếm */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-4">
        <input
          type="text"
          placeholder="MSV"
          className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Tên"
          className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Trạng thái"
          className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>2024</option>
        </select>
        <select className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>Học kỳ</option>
        </select>
      </div>

      {/* Các nút thao tác */}
      <div className="flex justify-between mb-4">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
          Xuất file Excel
        </button>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
          Xem biên bản
        </button>
      </div>

      {/* Bảng dữ liệu */}
      <div className="overflow-x-auto mb-4">
        <table className="min-w-full border bg-white rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-4 text-left">STT</th>
              <th className="border p-4 text-left">MS</th>
              <th className="border p-4 text-left">Họ tên</th>
              <th className="border p-4 text-left">Ngày sinh</th>
              <th className="border p-4 text-left">Tổng</th>
              <th className="border p-4 text-left">Trạng thái</th>
              <th className="border p-4 text-left">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(13)].map((_, index) => (
              <tr key={index} className="odd:bg-white even:bg-gray-100 hover:bg-gray-50">
                <td className="border p-4 text-center">{index + 1}</td>
                <td className="border p-4 text-center">PH31167</td>
                <td className="border p-4">Nguyễn Văn Đông</td>
                <td className="border p-4 text-center">20/01/2003</td>
                <td className="border p-4 text-center">10.0</td>
                <td className="border p-4 text-center text-green-600">Đã xử lý</td>
                <td className="border p-4 text-center text-blue-600 underline cursor-pointer">
                  Xem chi tiết
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Thông tin footer */}
      <div className="flex justify-between items-center p-4 bg-gray-200 rounded-lg">
        <span>Số bản hiển thị: 3</span>
        <span>Hiển thị 5 trong 5 kết quả</span>
      </div>
    </div>
  );
};

export default CanBoLopPage;
