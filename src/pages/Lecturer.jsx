import React, { useState } from "react";
import {
  Layout,
  Table,
  Button,
  Input,
  Select,
  Modal,
  Form,
  message,
} from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import Sidebar from "../components/common/Sidebar";
import Headers from "../components/common/Headers";

const { Content } = Layout;
const { Option } = Select;

const Teacher = () => {
  const [data, setData] = useState(
    Array.from({ length: 18 }, (_, index) => ({
      key: index + 1,
      stt: index + 1,
      mgv: `SP-5125${index}`,
      name: `Phan Văn ${String.fromCharCode(65 + (index % 26))}`,
      dob: "02/06/2001",
      role: index % 2 == 0 ? "SV" : "CBL",
      status: index % 2 == 0 ? "Đang đi dạy" : "Nghỉ dạy",
    }))
  );
  const [filters, setFilters] = useState({
    mgv: "",
    name: "",
    role: "",
    status: "",
  });
  const [editingRecord, setEditingRecord] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  const handleDelete = (key) => {
    setData((prev) => prev.filter((item) => item.key !== key));
    message.success("Xóa thành công");
  };

  const handleEdit = (record) => {
    setEditingRecord(record);
    form.setFieldsValue(record);
    setIsModalOpen(true);
  };

  const handleSave = () => {
    form.validateFields().then((values) => {
      setData((prev) =>
        prev.map((item) =>
          item.key === editingRecord.key ? { ...item, ...values } : item
        )
      );
      setIsModalOpen(false);
      message.success("Cập nhật thành công");
    });
  };

  const filteredData = data.filter(
    (item) =>
      item.mgv.includes(filters.mgv) &&
      item.name.includes(filters.name) &&
      (!filters.role || item.role === filters.role) &&
      (!filters.status || item.status === filters.status)
  );

  const columns = [
    { title: "STT", dataIndex: "stt", key: "stt" },
    { title: "MGV", dataIndex: "mgv", key: "mgv" },
    { title: "Họ tên", dataIndex: "name", key: "name" },
    { title: "Ngày sinh", dataIndex: "dob", key: "dob" },
    { title: "Vai trò", dataIndex: "role", key: "role" },
    { title: "Trạng thái", dataIndex: "status", key: "status" },
    {
      title: "Thao tác",
      key: "action",
      render: (_, record) => (
        <>
          <EditOutlined
            style={{ marginRight: 10, cursor: "pointer" }}
            onClick={() => handleEdit(record)}
          />
          <DeleteOutlined
            style={{ cursor: "pointer", color: "red" }}
            onClick={() => handleDelete(record.key)}
          />
        </>
      ),
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout>
        <Content style={{ margin: "16px" }}>
          <div style={{ background: "#fff", padding: 20, borderRadius: 8 }}>
            <div style={{ marginBottom: 16, display: "flex", gap: 8 }}>
              <Input
                placeholder="MGV"
                onChange={(e) =>
                  setFilters({ ...filters, mgv: e.target.value })
                }
              />
              <Input
                placeholder="Tên"
                onChange={(e) =>
                  setFilters({ ...filters, name: e.target.value })
                }
              />
              <Select
                placeholder="Vai trò"
                onChange={(value) => setFilters({ ...filters, role: value })}
                allowClear
              >
                <Option value="SV">SV</Option>
                <Option value="CBL">CBL</Option>
              </Select>
              <Select
                placeholder="Trạng thái"
                onChange={(value) => setFilters({ ...filters, status: value })}
                allowClear
              >
                <Option value="Đang đi dạy">Đang đi dạy</Option>
                <Option value="Nghỉ dạy">Nghỉ dạy</Option>
              </Select>
            </div>
            <Table
              columns={columns}
              dataSource={filteredData}
              pagination={{ pageSize: 5 }}
            />
          </div>
        </Content>
      </Layout>
      <Modal
        title="Chỉnh sửa"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onOk={handleSave}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="mgv"
            label="MGV"
            rules={[{ required: true, message: "Vui lòng nhập MGV" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="name"
            label="Tên"
            rules={[{ required: true, message: "Vui lòng nhập tên" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="dob" label="Ngày sinh">
            <Input />
          </Form.Item>
          <Form.Item name="role" label="Vai trò">
            <Select>
              <Option value="SV">SV</Option>
              <Option value="CBL">CBL</Option>
            </Select>
          </Form.Item>
          <Form.Item name="status" label="Trạng thái">
            <Select>
              <Option value="Đang đi dạy">Đang đi dạy</Option>
              <Option value="Nghỉ dạy">Nghỉ dạy</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </Layout>
  );
};

export default Teacher;
