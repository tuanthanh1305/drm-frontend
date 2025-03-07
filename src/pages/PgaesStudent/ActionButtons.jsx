const ActionButtons = ({ onSubmit }) => {
  return (
    <div className="flex gap-5 justify-center max-md:flex-wrap max-sm:flex-col max-sm:items-center">
      <button className="h-7 text-xl font-bold text-white bg-blue-500 rounded-xl border border-blue-500 border-solid cursor-pointer w-[220px]">
        Lưu
      </button>
      <button className="h-7 text-xl font-bold text-white bg-blue-500 rounded-xl border border-blue-500 border-solid cursor-pointer w-[220px]">
        Nhập lại
      </button>
      <button
        onClick={onSubmit}
        className="h-7 text-xl font-bold text-white bg-blue-500 rounded-xl border border-blue-500 border-solid cursor-pointer w-[220px]"
      >
        Nộp đơn
      </button>
      <button className="h-7 text-xl font-bold text-white bg-blue-500 rounded-xl border border-blue-500 border-solid cursor-pointer w-[220px]">
        Xuất file pdf
      </button>
    </div>
  );
};

export default ActionButtons;
