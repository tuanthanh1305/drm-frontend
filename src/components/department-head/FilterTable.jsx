import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table, Select, Input, Button, Row, Col, Form, Space, Pagination } from "antd";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

const { Option } = Select;

const FilterTable = () => {
  const statusOptions = ["Tất cả", "Đang đi học", "Nghỉ học", "Tạm hoãn", "Đình chỉ"];
  const courseOptions = ["Chọn khóa", "Khóa 2024", "Khóa 2025"];
  const classOptions = ["Chọn lớp", "Lớp A", "Lớp B", "Lớp C"];
  const yearOptions = ["2024 - 2025", "2025 - 2026", "2026 - 2027"];
  const semesterOptions = ["Học Kỳ 1", "Học Kỳ 2", "Học Kỳ 3"];
  const [selected, setSelected] = useState([])

  const [filters, setFilters] = useState({
    status: "Tất cả",
    course: "Chọn khóa",
    class: "Chọn lớp",
    year: "2024 - 2025",
    semester: "Học Kỳ 1",
  });

  const [filteredData, setFilteredData] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["student"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/students");
      return res?.data;
    },
  });

  useEffect(() => {
    if (data) {
      let filtered = data;

      if (filters.status !== "Tất cả") {
        filtered = filtered.filter((student) => student.status === filters.status);
      }
      if (filters.course !== "Chọn khóa") {
        filtered = filtered.filter((student) => student.course === filters.course);
      }
      if (filters.class !== "Chọn lớp") {
        filtered = filtered.filter((student) => student.class === filters.class);
      }
      if (filters.year !== "2024 - 2025") {
        filtered = filtered.filter((student) => student.year === filters.year);
      }
      if (filters.semester !== "Học Kỳ 1") {
        filtered = filtered.filter((student) => student.semester === filters.semester);
      }

      setFilteredData(filtered);
      setPage(1)
    }
  }, [filters, data]);

  const selectedStudents = (mssv, checked) => {
    if (checked) {
      setSelected((prev) => [...prev, mssv]); // Thêm sinh viên vào danh sách
    } else {
      setSelected((prev) => prev.filter((id) => id !== mssv)); // Loại bỏ nếu bỏ chọn
    }
  };

  console.log("Selected students:", selected);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  const columns = [
    {
      title: "",
      dataIndex: "checkbox",
      render: (_, record) => <input type="checkbox"
      checked={selected.includes(record.mssv)}
      onChange={(e)=>selectedStudents(record.mssv,e.target.checked)}/>,
    },
    { title: "STT", dataIndex: "index", render: (_, __, index) => index + 1 },
    { title: "Mã sinh viên", dataIndex: "mssv" },
    { title: "Họ tên", dataIndex: "name" },
    { title: "Ngày sinh", dataIndex: "dob" },
    { title: "Tổng điểm", dataIndex: "score" },
    { title: "Trạng thái", dataIndex: "status" },
    {
      title: "Thao tác",
      dataIndex: "actions",
      render: () => <a href="#">Xem chi tiết</a>,
    },
  ];

  //Hàm xuất file excel
  const exportToExcel = ()=> {
    //Đổi tên các trường dữ liệu
    const formattedData = filteredData.map((student) => ({
      "Mã Sinh Viên": student.mssv,
      "Họ Tên": student.name,
      "Ngày Sinh": student.dob,
      "Tổng Điểm": student.score,
      "Trạng Thái": student.status,
      "Khóa Học": student.course,
      "Lớp": student.class,
      "Năm Học": student.year,
      "Học Kỳ": student.semester,
    }));

    const ws = XLSX.utils.json_to_sheet(formattedData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Students");

    // Ghi file Excel
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const dataBlob = new Blob([excelBuffer], { type: "application/octet-stream" });

     // Lưu file
     saveAs(dataBlob, "students_list.xlsx");
  }

  return (
    <div className="p-4 bg-white border-b">
      {/* Bộ lọc */}
      <Form layout="vertical" className="flex items-center justify-between">
        <Row gutter={[16, 16]}>
          <Col span={6}>
            <Input placeholder="MSSV" />
          </Col>
          <Col span={6}>
            <Input placeholder="Tên" />
          </Col>
          <Col span={6}>
            <Select
              value={filters.status}
              onChange={(value) => setFilters({ ...filters, status: value })}
              style={{ width: "100%" }}
            >
              {statusOptions.map((status) => (
                <Option key={status} value={status}>
                  {status}
                </Option>
              ))}
            </Select>
          </Col>
        </Row>
        <Row gutter={[16, 16]} style={{ marginTop: "10px" }}>
          <Col span={6}>
            <Select
              value={filters.course}
              onChange={(value) => setFilters({ ...filters, course: value })}
              style={{ width: "100%" }}
            >
              {courseOptions.map((course) => (
                <Option key={course} value={course}>
                  {course}
                </Option>
              ))}
            </Select>
          </Col>
          <Col span={6}>
            <Select
              value={filters.class}
              onChange={(value) => setFilters({ ...filters, class: value })}
              style={{ width: "100%" }}
            >
              {classOptions.map((classItem) => (
                <Option key={classItem} value={classItem}>
                  {classItem}
                </Option>
              ))}
            </Select>
          </Col>
          <Col span={6}>
            <Select
              value={filters.year}
              onChange={(value) => setFilters({ ...filters, year: value })}
              style={{ width: "100%" }}
            >
              {yearOptions.map((year) => (
                <Option key={year} value={year}>
                  {year}
                </Option>
              ))}
            </Select>
          </Col>
          <Col span={6}>
            <Select
              value={filters.semester}
              onChange={(value) => setFilters({ ...filters, semester: value })}
              style={{ width: "100%" }}
            >
              {semesterOptions.map((semester) => (
                <Option key={semester} value={semester}>
                  {semester}
                </Option>
              ))}
            </Select>
          </Col>
        </Row>
      </Form>

      {/* Buttons */}
      <Row justify="space-between" style={{ margin: "20px 0" }}>
        <Space>
          <Button type="primary">Biên bản</Button>
          <Button type="primary" onClick={exportToExcel}>Xuất file Excel</Button>
        </Space>
        <Space>
          <Button type="primary">Duyệt sinh viên đã chọn</Button>
          <Button type="primary">Duyệt tất cả</Button>
        </Space>
      </Row>

      {/* Bảng dữ liệu */}
      <Table
        dataSource={filteredData.slice((page - 1) * pageSize, page * pageSize)}
        columns={columns}
        rowKey="mssv"
        bordered
        pagination={false}
      />

      {/* Phân trang */}
      <div className="p-4 flex justify-between items-center bg-white border-t">
        <div className="flex items-center">
          <span className="mr-2">Số bản hiển thị</span>
          <Select value={pageSize} onChange={setPageSize} style={{ width: 80 }}>
            <Option value={5}>5</Option>
            <Option value={10}>10</Option>
            <Option value={20}>20</Option>
          </Select>
        </div>
        <div>
          <p>Hiển thị {filteredData.length} kết quả</p>
        </div>
        <Pagination
          current={page}
          total={filteredData.length}
          pageSize={pageSize}
          onChange={setPage}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
};

export default FilterTable;
