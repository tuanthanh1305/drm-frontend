import React from "react";
import { Layout } from "antd";
import Headers from "../common/Headers";
import Sidebar from "../common/Sidebar";

const { Content } = Layout;

const LayoutAvs = ({ children }) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Sidebar */}
      <Sidebar />

      <Layout>
        {/* Header */}
        <Headers />

        {/* Nội dung chính */}
        <Content style={{ padding: "16px", background: "#f0f2f5" }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutAvs;
