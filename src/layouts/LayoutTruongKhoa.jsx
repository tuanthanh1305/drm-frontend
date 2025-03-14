import Sidebar from "../components/common/Sidebar";
import Headers from "../components/common/Headers";
import { Layout } from "antd";
import { Outlet } from "react-router";
import { Content } from "antd/es/layout/layout";
import SidebarTruongKhoa from "../components/training-office/SidebarTruongKhoa";


const LayoutTruongKhoa = () => {

  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <SidebarTruongKhoa />
        <Layout className="site-layout">
          <Headers />
          <Content style={{ margin: "16px" }}>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
      
    </>
  );
};

export default LayoutTruongKhoa;
