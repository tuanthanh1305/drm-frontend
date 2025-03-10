import React, { useState } from "react";
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
import AdminPage from "./pages/AdminPage";

const { Header, Content, Sider } = Layout;
const { Option } = Select;

const App = () => {
  return (
    <AdminPage />
  );
};

export default App;
