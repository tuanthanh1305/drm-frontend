import React from "react";

const Sidebar = () => {
  return (
    <nav className="flex flex-col bg-blue-400 border border-black border-solid w-[345px] max-md:w-[280px] max-sm:w-full max-sm:h-auto">
      <div className="flex flex-col items-center p-5 text-white">
        <div className="mb-2.5 bg-white rounded-full border border-black border-solid h-[46px] w-[46px]" />
        <div className="text-sm text-center">
          <p>Nguyen Van A - K71CNTT</p>
          <p>Chức vụ: Sinh viên - E4</p>
        </div>
      </div>
      <div className="mt-5">
        <button className="flex gap-2.5 items-center px-5 py-4 h-20 w-full text-white border border-black border-solid cursor-pointer">
          <i className="ti ti-edit text-xl" />
          <span>Đánh giá điểm cá nhân</span>
        </button>
        <button className="flex gap-2.5 items-center px-5 py-4 h-20 w-full text-white border border-black border-solid cursor-pointer">
          <i className="ti ti-list text-xl" />
          <span>Danh sách điểm</span>
        </button>
      </div>
    </nav>
  );
};

export default Sidebar;
