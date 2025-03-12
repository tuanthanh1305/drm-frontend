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
import React, { useEffect, useState } from "react";
import { FormOutlined, DeleteOutlined, LeftOutlined } from "@ant-design/icons";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router";

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
    const [form] = Form.useForm();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { id } = useParams();
    console.log(id);
    const [selectedId, setSelectedId] = useState<number | null>(null);

    const showModal = (id: number) => {
        setSelectedId(id);
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
        { title: "MSV", dataIndex: "studentId", key: "studentId" },
        { title: "Họ tên", dataIndex: "name", key: "name" },
        { title: "Ngày sinh", dataIndex: "birthday", key: "birthday" },
        { title: "Vai trò", dataIndex: "role", key: "role" },
        { title: "Trạng thái", dataIndex: "status", key: "status" },
        {
            title: "Thao tác",
            dataIndex: "actions",
            key: "actions",
            render: (_: any, record: any) => {
                return (
                    <Space>
                        <Button onClick={() => showModal(parseInt(record.id))}>
                            <FormOutlined />
                        </Button>
                        <Button>
                            <DeleteOutlined />
                        </Button>
                    </Space>
                );
            },
        },
    ];

    const { data: getDetailStudents } = useQuery({
        queryKey: ["students", selectedId],
        queryFn: async () => {
            const { data } = await axios.get(
                `http://localhost:3000/students/${selectedId}`
            );
            // console.log("check", data);
            return data;
        },
        enabled: isModalOpen,
    });

    const { data: getStudents } = useQuery({
        queryKey: ["students"],
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:3000/students`);
            console.log("check", data);
            return data.map((item: any) => ({ ...item, key: item.id }));
        },
        staleTime: 60000,
    });

    useEffect(() => {
        if (getDetailStudents) {
            form.setFieldsValue(getDetailStudents);
        }
    }, [getDetailStudents, form]);

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
                dataSource={getStudents}
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
                    form={form}
                    initialValues={getDetailStudents}
                >
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                label="Mã sinh viên"
                                name="studentId"
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
