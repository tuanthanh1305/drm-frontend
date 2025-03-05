import React from 'react';

const Sidebar = () => (
  <div className="bg-blue-600 text-white w-1/5">
    <div className="flex flex-col items-center p-4">
      <div className="w-16 h-16 bg-gray-300 rounded-full mb-4"></div>
      <div className="text-center">
        <p className="font-bold">Nguyễn Văn A - K71CNTT</p>
        <p>Chức vụ: Cán bộ lớp - E4</p>
      </div>
    </div>
    <div className="mt-8">
      <button className="w-full text-left px-6 py-4 hover:bg-blue-900 border border-black bg-blue-700">
        <i className="fa fa-pen"></i>
        <span className='ml-2'>Đánh giá điểm cá nhân</span>
      </button>
      <button className="w-full text-left px-6 py-4 hover:bg-blue-900 border border-black bg-blue-700">
        <i className="fas fa-edit"></i>
        <span className='ml-2'>Đánh giá điểm rèn luyện cấp lớp</span>
      </button>
    </div>
  </div>
);

export default Sidebar;