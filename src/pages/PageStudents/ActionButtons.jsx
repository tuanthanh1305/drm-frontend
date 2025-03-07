import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

const ActionButtons = () => {
  return (
    <div className="flex gap-5 justify-end max-md:flex-wrap max-sm:flex-col max-sm:items-center">
      <button className="flex items-center justify-center gap-2 h-10 px-4 text-lg font-bold text-white bg-blue-500 rounded-xl border border-blue-500 border-solid cursor-pointer w-[220px]">
        <AiOutlineArrowLeft className="text-xl" />
        Xuất file PDF
      </button>
    </div>
  );
};

export default ActionButtons;
