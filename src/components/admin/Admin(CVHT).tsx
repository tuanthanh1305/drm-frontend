import React, { useState } from "react";
import { Avatar, Input, Pagination } from "antd";
import {
  Layout,
  Select,
} from "antd";
import Headers from "../common/Headers";
import { CaretDownOutlined, CaretUpOutlined, SearchOutlined } from "@ant-design/icons";

const { Header, Content, Sider } = Layout;
const { Option } = Select;
const Admin = () => {

  return (
    <>
      <Layout className="site-layout">
        <Headers />
        <Content style={{ margin: "16px" }}>
          <div style={{ padding: 24 }}>
            <div style={{ display: "flex", justifyContent: "right", marginBottom: "30px" }}>
              <Input
                addonBefore={<SearchOutlined />}
                placeholder="search"
                style={{ width: "300px" }}
              />
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", // Responsive theo container width
                gap: "40px", // Khoảng cách giữa các ô
                alignItems: "center", // Căn giữa theo chiều dọc
              }}
            >
              <Input
                placeholder="E2-CNTT"
                style={{ width: "200px" }}
              />
              <Input
                placeholder="E2-CNTT"
                style={{ width: "200px" }}
              />
              <Input
                placeholder="E2-CNTT"
                style={{ width: "200px" }}
              />
              <Input
                placeholder="E2-CNTT"
                style={{ width: "200px" }}
              />
              <Input
                placeholder="E2-CNTT"
                style={{ width: "200px" }}
              />
              <Input
                placeholder="E2-CNTT"
                style={{ width: "200px" }}
              />
              <Input
                placeholder="E2-CNTT"
                style={{ width: "200px" }}
              />
              <Input
                placeholder="E2-CNTT"
                style={{ width: "200px" }}
              />
            </div>
          </div>
          <div>
            <div style={{ marginTop: "30px", display: "flex", justifyContent: "center" }}>
              <Pagination defaultCurrent={6} total={500} />
            </div>
          </div>
        </Content>
      </Layout>
    </>
  );
};

export default Admin;
