import React from "react";
const NoticeBar = () => {
  return (
    <section className="flex justify-between items-center p-4 mb-5 border border-black border-solid max-md:flex-col max-md:gap-2.5 max-sm:p-2.5">
      <div className="flex flex-col gap-2">
        <p>
          <span>Lưu ý: Sinh viên Xem hướng dẫn tại </span>
          <a href="#" className="text-blue-800 underline">
            Đây
          </a>
        </p>
        <p>Thời gian đánh giá: 12/12/2024 -20/12/2024</p>
      </div>
      <div className="flex gap-2.5 items-center">
        <div className="px-4 py-1.5 bg-white border-2 border-yellow-400 border-solid">
          2023 -2024
        </div>
        <button className="px-4 py-1.5 bg-white border-2 border-black border-solid">
          <span>Học Kỳ 1</span>
          <i className="ti ti-chevron-down" />
        </button>
      </div>
    </section>
  );
};

export default NoticeBar;
