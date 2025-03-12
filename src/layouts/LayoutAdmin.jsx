
import { Layout } from "antd";
import { Outlet } from "react-router";
import { Content } from "antd/es/layout/layout";

import Headers from "../components/common/Headers";
import Slidebar from "../components/common/Slidebar";


const LayoutAdmin = () => {

  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Slidebar />
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
