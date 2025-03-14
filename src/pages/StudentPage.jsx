import React from "react";
import {
  Table,
  InputNumber,
  Card,
  Typography,
  Space,
  Button,
  Select,
  Divider,
} from "antd";
import { EditOutlined, InfoCircleOutlined } from "@ant-design/icons";
import ActionButtons from "../components/student/slidetuan-hung/ActionButtons";
import ScoreInfo from "../components/student/slidetuan-hung/ScoreInfo";
import ScoreTable from "../components/student/slidetuan-hung/ScoreTable";
import NoticeBar from "../components/student/slidetuan-hung/NoticeBar";

const { Text } = Typography;

const StudentPage = () => {
  return (
    <Card style={{}}>
      {/* Hàng trên cùng: Lưu ý + Chọn năm học & học kỳ */}
      <div style={{ border: "1px solid #000", padding: "8px 16px" }}>
        {/* Hàng trên: Lưu ý + Chọn năm học & học kỳ */}
        <Space
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Text>
            Lưu ý: Sinh viên Xem hướng dẫn tại{" "}
            <a href="#" style={{ color: "#1677ff" }}>
              Đây
            </a>
          </Text>

          <Space
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "10px",
            }}
          >
            <Select defaultValue="2023 - 2024" style={{ width: 130 }}>
              <Option value="2023-2024">2023 - 2024</Option>
              <Option value="2022-2023">2022 - 2023</Option>
            </Select>
            <Button>Học Kỳ 1 ▼</Button>
          </Space>
        </Space>

        {/* Hàng dưới: Thời gian đánh giá */}
        <Text>Thời gian đánh giá: 12/12/2024 - 20/12/2024</Text>
      </div>
      <NoticeBar/>
      <ScoreInfo />
      {/* Bảng điểm */}
      <ScoreTable />
      <ActionButtons />
    </Card>
  );
};

export default StudentPage;