import React, { useState } from "react";
import {
  Table,
  Input,
  Button,
  Modal,
  Form,
  Select,
  Row,
  Col,
} from "antd";

const { Option } = Select;
const AdminPage = () => {
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
    <>

      <div style={{ padding: 24 }}>
        <Row gutter={20}>
          <Col
            style={{
              width: "100%",
              margin: "auto",
            }}
          >
            <Form layout="vertical">
              <Form.Item label="Tên danh mục tiêu chí">
                <Input placeholder="Chỉ tiêu mới..." />
              </Form.Item>
              <div
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Form.Item label="Số điểm tối đa" style={{ width: "35%" }}>
                  <Input placeholder="20" />
                </Form.Item>
                <Form.Item label="Trạng thái" style={{ width: "35%" }}>
                  <Select defaultValue="Chọn trạng thái">
                    <Option value="Hoạt động">Hoạt động</Option>
                    <Option value="Không hoạt động">Không hoạt động</Option>
                  </Select>
                </Form.Item>
              </div>

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
          style={{ marginTop: "20px" }}
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

    </>
  );
};

export default AdminPage;
