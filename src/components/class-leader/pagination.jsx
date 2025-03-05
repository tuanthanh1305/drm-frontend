import React from "react";
import Dropdown from "./dropdow";

function Pagination() {
  const pageOptions = ["3", "5", "10", "20", "50"];

  return (
    <div className="flex justify-between items-center p-2.5 max-sm:flex-col max-sm:gap-2.5">
      <div className="flex gap-2.5 items-center">
        <span>Số bản hiển thị</span>
        <Dropdown label="3" options={pageOptions} />
      </div>

      <div>Hiển thị 5 trong 5 kết quả</div>

      <nav className="flex gap-2.5 items-center" aria-label="Pagination">
        <button aria-label="First page" className="ti ti-chevrons-left" />
        <button aria-label="Previous page" className="ti ti-chevron-left" />

        <button
          className="text-base font-semibold text-sky-400 cursor-pointer"
          aria-current="page"
        >
          1
        </button>
        <button className="text-base font-semibold text-sky-400 cursor-pointer">
          2
        </button>

        <span className="text-base font-semibold text-sky-400">...</span>

        <button className="text-base font-semibold text-sky-400 cursor-pointer">
          100
        </button>

        <button aria-label="Next page" className="ti ti-chevron-right" />
        <button aria-label="Last page" className="ti ti-chevrons-right" />
      </nav>
    </div>
  );
}

export default Pagination;
