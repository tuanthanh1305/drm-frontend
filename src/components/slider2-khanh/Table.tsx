import {
    Button,
    Col,
    Flex,
    Form,
    Input,
    Modal,
    Row,
    Select,
    Space,
    Table,
    TableColumnsType,
    TableProps,
} from "antd";
import React, { useState } from "react";
import { FormOutlined, DeleteOutlined, LeftOutlined } from "@ant-design/icons";

type TableRowSelection<T extends object = object> =
    TableProps<T>["rowSelection"];

interface DataType {
    key: React.Key;
    stt: string;
    MSV: string;
    name: string;
    birthday: string;
    role: string;
    status: string;
}

const TableStudents = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const columns: TableColumnsType<DataType> = [
        { title: "STT", dataIndex: "stt", key: "stt" },
        { title: "MSV", dataIndex: "MSV", key: "MSV" },
        { title: "Họ tên", dataIndex: "name", key: "name" },
        { title: "Ngày sinh", dataIndex: "birthday", key: "birthday" },
        { title: "Vai trò", dataIndex: "role", key: "role" },
        { title: "Trạng thái", dataIndex: "status", key: "status" },
        {
            title: "Thao tác",
            dataIndex: "actions",
            key: "actions",
            render: (record: any) => (
                <Space>
                    <Button onClick={showModal}>
                        <FormOutlined />
                    </Button>
                    <Button>
                        <DeleteOutlined />
                    </Button>
                </Space>
            ),
        },
    ];

    const dataSource = [
        {
            key: "1",
            MSV: "SV001",
            name: "Nguyễn Văn A",
            birthday: "2000-01-15",
            role: "Sinh viên",
            status: "Đang học",
        },
        {
            key: "2",
            MSV: "SV002",
            name: "Trần Thị B",
            birthday: "2001-05-22",
            role: "Sinh viên",
            status: "Đang học",
        },
        {
            key: "3",
            MSV: "SV003",
            name: "Lê Văn C",
            birthday: "1999-09-10",
            role: "Sinh viên",
            status: "Bảo lưu",
        },
        {
            key: "4",
            MSV: "SV004",
            name: "Phạm Thị D",
            birthday: "2002-03-18",
            role: "Sinh viên",
            status: "Tốt nghiệp",
        },
        {
            key: "5",
            MSV: "SV005",
            name: "Hoàng Văn E",
            birthday: "2000-07-30",
            role: "Sinh viên",
            status: "Đang học",
        },
    ];

    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

    const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
        console.log("selectedRowKeys changed: ", newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection: TableRowSelection<DataType> = {
        selectedRowKeys,
        onChange: onSelectChange,
    };

    return (
        <>
            <Table<DataType>
                style={{ marginTop: "20px" }}
                rowSelection={rowSelection}
                columns={columns}
                dataSource={dataSource}
            />
            <Modal
                title=""
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                width={700}
                okText={
                    <>
                        <LeftOutlined /> Lưu thay đổi
                    </>
                }
                cancelText={
                    <>
                        <LeftOutlined /> Hủy
                    </>
                }
                okButtonProps={{
                    style: {
                        backgroundColor: "rgb(43, 120, 228)",
                        color: "white",
                        width: "132px",
                        borderRadius: "8px",
                    },
                }}
                cancelButtonProps={{
                    style: {
                        backgroundColor: "rgb(204, 0, 0)",
                        color: "white",
                        width: "132px",
                        borderRadius: "8px",
                    },
                }}
            >
                <h1 style={{ textAlign: "center", fontSize: "18px" }}>
                    Sửa thông tin sinh viên
                </h1>
                <Form
                    layout="vertical"
                    labelCol={{ span: 10 }}
                    wrapperCol={{ span: 20 }}
                >
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                label="Mã sinh viên"
                                name="MSV"
                                rules={[{ required: true }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Họ và tên"
                                name="name"
                                rules={[{ required: true }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            {" "}
                            <Form.Item
                                label="Ngày sinh"
                                name="birthday"
                                rules={[{ required: true }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Trạng thái"
                                name="status"
                                rules={[{ required: true }]}
                            >
                                <Select placeholder="Chọn trạng thái">
                                    <Select.Option value="demo">
                                        Demo
                                    </Select.Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                label="Vai trò"
                                name="role"
                                rules={[{ required: true }]}
                            >
                                <Select placeholder="Chọn vai trò">
                                    <Select.Option value="demo">
                                        Demo
                                    </Select.Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={12}></Col>
                    </Row>
                </Form>
            </Modal>
        </>
    );
};

export default TableStudents;
