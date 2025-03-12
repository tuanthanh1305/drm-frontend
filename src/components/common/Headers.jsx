import React, { useState } from "react";
import { Avatar, Input } from "antd";
import {
  Layout,
  Select,
} from "antd";
import {
  UserOutlined,
  BellOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import Title from "antd/es/typography/Title";
import logo from "../../assets/logo.png";

const { Header } = Layout;

const Headers = () => {
  const [showSearch, setShowSearch] = useState(false);
  const toggleSearch = () => {
    setShowSearch((prev) => !prev);
  };
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
      {/* Logo và tiêu đề */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <Avatar
          size={64}
          src={logo}
          className="logo"
          style={{ marginLeft: "20px", backgroundColor: "white" }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "20px",
          }}
        >
          <Title
            level={5}
            style={{
              color: "white",
              textAlign: "center",
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

      {/* Thanh công cụ bên phải */}
      <div style={{ display: "flex", alignItems: "center", position: "relative" }}>
        {/* Biểu tượng tìm kiếm */}
        <div
          onMouseEnter={() => setShowSearch(true)}
          style={{ position: "relative", paddingRight: "20px" }}
        >
          <SearchOutlined
            style={{ fontSize: "20px", color: "white", cursor: "pointer" }}
            onClick={toggleSearch} // Click để bật/tắt

          />
          {showSearch && (
            <Input
            placeholder="Tìm kiếm..."
            style={{
              position: "absolute",
              top: "50%",
              left: "-220px", // Dịch sang trái
              transform: "translateY(-50%)", // Căn giữa theo chiều dọc
              width: "200px",
              zIndex: 10,
            }}
            autoFocus
          />
          )}
        </div>

        {/* Biểu tượng thông báo */}
        <BellOutlined
          style={{ fontSize: "20px", color: "white", paddingRight: "20px" }}
        />

        {/* Thông tin người dùng */}
        <div style={{ color: "white", float: "right", paddingRight: "20px" }}>
          Nguyen Van A - K7CNTT
        </div>

        {/* Avatar người dùng */}
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
