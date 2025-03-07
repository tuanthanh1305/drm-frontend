import React from "react";
import { Table, Layout, Input, Select, Space, Button } from "antd";
import Headers from "../common/Headers";

const { Content } = Layout;
const { Option } = Select;

const CVHTNam = () => {
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
    hoTen: "ABCdsadasdasdasd",
    ngaySinh: "21/2/2001",
    tongDiem: "9.5",
    trangThai: "Đã xử lý",
  }));
  return (
    <Layout className="site-layout">
      <Headers />
      <Content style={{ padding: "20px", background: "#fff" }}>
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
        <div style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "5px" }} >
        <Space style={{ marginBottom: 10 }}>
        <Button type="primary" style={{ marginRight: 70 }}>Biên bản</Button>
        <Button type="primary" >Xuất file Excel</Button>
        <Button type="primary" style={{ marginLeft: 300 }}>Duyệt sinh viên đã chọn</Button>
        <Button type="primary" style={{ marginLeft: 150 }}>Duyệt tất cả</Button>
      </Space>

      {/* Bảng dữ liệu */}
      <Table columns={columns} dataSource={data} pagination={{ pageSize: 3 }} bordered />
        </div>
      </Content>
    </Layout>
  );
};

export default CVHTNam;
