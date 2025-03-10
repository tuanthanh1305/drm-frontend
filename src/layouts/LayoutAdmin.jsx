import Sidebar from "../components/common/Sidebar";
import Headers from "../components/common/Headers";
import { Layout } from "antd";
import { Outlet } from "react-router";
import { Content } from "antd/es/layout/layout";


const LayoutAdmin = () => {

  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Sidebar />
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

export default LayoutAdmin;
