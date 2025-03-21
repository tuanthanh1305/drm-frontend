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
} from "@ant-design/icons";
import Title from "antd/es/typography/Title";

const { Header, Content, Sider } = Layout;
const { Option } = Select;
const Headers = () => {
  return (
    <Header
      className="site-layout-background "
      style={{
        width: "100%",
        height: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px",
        backgroundColor: "#3674B5",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Avatar
          size={64}
          icon={<UserOutlined />}
          src="https://cdn.haitrieu.com/wp-content/uploads/2021/10/Logo-Dai-hoc-Su-pham-Ha-Noi-HNUE.png"
          className="logo"
          style={{ marginLeft: "20px" }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column", // Hiển thị tiêu đề theo cột
            alignItems: "center", // Căn giữa chữ theo chiều ngang
            justifyContent: "center", // Căn giữa theo chiều dọc
            marginLeft: "20px",
          }}
        >
          <Title
            level={5}
            style={{
              color: "white",
              textAlign: "center", // Căn giữa chữ trong div
              margin: 0,
              lineHeight: "1.5",
            }}
          >
            TRƯỜNG ĐẠI HỌC SƯ PHẠM HÀ NỘI
            <br />
            HỆ THỐNG ĐÁNH GIÁ ĐIỂM RÈN LUYỆN
          </Title>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <SearchOutlined
          style={{ fontSize: "20px", color: "white", paddingRight: "20px" }}
        />
        <BellOutlined
          style={{ fontSize: "20px", color: "white", paddingRight: "20px" }}
        />
        <div style={{ color: "white", float: "right", paddingRight: "20px" }}>
          Nguyen Van A - K7CNTT
        </div>
        <Avatar
          size={64}
          icon={<UserOutlined />}
          src="https://www.w3schools.com/w3css/img_avatar1.png"
          className="logo"
        />
      </div>
    </Header>
  );
};

export default Headers;
