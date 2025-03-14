import {
  DeleteOutlined,
  EditOutlined,
  LeftCircleOutlined,
  LeftOutlined,
} from "@ant-design/icons";
import {
  Button,
  Card,
  Form,
  Input,
  InputNumber,
  Modal,
  Popconfirm,
  Select,
  Space,
  Spin,
  Table,
  message,
} from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";

const { Option } = Select;

const ChildCriteria = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();
  const [editingRecord, setEditingRecord] = useState(null);
  const [filters, setFilters] = useState({ name: "", status: "" });

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/childCriteria");
      setData(response.data);
    } catch (error) {
      message.error("Lỗi khi lấy dữ liệu!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const handleFilter = () => {
    let newData = data;

    if (filters.name) {
      newData = newData.filter((item) =>
        item.criteriaName.toLowerCase().includes(filters.name.toLowerCase())
      );
    }

    if (filters.status !== "") {
      const isActive = filters.status === "active";
      newData = newData.filter((item) => item.isActive === isActive);
    }

    setFilteredData(newData);
  };

  const showModal = (record) => {
    setEditingRecord(record);
    setVisible(true);

    if (record) {
      form.setFieldsValue(record);
    } else {
      form.resetFields();
    }
  };

  const handleCancel = () => {
    setVisible(false);
    setEditingRecord(null);
    form.resetFields();
  };

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();

      if (editingRecord) {
        await axios.put(
          `http://localhost:3000/childCriteria/${editingRecord.id}`,
          values
        );
        setData((prevData) =>
          prevData.map((item) =>
            item.id === editingRecord.id ? { ...item, ...values } : item
          )
        );
        message.success("Cập nhật thành công!");
      } else {
        const response = await axios.post(
          "http://localhost:3000/childCriteria",
          values
        );
        setData((prevData) => [...prevData, response.data]);
        message.success("Thêm mới thành công!");
      }

      handleCancel();
    } catch (error) {
      message.error("Lưu dữ liệu thất bại!");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/childCriteria/${id}`);
      setData((prevData) => prevData.filter((item) => item.id !== id));
      message.success("Xóa thành công!");
    } catch (error) {
      message.error("Xóa thất bại!");
    }
  };

  const columns = [
    {
      title: "STT",
      key: "index",
      render: (_, __, index) => index + 1,
    },
    { title: "Tên tiêu chí", dataIndex: "criteriaName", key: "criteriaName" },
    { title: "Kiểu tiêu chí", dataIndex: "criteriaType", key: "criteriaType" },
    { title: "Số điểm tối đa", dataIndex: "maxScore", key: "maxScore" },
    { title: "Thứ tự xuất hiện", dataIndex: "orderIndex", key: "orderIndex" },
    {
      title: "Trạng thái",
      dataIndex: "isActive",
      key: "isActive",
      render: (isActive) => (
        <span style={{ color: isActive ? "green" : "red" }}>
          {isActive ? "Đang hoạt động" : "Không hoạt động"}
        </span>
      ),
    },
    {
      title: "Hành động",
      key: "action",
      render: (_, record) => (
        <Space>
          <EditOutlined
            style={{ color: "#1890ff", fontSize: "18px", cursor: "pointer" }}
            onClick={() => showModal(record)}
          />
          <Popconfirm
            title="Bạn có chắc chắn muốn xóa không?"
            onConfirm={() => handleDelete(record.id)}
            okText="Có"
            cancelText="Không"
          >
            <DeleteOutlined
              style={{ color: "red", fontSize: "18px", cursor: "pointer" }}
            />
          </Popconfirm>
        </Space>
      ),
    },
  ];
  return (
    <>
      <Card>
        <Space>
          <Button
            style={{ bottom: "15px" }}
            type="primary"
            icon={<LeftCircleOutlined />}
          >
            Quay lại
          </Button>
        </Space>

        <Form
          layout="vertical"
          style={{
            border: "1px solid #d9d9d9",
            borderRadius: 8,
            padding: "16px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Form.Item label="Tên danh mục tiêu chí đánh giá">
            <Input placeholder="Chấp hành nội quy - quy chế - quy định trong nhà trường" />
          </Form.Item>

          <Space style={{ width: "100%", gap: "16px" }}>
            <Form.Item
              label="Số điểm tối đa"
              style={{ flex: 1, marginLeft: "200px", marginRight: "200px" }}
            >
              <InputNumber style={{ width: "100%" }} placeholder="Từ" />
            </Form.Item>

            <Form.Item
              label="Số điểm tối đa"
              colon={false}
              style={{ flex: 1, marginRight: "200px" }}
            >
              <InputNumber style={{ width: "100%" }} placeholder="Đến" />
            </Form.Item>

            <Form.Item label="Trạng thái" style={{ flex: 1 }}>
              <Select
                placeholder="Lựa chọn trạng thái"
                style={{ width: "100%" }}
              >
                <Option value="active">Đang hoạt động</Option>
                <Option value="inactive">Không hoạt động</Option>
              </Select>
            </Form.Item>
          </Space>

          <Form.Item style={{ textAlign: "right", marginRight: "200px" }}>
            <Button
              style={{ marginRight: "20px" }}
              danger
              icon={<LeftCircleOutlined />}
            >
              Xóa danh mục
            </Button>
            <Button type="primary" ghost icon={<LeftCircleOutlined />}>
              Lưu thay đổi
            </Button>
          </Form.Item>
        </Form>
        <Form
          layout="vertical"
          style={{
            border: "1px solid #d9d9d9",
            borderRadius: 8,
            padding: "16px",
            display: "flex",
            flexDirection: "column",
            marginTop: "20px",
          }}
        >
          <Space
            style={{ width: "100%", gap: "10px", justifyContent: "center" }}
          >
            <Form.Item
              style={{ flex: 1, marginTop: "22px", maxWidth: "300px" }}
            >
              <Input
                placeholder="Tên tiêu chí"
                value={filters.name}
                onChange={(e) =>
                  setFilters({ ...filters, name: e.target.value })
                }
                style={{ width: "100%" }}
              />
            </Form.Item>

            <Form.Item
              style={{
                flex: 1,
                marginTop: "22px",
                maxWidth: "300px",
                margin: "0 210px",
              }}
            >
              <Select
                placeholder="Lựa chọn trạng thái"
                value={filters.status}
                onChange={(value) => setFilters({ ...filters, status: value })}
                style={{ width: "100%" }}
              >
                <Option value="">Tất cả</Option>
                <Option value="active">Đang hoạt động</Option>
                <Option value="inactive">Không hoạt động</Option>
              </Select>
            </Form.Item>

            {/* Nút Lọc */}
            <Button
              type="primary"
              onClick={handleFilter}
              style={{ marginTop: "22px", marginBottom: "10px" }}
            >
              Lọc
            </Button>
          </Space>
        </Form>
        {/* Hiển thị bảng dữ liệu với trạng thái loading */}
        <Spin spinning={loading}>
          <Button
            type="primary"
            style={{ margin: "10px 0" }}
            onClick={() => showModal(null)}
          >
            <LeftOutlined style={{ fontSize: "12px" }} /> Thêm tiêu chí
          </Button>

          <Table
            columns={columns}
            dataSource={filteredData}
            pagination={{ pageSize: 10 }}
            rowKey="id"
          />
        </Spin>
      </Card>
      {/* Modal thêm / sửa tiêu chí */}
      <Modal
        open={visible}
        title={
          <div className="text-center font-bold text-xl">
            {editingRecord ? "Chỉnh sửa tiêu chí" : "Thêm tiêu chí"}
          </div>
        }
        onCancel={handleCancel}
        footer={null}
        centered
        width={800}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            label="Tên tiêu chí"
            name="criteriaName"
            rules={[{ required: true, message: "Vui lòng nhập tên tiêu chí!" }]}
          >
            <Input />
          </Form.Item>

          <div className="grid grid-cols-2 gap-4">
            <Form.Item
              label="Kiểu tiêu chí"
              name="criteriaType"
              rules={[
                { required: true, message: "Vui lòng nhập kiểu tiêu chí!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Số điểm tối đa"
              name="maxScore"
              rules={[
                { required: true, message: "Vui lòng nhập số điểm tối đa!" },
                {
                  validator: (_, value) => {
                    if (value < 0) {
                      return Promise.reject("Số điểm không được là số âm!");
                    }
                    if (value > 10) {
                      return Promise.reject(
                        "Số điểm tối đa không thể lớn hơn 10!"
                      );
                    }
                    return Promise.resolve();
                  },
                },
              ]}
            >
              <InputNumber style={{ width: "100%" }} />
            </Form.Item>

            <Form.Item
              label="Thứ tự xuất hiện"
              name="orderIndex"
              rules={[
                {
                  validator: (_, value) => {
                    if (value === undefined || value === null) {
                      return Promise.resolve();
                    }
                    if (!Number.isInteger(value)) {
                      return Promise.reject(
                        "Thứ tự xuất hiện phải là số nguyên!"
                      );
                    }
                    if (value < 0) {
                      return Promise.reject(
                        "Thứ tự xuất hiện không được là số âm!"
                      );
                    }
                    return Promise.resolve();
                  },
                },
              ]}
            >
              <InputNumber style={{ width: "100%" }} />
            </Form.Item>

            <Form.Item label="Trạng thái" name="isActive" initialValue={true}>
              <Select>
                <Option value={true}>Đang hoạt động</Option>
                <Option value={false}>Không hoạt động</Option>
              </Select>
            </Form.Item>
          </div>

          <div className="flex justify-end gap-2">
            <Button danger icon={<LeftOutlined />} onClick={handleCancel}>
              Hủy
            </Button>
            <Button type="primary" onClick={handleSubmit}>
              {editingRecord ? "Lưu thay đổi" : "Thêm tiêu chí"}
            </Button>
          </div>
        </Form>
      </Modal>
    </>
  );
};

export default ChildCriteria;
