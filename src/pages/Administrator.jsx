import React from "react";
import {
  Card,
  Form,
  Input,
  InputNumber,
  Select,
  Button,
  Table,
  Space,
} from "antd";
import {
  SearchOutlined,
  RedoOutlined,
  LeftCircleFilled,
  LeftOutlined,
  LeftCircleOutlined,
} from "@ant-design/icons";

const { Option } = Select;

const columns = [
  { title: "STT", dataIndex: "key", key: "key" },
  { title: "Tên tiêu chí", dataIndex: "", key: "" },
  { title: "Kiểu tiêu chí", dataIndex: "", key: "" },
  { title: "Số điểm tối đa", dataIndex: "", key: "" },
  { title: "Thứ tự xuất hiện", dataIndex: "", key: "" },
  { title: "Trang thái", dataIndex: "", key: "" },
  {
    title: "Hành động",
    key: "action",
    render: () => (
      <Space>
        <Button type="">Sửa</Button>
        <Button type="" danger>
          Xóa
        </Button>
      </Space>
    ),
  },
];

const Administrator = () => (
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
          <Select placeholder="Lựa chọn trạng thái" style={{ width: "100%" }}>
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
      <Space style={{ width: "100%", gap: "16px" }}>
        <Form.Item
          // label="Số điểm tối đa"
          style={{ flex: 1, marginLeft: "200px", marginRight: "200px" }}
        >
          <Input placeholder="Tên tiêu chí" style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item style={{ flex: 1 }}>
          <Select placeholder="Lựa chọn trạng thái" style={{ width: "100%" }}>
            <Option value="active">Đang hoạt động</Option>
            <Option value="inactive">Không hoạt động</Option>
          </Select>
        </Form.Item>
      </Space>
    </Form>

    <Table
      columns={columns}
      // dataSource={data}
      pagination={{ pageSize: 10 }}
      rowKey="key"
    />
  </Card>
);

export default Administrator;
