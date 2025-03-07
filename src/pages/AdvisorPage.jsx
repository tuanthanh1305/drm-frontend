import React from "react";
import Sidebar from "../components/common/Sidebar";
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
import CVHTNam from "../components/advisor/CVHTNam";
const { Header, Content, Sider } = Layout;
const { Option } = Select;
const AdvisorPage = () => {
  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Sidebar />
        <CVHTNam />
      </Layout>
    </>
  );
};

export default AdvisorPage;