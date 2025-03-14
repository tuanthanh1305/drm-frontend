import React from "react";
const ScoreInfo = () => {
  return (
    <>
      <section className="mb-4">
        <p className="p-2.5 bg-[#D96969]">
          Kỳ đánh giá đã qua. Bạn chỉ có thể xem lại thông tin đã điền !
        </p>
      </section>
      <section className="flex gap-5 items-center p-2.5 mb-5 text-black bg-blue-400">
        <p>Điểm TBC hệ 10: 7.54</p>
        <div className="w-0.5 border border-black border-solid bg-zinc-300 h-[19px]" />
        <p>Điểm TBC hệ số 4: 3.00</p>
      </section>
    </>
  );
};

export default ScoreInfo;
