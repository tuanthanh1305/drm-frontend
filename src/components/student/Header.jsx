import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-5 py-0 border border-black border-solid bg-zinc-300 h-[60px] max-md:px-2.5 max-md:py-0">
      <div className="flex gap-4 items-center">
        <img
          src="/public/image 1.svg"
          alt="Logo"
          className="h-[37px] w-[37px]"
        />
        <div className="flex flex-col">
          <h1 className="text-base">TRƯỜNG ĐẠI HỌC SƯ PHẠM HÀ NỘI</h1>
          <h2 className="text-base text-blue-800">
            HỆ THỐNG ĐÁNH GIÁ ĐIỂM RÈN LUYỆN
          </h2>
        </div>
      </div>
      <div className="flex gap-5 items-center max-sm:hidden">
        <button aria-label="Search" className="ti ti-search" />
        <button aria-label="Notifications" className="ti ti-bell" />
        <div className="flex gap-1.5 items-center text-sm">
          <span>Nguyen Van A - K71CNTT</span>
          <i className="ti ti-chevron-down" />
        </div>
        <div className="w-10 h-10 bg-white rounded-full border border-black border-solid" />
      </div>
    </header>
  );
};

export default Header;
