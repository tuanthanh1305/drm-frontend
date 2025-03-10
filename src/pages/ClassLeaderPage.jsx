import React, { useState } from "react";
import { Layout, Menu, Table, Dropdown, Button, Input, Select } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import "antd/dist/reset.css";
import Slidebar from "../components/common/SideBar";
import Headers from "../components/common/Header";

const { Header, Sider, Content } = Layout;
const { Option } = Select;

const Teacher = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

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
          <EditOutlined style={{ marginRight: 10, cursor: "pointer" }} />
          <DeleteOutlined style={{ cursor: "pointer", color: "red" }} />
        </>
      ),
    },
  ];

  const data = Array.from({ length: 18 }, (_, index) => ({
    key: index + 1,
    stt: index + 1,
    mgv: "SP-51252",
    name: "Phan Văn B",
    dob: "02/06/2001",
    role: index % 2 === 0 ? "SV" : "CBL",
    status: "Đang đi dạy",
  }));

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Slidebar />
      <Layout>
        <Headers />
        <Content style={{ margin: "16px" }}>
          <div style={{ background: "#fff", padding: 20, borderRadius: 8 }}>
            <div style={{ marginBottom: 16 }}>
              <Input placeholder="MGV" style={{ width: 120, marginRight: 8 }} />
              <Input placeholder="Tên" style={{ width: 120, marginRight: 8 }} />
              <Select
                placeholder="Vai trò"
                style={{ width: 120, marginRight: 8 }}
              >
                <Option value="SV">SV</Option>
                <Option value="CBL">CBL</Option>
              </Select>
              <Select placeholder="Trạng thái" style={{ width: 150 }}>
                <Option value="Đang đi dạy">Đang đi dạy</Option>
                <Option value="Nghỉ dạy">Nghỉ dạy</Option>
              </Select>
            </div>
            <Table
              columns={columns}
              dataSource={data}
              pagination={{ pageSize: 5 }}
            />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Teacher;
