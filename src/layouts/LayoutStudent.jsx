import React from "react";
import Sidebar from "../components/common/student/Sidebar";
import Headers from "../components/common/Headers";
import { Outlet } from "react-router";
import { Content } from "antd/es/layout/layout";
import { Layout } from "antd";
const LayoutStudent = () => {
  return (
    <>
      <Layout className="flex w-full min-h-screen max-sm:flex-col">
        <Sidebar />
        <section className="flex flex-col flex-1 max-sm:w-full">
          <Headers/>
          <Content>
            <Outlet/>
          </Content>
        </section>
      </Layout>
    </>
  );
};

export default LayoutStudent;
