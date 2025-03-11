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
import Admin from "../components/admin/Admin(students)";

const { Header, Content, Sider } = Layout;
const { Option } = Select;
const StudentPage = () => {
    return (
        <>
            <Layout style={{ minHeight: "100vh" }}>
                <Slidebar />
                <Admin />
            </Layout>
        </>
    );
};

export default StudentPage;
