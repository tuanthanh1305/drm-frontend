 import { InputNumber, Table } from "antd";
 import React from "react";
 // Dữ liệu mẫu
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
     hasInput: "5",
   },
   { section: "1.2", criteria: "Pototo", totalScore: "8", hasInput: "5" },
   { section: "1.3", criteria: "Val", totalScore: "6", hasInput: "7" },
   { section: "1.4", criteria: "Pototo", totalScore: "6", hasInput: "7" },
   { section: "1.5", criteria: "Val", totalScore: "6", hasInput: "7" },
   { section: "1.6", criteria: "Pototo", totalScore: "6", hasInput: "7" },
   { section: "1.7", criteria: "Val", totalScore: "6", hasInput: "7" },
   { section: "1.8", criteria: "Pototo", totalScore: "6", hasInput: "7" },
   { section: "1.9", criteria: "Val", totalScore: "6", hasInput: "7" },
 ];
 
 // Cấu trúc cột của bảng
 const columns = [
   {
     title: "STT",
     dataIndex: "index",
     key: "index",
     align: "center",
   },
   {
     title: "Mục",
     dataIndex: "section",
     key: "section",
     align: "center",
   },
   {
     title: "Tiêu chí",
     dataIndex: "criteria",
     key: "criteria",
   },
   {
     title: "Tổng điểm",
     dataIndex: "totalScore",
     key: "totalScore",
     align: "center",
   },
   {
     title: "Điểm SV đánh giá",
     dataIndex: "hasInput",
     key: "hasInput",
     align: "center",
     render: (value) =>
       value !== false ? (
         <InputNumber min={0} max={10} defaultValue={value} />
       ) : null,
   },
 ];
 
 const ScoreTable = () => {
   return (
     <>
       <Table
         columns={columns}
         dataSource={tableData.map((row, index) => ({
           ...row,
           index: index + 1,
         }))}
         rowClassName={(record, index) => (index % 2 === 0 ? "bg-gray-100" : "")}
         pagination={false}
         style={{ marginTop: 16 }}
       />
     </>
   );
 };
 
 export default ScoreTable;
