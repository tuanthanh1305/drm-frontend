import React, { useState } from "react";
import { Layout, Menu, Table, Dropdown, Button, Input, Select } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import "antd/dist/reset.css";

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
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{ background: "#3B82F6" }}
        width={250}
      >
        <div
          className="logo"
          style={{ color: "white", padding: 20, textAlign: "center" }}
        >
          {collapsed ? "A" : "Nguyễn Văn A"}
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">Dashboard</Menu.Item>
          <Menu.Item key="2">Quản lý sinh viên</Menu.Item>
          <Menu.Item key="3">Quản lý giảng viên</Menu.Item>
          <Menu.Item key="4">Quản lý danh mục</Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: "#fff", padding: 0 }}>
          <Button
            type="text"
            onClick={toggleCollapsed}
            style={{ fontSize: 16, marginLeft: 20 }}
          >
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button>
        </Header>
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
