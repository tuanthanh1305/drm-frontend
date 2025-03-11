import React, { useState, useEffect } from "react";
import { Layout, Table, Input, Button, Form, Select, Modal, Space, message, Row, Col } from "antd";
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import Headers from "../common/Headers";

const { Content } = Layout;
const { Option } = Select;

const generateRandomData = (count) => {
  const names = ["Nguyen Van A", "Tran Thi B", "Le Van C", "Pham Thi D", "Hoang Van E"];
  const statuses = ["Hoạt động", "Không hoạt động"];
  const departments = ["CNTT", "Điện công nghiệp"];

  return Array.from({ length: count }, (_, index) => {
    const randomMSV = `SV${1000 + index}`;
    const randomDate = new Date(
      1995 + Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 12),
      Math.floor(Math.random() * 28) + 1
    )
      .toISOString()
      .split("T")[0];

    return {
      key: index + 1,
      stt: index + 1,
      msv: randomMSV,
      name: names[Math.floor(Math.random() * names.length)],
      date: randomDate,
      status: statuses[Math.floor(Math.random() * statuses.length)],
      department: departments[Math.floor(Math.random() * departments.length)],
    };
  });
};

const Admin = () => {
  const [dataSource, setDataSource] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingRecord, setEditingRecord] = useState(null);
  const [form] = Form.useForm();
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 5,
  });

  const [cvhtClasses, setCvhtClasses] = useState([]); // State to store CVHT classes
  const [evaluationData, setEvaluationData] = useState([]); // State to store evaluation data
  const [isEvaluationModalVisible, setIsEvaluationModalVisible] = useState(false); // State to control evaluation modal visibility

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("studentData"));
    if (savedData) {
      setDataSource(savedData);
    } else {
      setDataSource(generateRandomData(20)); // Generate 20 records for testing
    }
  }, []);

  const handleDelete = (key) => {
    const newData = dataSource.filter((item) => item.key !== key);
    setDataSource(newData);
    localStorage.setItem("studentData", JSON.stringify(newData));
  };

  const handleEdit = (record) => {
    setEditingRecord(record);
    form.setFieldsValue(record);
    setIsModalVisible(true);
  };

  const handleSave = (values) => {
    const updatedDataSource = dataSource.map(item =>
      item.key === editingRecord.key ? { ...item, ...values } : item
    );

    setDataSource(updatedDataSource);
    localStorage.setItem("studentData", JSON.stringify(updatedDataSource));
    setIsModalVisible(false);
    message.success("Lưu thay đổi thành công!");
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  const handleAdd = (values) => {
    const newRecord = { ...values, key: Date.now(), stt: dataSource.length + 1 };
    const newDataSource = [...dataSource, newRecord];
    setDataSource(newDataSource);
    localStorage.setItem("studentData", JSON.stringify(newDataSource));
    message.success("Thêm mới thành công!");
  };

  const handleTableChange = (pagination) => {
    setPagination({
      current: pagination.current,
      pageSize: pagination.pageSize,
    });
  };

  const fetchCvhtClasses = () => {
    // Fetch CVHT classes data (mocked for this example)
    const classes = [
      { key: 1, className: "Class 1", year: 2023 },
      { key: 2, className: "Class 2", year: 2022 },
      { key: 3, className: "Class 3", year: 2021 },
    ];
    setCvhtClasses(classes);
  };

  const fetchEvaluationData = (className) => {
    // Fetch evaluation data for the selected class (mocked for this example)
    const evaluations = [
      { key: 1, student: "Nguyen Van A", score: 85, cblScore: 90 },
      { key: 2, student: "Tran Thi B", score: 78, cblScore: 80 },
    ];
    setEvaluationData(evaluations);
    setIsEvaluationModalVisible(true);
  };

  const cvhtColumns = [
    { title: "Class Name", dataIndex: "className" },
    { title: "Year", dataIndex: "year" },
    {
      title: "Action",
      render: (_text, record) => (
        <Button type="link" onClick={() => fetchEvaluationData(record.className)}>
          View Details
        </Button>
      ),
    },
  ];

  const evaluationColumns = [
    { title: "Student", dataIndex: "student" },
    { title: "Score", dataIndex: "score" },
    { title: "CBL Score", dataIndex: "cblScore" },
  ];

  const columns = [
    { title: "STT", dataIndex: "stt" },
    { title: "MSV", dataIndex: "msv" },
    { title: "Họ và tên", dataIndex: "name" },
    { title: "Ngày sinh", dataIndex: "date" },
    { title: "Trạng thái", dataIndex: "status" },
    { title: "Khoa", dataIndex: "department" },
    {
      title: "Thao tác",
      render: (_text, record) => (
        <Space>
          <Button type="link" icon={<EditOutlined />} onClick={() => handleEdit(record)} />
          <Button type="link" icon={<DeleteOutlined />} danger onClick={() => handleDelete(record.key)} />
        </Space>
      ),
    },
  ];

  return (
    <Layout className="site-layout">
      <Headers />
      <Content style={{ margin: "16px" }}>
        <div style={{ padding: 24 }}>
          {/* Form nhập liệu */}
          <div
            style={{
              border: "1px solid black",
              padding: 20,
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <Form
              layout="vertical"
              style={{ width: "100%", display: "flex", flexDirection: "column", gap: "16px" }}
              form={form}
              onFinish={handleAdd}
            >
              {/* Left side inputs */}
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <Form.Item
                  label="Mã sinh viên"
                  name="msv"
                  rules={[{ required: true, message: "Vui lòng nhập mã sinh viên!" }]} >
                  <Input placeholder="Nhập mã sinh viên..." style={{ width: "150px" }} />
                </Form.Item>

                <Form.Item
                  label="Họ và tên"
                  name="name"
                  rules={[{ required: true, message: "Vui lòng nhập họ và tên!" }]} >
                  <Input placeholder="Nhập tên..." style={{ width: "150px" }} />
                </Form.Item>

                <Form.Item
                  label="Vai trò"
                  name="role"
                  rules={[{ required: true, message: "Vui lòng chọn vai trò!" }]} >
                  <Select defaultValue="Chọn vai trò" style={{ width: "150px" }}>
                    <Option value="Sinh viên">Sinh viên</Option>
                    <Option value="Giảng viên">Giảng viên</Option>
                  </Select>
                </Form.Item>

                <Form.Item
                  label="Trạng thái"
                  name="status"
                  rules={[{ required: true, message: "Vui lòng chọn trạng thái!" }]} >
                  <Select defaultValue="Chọn trạng thái" style={{ width: "150px" }}>
                    <Option value="Hoạt động">Hoạt động</Option>
                    <Option value="Không hoạt động">Không hoạt động</Option>
                  </Select>
                </Form.Item>
              </div>

              <div style={{ display: "flex", gap: "16px", justifyContent: "flex-end", alignItems: "center", marginTop: "-7.3%" }}>
                <Form.Item
                  label="Khoa"
                  name="department"
                  rules={[{ required: true, message: "Vui lòng chọn khoa!" }]} >
                  <Select defaultValue="Chọn khoa" style={{ width: "200px" }}>
                    <Option value="CNTT">Công nghệ thông tin</Option>
                    <Option value="Điện công nghiệp">Điện công nghiệp</Option>
                  </Select>
                </Form.Item>

                <Form.Item style={{ marginBottom: 0 }}>
                  <Button type="primary" htmlType="submit" style={{ width: "150px" }}>
                    Thêm mới
                  </Button>
                </Form.Item>
              </div>
            </Form>
          </div>

          {/* Bảng dữ liệu */}
          <Table
            dataSource={dataSource.slice((pagination.current - 1) * 9, pagination.current * 9)} // Sử dụng 9 dòng trên mỗi trang
            columns={columns}
            pagination={{
              current: pagination.current,
              pageSize: 9, // Hiển thị 9 dòng trên mỗi trang
              total: dataSource.length,
            }}
            onChange={handleTableChange}
            style={{ marginTop: "20px" }}
          />

          {/* CVHT Classes Table */}
          <Button type="primary" onClick={fetchCvhtClasses} style={{ marginTop: "20px" }}>
            Show CVHT Classes
          </Button>
          <Table
            dataSource={cvhtClasses}
            columns={cvhtColumns}
            pagination={false}
            style={{ marginTop: "20px" }}
          />
        </div>
      </Content>

      {/* Modal để sửa thông tin */}
      <Modal
        title="Sửa thông tin"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width={800}
      >
        <Form
          form={form}
          initialValues={editingRecord || undefined}
          onFinish={handleSave}
          onFinishFailed={() => message.error("Vui lòng điền đầy đủ thông tin!")}
          layout="vertical"
        >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item name="msv" label="Mã sinh viên" rules={[{ required: true, message: "Vui lòng nhập mã sinh viên!" }]}>
                <Input />
              </Form.Item>
              <Form.Item name="name" label="Họ và tên" rules={[{ required: true, message: "Vui lòng nhập họ và tên!" }]}>
                <Input />
              </Form.Item>
              <Form.Item name="date" label="Ngày sinh" rules={[{ required: true, message: "Vui lòng nhập ngày sinh!" }]}>
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="status" label="Trạng thái" rules={[{ required: true, message: "Vui lòng chọn trạng thái!" }]}>
                <Select>
                  <Option value="Hoạt động">Hoạt động</Option>
                  <Option value="Không hoạt động">Không hoạt động</Option>
                </Select>
              </Form.Item>
              <Form.Item name="department" label="Khoa" rules={[{ required: true, message: "Vui lòng chọn khoa!" }]}>
                <Select>
                  <Option value="CNTT">Công nghệ thông tin</Option>
                  <Option value="Điện công nghiệp">Điện công nghiệp</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <div style={{ textAlign: "right" }}>
            <Button onClick={handleCancel} style={{ marginRight: "10px" }}>Hủy</Button>
            <Button type="primary" htmlType="submit">Lưu thay đổi</Button>
          </div>
        </Form>
      </Modal>

      {/* Modal để hiển thị chi tiết đánh giá */}
      <Modal
        title="Chi tiết đánh giá"
        visible={isEvaluationModalVisible}
        onCancel={() => setIsEvaluationModalVisible(false)}
        footer={null}
        width={800}
      >
        <Table
          dataSource={evaluationData}
          columns={evaluationColumns}
          pagination={false}
        />
      </Modal>
    </Layout>
  );
};

export default Admin;