import React, { useState } from "react";
import { Avatar, Space } from "antd";
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
} from "@ant-design/icons";

const { Header, Content, Sider } = Layout;
const { Option } = Select;

const App = () => {
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();
  const [dataSource, setDataSource] = useState([
    {
      key: "1",
      name: "Tiêu chí 1",
      maxScore: 20,
      status: "Hoạt động",
    },
    {
      key: "2",
      name: "Tiêu chí 2",
      maxScore: 30,
      status: "Không hoạt động",
    },
  ]);

  const handleAdd = () => {
    form.validateFields().then((values) => {
      setDataSource([
        ...dataSource,
        {
          key: dataSource.length + 1,
          name: values.criteriaName,
          maxScore: values.maxScore,
          status: values.status,
        },
      ]);
      setVisible(false);
      form.resetFields();
    });
  };

  const columns = [
    {
      title: "Tên tiêu chí",
      dataIndex: "name",
    },
    {
      title: "Số điểm tối đa",
      dataIndex: "maxScore",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
    },
    {
      title: "Thao tác",
      render: (text, record) => <Button type="link">Sửa</Button>,
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider width={260} className="site-layout-background">
        <div
          className="logo"
          style={{
            padding: "16px",
            color: "white",
            textAlign: "center",
            borderRadius: "50%",
            margin: "auto",
          }}
        >
          {/* <img
            src="https://www.w3schools.com/w3css/img_avatar1.png"
            alt=""
            style={{
              borderRadius: "50%",
              width: "30%",
              height: "auto",
            }}
          /> */}
          <Avatar
            size={64}
            icon={<UserOutlined />}
            src="https://www.w3schools.com/w3css/img_avatar1.png"
          />
          <h2>Nguyen Van A</h2>
          <p>Chức vụ: Cán bộ lớp </p>
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<DashboardOutlined />}>
            Dashboard
          </Menu.Item>
          <Menu.Item key="2" icon={<SolutionOutlined />}>
            Quản lý sinh viên
          </Menu.Item>
          <Menu.Item key="3" icon={<SolutionOutlined />}>
            Quản lý giảng viên
          </Menu.Item>
          <Menu.Item key="4" icon={<FileTextOutlined />}>
            Quản lý danh mục
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <div style={{ display: "flex" }}>
            <Avatar
              size={64}
              icon={<UserOutlined />}
              src="https://www.w3schools.com/w3css/img_avatar1.png"
            />
          </div>
          <div style={{ color: "white", float: "right", paddingRight: "20px" }}>
            Nguyen Van A - K7CNTT
          </div>
        </Header>
        <Content style={{ margin: "16px" }}>
          {/* <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
            <Breadcrumb.Item>Quản lý danh mục</Breadcrumb.Item>
          </Breadcrumb> */}
          <div style={{ padding: 24 }}>
            <Row gutter={20}>
              <Col span={8}>
                <Form layout="vertical">
                  <Form.Item label="Tên danh mục tiêu chí">
                    <Input placeholder="Chỉ tiêu mới..." />
                  </Form.Item>
                  <Form.Item label="Số điểm tối đa">
                    <Input placeholder="20" />
                  </Form.Item>
                  <Form.Item label="Trạng thái">
                    <Select defaultValue="Chọn trạng thái">
                      <Option value="Hoạt động">Hoạt động</Option>
                      <Option value="Không hoạt động">Không hoạt động</Option>
                    </Select>
                  </Form.Item>
                  <Button
                    type="primary"
                    style={{ float: "right" }}
                    onClick={() => setVisible(true)}
                  >
                    Lưu thay đổi
                  </Button>
                </Form>
              </Col>
            </Row>

            <Table
              dataSource={dataSource}
              columns={columns}
              pagination={false}
            />

            <Modal
              title="Thêm tiêu chí"
              visible={visible}
              onOk={handleAdd}
              onCancel={() => setVisible(false)}
              footer={[
                <Button key="back" onClick={() => setVisible(false)}>
                  Hủy
                </Button>,
                <Button key="submit" type="primary" onClick={handleAdd}>
                  Lưu thay đổi
                </Button>,
              ]}
            >
              <Form form={form}>
                <Form.Item
                  name="criteriaName"
                  label="Tên tiêu chí"
                  rules={[
                    { required: true, message: "Vui lòng nhập tên tiêu chí!" },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="maxScore"
                  label="Số điểm tối đa"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng nhập số điểm tối đa!",
                    },
                  ]}
                >
                  <Input type="number" />
                </Form.Item>
                <Form.Item
                  name="status"
                  label="Trạng thái"
                  rules={[
                    { required: true, message: "Vui lòng chọn trạng thái!" },
                  ]}
                >
                  <Select defaultValue="Chọn trạng thái">
                    <Option value="Hoạt động">Hoạt động</Option>
                    <Option value="Không hoạt động">Không hoạt động</Option>
                  </Select>
                </Form.Item>
              </Form>
            </Modal>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
