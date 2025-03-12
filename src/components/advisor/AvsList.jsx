import React from "react";
import { Table, Input, Select, Space, Button } from "antd";
import LayoutAvs from "./LayoutAvs";

const { Option } = Select;

const AvsList = () => {
  const columns = [
    { title: "STT", dataIndex: "stt", key: "stt", width: 50 },
    { title: "MSV", dataIndex: "msv", key: "msv" },
    { title: "Họ tên", dataIndex: "hoTen", key: "hoTen" },
    { title: "Ngày sinh", dataIndex: "ngaySinh", key: "ngaySinh" },
    { title: "Tổng điểm", dataIndex: "tongDiem", key: "tongDiem" },
    { title: "Trạng thái", dataIndex: "trangThai", key: "trangThai" },
    {
      title: "Thao tác",
      key: "action",
      render: () => <a>Xem chi tiết</a>,
    },
  ];
  const data = Array.from({ length: 30 }, (_, index) => ({
    key: index + 1,
    stt: index + 1,
    msv: "321",
    hoTen: "Nguyễn Văn A",
    ngaySinh: "21/2/2001",
    tongDiem: "9.5",
    trangThai: "Đã xử lý",
  }));

  return (
    <LayoutAvs>
      <div style={{ padding: "10px", background: "#fff", borderRadius: "1px" }}>
        {/* Bộ lọc */}
        <div style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "5px", marginBottom: 10 }}>
          <Space wrap>
            <Input placeholder="MSV" style={{ width: 140 }} />
            <Input placeholder="Tên" style={{ width: 220 }} />
            <Select placeholder="Trạng thái" style={{ width: 150 }}>
              <Option value="all">Tất cả</Option>
              <Option value="pending">Chờ xử lý</Option>
              <Option value="done">Đã xử lý</Option>
            </Select>
            <Select placeholder="Chọn khóa" style={{ width: 150 }}>
              <Option value="k71">K71</Option>
              <Option value="k72">K72</Option>
            </Select>
            <Select placeholder="Chọn lớp" style={{ width: 150 }}>
              <Option value="cntt">CNTT</Option>
              <Option value="sp">Sư phạm</Option>
            </Select>
            <Select defaultValue="2024-2025" style={{ width: 120 }}>
              <Option value="2024-2025">2024-2025</Option>
            </Select>
            <Select defaultValue="1" style={{ width: 100 }}>
              <Option value="1">Học kỳ 1</Option>
              <Option value="2">Học kỳ 2</Option>
            </Select>
          </Space>
        </div>

        {/* Nút thao tác */}
        <div style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "5px" }}>
          <Space style={{ marginBottom: 10 }}>
            <Button type="primary">Biên bản</Button>
            <Button type="primary">Xuất file Excel</Button>
            <Button type="primary" style={{ marginLeft: 300 }}>Duyệt sinh viên đã chọn</Button>
            <Button type="primary" style={{ marginLeft: 150 }}>Duyệt tất cả</Button>
          </Space>

          {/* Bảng dữ liệu */}
          <Table columns={columns} dataSource={data} pagination={{ pageSize: 10 }} bordered />
        </div>
      </div>
    </LayoutAvs>
  );
};

export default AvsList;
