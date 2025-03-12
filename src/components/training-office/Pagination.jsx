import React from 'react';

const Pagination = () => (
  <div className="p-4 flex justify-between items-center border-t">
    <div className="flex items-center">
      <label className="mr-2" htmlFor="recordsPerPage">Số bản hiển thị</label>
      <select className="border p-2 rounded" id="recordsPerPage">
        <option>3</option>
      </select>
    </div>
    <div>
      <p>Hiển thị 5 trong 5 kết quả</p>
    </div>
    <div className="flex items-center">
      <button className="p-2">«</button>
      <button className="p-2">1</button>
      <button className="p-2">2</button>
      <button className="p-2">...</button>
      <button className="p-2">100</button>
      <button className="p-2">»</button>
    </div>
  </div>
);

export default Pagination;