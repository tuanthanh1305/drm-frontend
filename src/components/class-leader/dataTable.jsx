import React from "react";

function DataTable() {
  const tableData = Array.from({ length: 18 }, (_, index) => ({
    id: index + 1,
    mgv: "SP-51252",
    name: "Phan Văn B",
    dob: "02/06/2001",
    role: index % 2 === 0 ? "SV" : "CBL",
    status: "Đang đi dạy",
  }));

  return (
    <div className="mb-5 border border-black border-solid">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 text-xs text-left border-b border-solid border-b-zinc-300">
              <input type="checkbox" aria-label="Select all" />
            </th>
            <th className="p-2 text-xs text-left border-b border-solid border-b-zinc-300">
              STT
            </th>
            <th className="p-2 text-xs text-left border-b border-solid border-b-zinc-300">
              MGV
            </th>
            <th className="p-2 text-xs text-left border-b border-solid border-b-zinc-300">
              Họ tên
            </th>
            <th className="p-2 text-xs text-left border-b border-solid border-b-zinc-300">
              Ngày sinh
            </th>
            <th className="p-2 text-xs text-left border-b border-solid border-b-zinc-300">
              Vai trò
            </th>
            <th className="p-2 text-xs text-left border-b border-solid border-b-zinc-300">
              Trạng thái
            </th>
            <th className="p-2 text-xs text-left border-b border-solid border-b-zinc-300">
              Thao tác
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={row.id} className={index % 2 === 0 ? "bg-gray-200" : ""}>
              <td className="p-2 text-xs text-left">
                <input type="checkbox" aria-label={`Select row ${row.id}`} />
              </td>
              <td className="p-2 text-xs text-left">{row.id}</td>
              <td className="p-2 text-xs text-left">{row.mgv}</td>
              <td className="p-2 text-xs text-left">{row.name}</td>
              <td className="p-2 text-xs text-left">{row.dob}</td>
              <td className="p-2 text-xs text-left">{row.role}</td>
              <td className="p-2 text-xs text-left">{row.status}</td>
              <td className="flex gap-2.5 p-2 text-xs text-left">
                <button aria-label="Edit" className="ti ti-edit" />
                <button aria-label="Delete" className="ti ti-trash" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
