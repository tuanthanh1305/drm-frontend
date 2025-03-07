import React from "react";

const TableRow = ({
  index,
  section,
  criteria,
  totalScore,
  hasInput,
  isAlternate,
}) => {
  return (
    <tr className={isAlternate ? "bg-zinc-300" : ""}>
      <td className="p-2.5 text-xl border-b border-solid border-b-black">
        {index}
      </td>
      <td className="p-2.5 text-xl border-b border-solid border-b-black">
        {section}
      </td>
      <td className="p-2.5 text-xl border-b border-solid border-b-black">
        {criteria}
      </td>
      <td className="p-2.5 text-xl border-b border-solid border-b-black">
        {totalScore}
      </td>
      <td className="p-2.5 text-xl border-b border-solid border-b-black">
        {hasInput && (
          <input
            type="text"
            defaultValue=""
            className="p-1.5 w-full text-xl border border-black border-solid h-[35px]"
          />
        )}
      </td>
    </tr>
  );
};

const ScoreTable = () => {
  const tableData = [
    {
      section: "I",
      criteria: "Ý thức học tập (Tối đa 25 điểm)",
      totalScore: "",
      hasInput: false,
    },
    {
      section: "1.1",
      criteria: "Kết quả học tập",
      totalScore: "6",
      hasInput: true,
    },
    { section: "1.2", criteria: "Pototo", totalScore: "8", hasInput: true },
    { section: "1.3", criteria: "Val", totalScore: "6", hasInput: true },
    { section: "1.4", criteria: "Val", totalScore: "6", hasInput: true },
    { section: "1.5", criteria: "Val", totalScore: "6", hasInput: true },
    { section: "1.6", criteria: "Val", totalScore: "6", hasInput: true },
    { section: "1.7", criteria: "Val", totalScore: "6", hasInput: true },
    { section: "1.8", criteria: "Val", totalScore: "8", hasInput: true },
    { section: "1.9", criteria: "Val", totalScore: "10", hasInput: true },
    { section: "1.10", criteria: "Val", totalScore: "10", hasInput: true },
    { section: "1.11", criteria: "Val", totalScore: "10", hasInput: true },
    { section: "1.12", criteria: "Val", totalScore: "10", hasInput: true },
    { section: "1.13", criteria: "Val", totalScore: "10", hasInput: true },
    { section: "1.14", criteria: "Val", totalScore: "10", hasInput: true },
    { section: "1.15", criteria: "Val", totalScore: "10", hasInput: true },
    { section: "1.16", criteria: "Val", totalScore: "10", hasInput: true },
    { section: "1.17", criteria: "Val", totalScore: "10", hasInput: true },
  ];

  return (
    <div className="mb-5 border-2 border-black border-solid max-sm:overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="p-2.5 text-xl font-bold text-left bg-zinc-300">
              STT
            </th>
            <th className="p-2.5 text-xl font-bold text-left bg-zinc-300">
              Mục
            </th>
            <th className="p-2.5 text-xl font-bold text-left bg-zinc-300">
              Tiêu chí
            </th>
            <th className="p-2.5 text-xl font-bold text-left bg-zinc-300">
              Tổng điểm
            </th>
            <th className="p-2.5 text-xl font-bold text-left bg-zinc-300">
              Điểm SV đánh giá
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <TableRow
              key={index}
              index={index + 1}
              section={row.section}
              criteria={row.criteria}
              totalScore={row.totalScore}
              hasInput={row.hasInput}
              isAlternate={index % 2 !== 0}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScoreTable;
