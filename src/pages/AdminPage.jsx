import React from "react";
import Slidebar from "../components/common/Slidebar";
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
import Admin from "../components/admin/Admin(danhmuc)";
import StudentPage from "./StudentPage";
const { Header, Content, Sider } = Layout;
const { Option } = Select;
const AdminPage = () => {
  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Slidebar />
        {/* <Admin /> */}
        <StudentPage/>
      </Layout>
    </>
  );
};

export default AdminPage;
