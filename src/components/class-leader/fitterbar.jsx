import React from "react";
import Dropdown from "./dropdow";

function FilterBar() {
  return (
    <div className="flex justify-between items-center p-2.5 mb-5 bg-white border border-black border-solid max-md:flex-col max-md:gap-2.5">
      <div className="flex gap-2.5 max-md:flex-wrap">
        <input
          type="text"
          placeholder="MGV"
          className="p-1.5 border-2 border-black border-solid w-[94px]"
          aria-label="Mã giảng viên"
        />
        <input
          type="text"
          placeholder="Tên"
          className="p-1.5 border-2 border-black border-solid w-[94px]"
          aria-label="Tên giảng viên"
        />
        <Dropdown label="Vai trò" />
        <Dropdown label="Trạng thái" />
      </div>
      <Dropdown label="Chọn khoa" />
    </div>
  );
}

export default FilterBar;
