import React from "react";
import { Avatar } from "antd";
import {
  Layout,
  Menu,
  Breadcrumb,
  Table,
  Input,
  Button,
  Modal,
  Form,
  Select,
  Row,
  Col,
} from "antd";
import {
  UserOutlined,
  DashboardOutlined,
  SolutionOutlined,
  FileTextOutlined,
  BellOutlined,
  SearchOutlined,
  EditOutlined,
  FormOutlined,
} from "@ant-design/icons";
import Title from "antd/es/typography/Title";

const { Header, Content, Sider } = Layout;
const { Option } = Select;
const Sidebar = () => {
  return (
    <Sider
      width={260}
      className="site-layout-background"
      style={{ backgroundColor: "#578FCA" }}
    >
      <div
        className="logo"
        style={{
          padding: "16px",
          color: "white",
          textAlign: "center",
          borderRadius: "50%",
          margin: "auto",
        }}
      >
        <Avatar
          size={64}
          icon={<UserOutlined />}
          src="https://www.w3schools.com/w3css/img_avatar1.png"
        />
        <h2>Nguyen Van A</h2>
        <p>Chức vụ: Cán bộ lớp </p>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        style={{ backgroundColor: "#578FCA", color: "white" }}
      >
        <Menu.Item key="1" icon={<EditOutlined />}>
          Đánh giá điểm cá nhân
        </Menu.Item>
        <Menu.Item key="2" icon={<FormOutlined />}>
          Danh sách điểm
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
