import React, { useState } from "react";
import { Layout, Table, Input, Select, Button, Space } from "antd";
import { SearchOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import type { ColumnsType } from "antd/es/table";

const { Header, Content } = Layout;
const { Option } = Select;

interface Student {
    key: string;
    msv: string;
    name: string;
    birthDate: string;
    role: string;
    status: string;
}

const studentsData: Student[] = Array.from({ length: 30 }, (_, index) => ({
    key: index.toString(),
    msv: `SV${index % 2 + 1}`,
    name: index % 2 === 0 ? "A" : "B",
    birthDate: "10/10/2004",
    role: "SV",
    status: "✔",
}));

const columns: ColumnsType<Student> = [
    {
        title: "STT",
        dataIndex: "key",
        key: "key",
    },
    {
        title: "MSV",
        dataIndex: "msv",
        key: "msv",
    },
    {
        title: "Họ tên",
        dataIndex: "name",
        key: "name",
    },
    {
        title: "Ngày sinh",
        dataIndex: "birthDate",
        key: "birthDate",
    },
    {
        title: "Vai trò",
        dataIndex: "role",
        key: "role",
    },
    {
        title: "Trạng thái",
        dataIndex: "status",
        key: "status",
    },
    {
        title: "Thao tác",
        key: "actions",
        render: (_, record) => (
            <Space size="middle">
                <Button type="link" icon={<EditOutlined />} onClick={() => console.log("Edit", record.key)} />
                <Button type="link" icon={<DeleteOutlined />} onClick={() => console.log("Delete", record.key)} danger />
            </Space>
        ),
    },
];

const StudentManagementPage: React.FC = () => {
    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Layout>
                <Content style={{ margin: "24px 16px", padding: 24, background: "#fff" }}>
                    <div style={{
                        marginBottom: 16,
                        padding: 16,
                        border: "1px solid #d9d9d9",
                        borderRadius: 8,
                        display: "flex",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        gap: 8
                    }}>
                        <Input placeholder="MSV" style={{ width: 120 }} />
                        <Input placeholder="Tên" style={{ width: 120 }} />
                        <Select placeholder="Vai trò" style={{ width: 120 }}>
                            <Option value="SV">SV</Option>
                        </Select>
                        <Select placeholder="Trạng thái" style={{ width: 120 }}>
                            <Option value="✔">✔</Option>
                        </Select>
                        <Select placeholder="Chọn khoa" style={{ width: 120 }}>
                            <Option value="CNTT">CNTT</Option>
                        </Select>
                        <Select placeholder="Chọn khóa" style={{ width: 120 }}>
                            <Option value="K71">K71</Option>
                        </Select>
                        <Select placeholder="Chọn lớp" style={{ width: 120 }}>
                            <Option value="K71A">K71A</Option>
                        </Select>
                        <Button type="primary" icon={<SearchOutlined />}>Tìm kiếm</Button>
                    </div>
                    <Table columns={columns} dataSource={studentsData} pagination={{ pageSize: 5 }} />
                </Content>
            </Layout>
        </Layout>
    );
};

export default StudentManagementPage;
