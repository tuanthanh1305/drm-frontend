import React from "react";
import {
  Layout,
  Typography,
  Button,
  Form,
  Input,
  Col,
  Row,
  Select,
} from "antd";
import { Option } from "antd/es/mentions";

const { Content } = Layout;

const ScorePage: React.FC = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout>
        <Content style={{ margin: "16px" }}>
          {/* Huge Button */}
          <Row
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              type="primary"
              style={{
                width: "90%",
                height: "50px",
                fontSize: "22px",
                marginBottom: "20px",
              }}
            >
              Tạo biên bản
            </Button>
          </Row>

          {/* Form */}
          <Form layout="vertical">
            <Row gutter={16}>
              {/* Criterion 1 */}
              <Col span={12}>
                <Form.Item>
                  <Typography.Title level={5}>
                    1. Ý thức học tập
                  </Typography.Title>
                  <Select>
                    <Option value="hoctap1">Kết quả học tập</Option>
                    <Option value="hoctap2">
                      Ý thức phấn đấu vươn lên trong học tập
                    </Option>
                    <Option value="hoctap3">Trình độ ngoại ngữ</Option>
                    <Option value="hoctap4">
                      Tham gia các hoạt động học thuật
                    </Option>
                  </Select>
                  <Input
                    placeholder="Nhập điểm"
                    style={{ marginTop: "16px" }}
                  />
                </Form.Item>
              </Col>

              {/* Criterion 2 */}
              <Col span={12}>
                <Form.Item>
                  <Typography.Title level={5}>
                    2. Chấp hành nội quy, quy chế, quy định trong nhà trường
                  </Typography.Title>
                  <Select>
                    <Option value="noiquy1">
                      Chấp hành các văn bản chỉ đạo của các bộ, ban, ngành cấp
                      trên được thực hiện
                    </Option>
                    <Option value="noiquy2">
                      Chấp hành quy chế, quy định nội quy của Trường
                    </Option>
                  </Select>
                  <Input
                    placeholder="Nhập điểm"
                    style={{ marginTop: "16px" }}
                  />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              {/* Criterion 3 */}
              <Col span={12}>
                <Form.Item>
                  <Typography.Title level={5}>
                    3. Tham gia các hoạt động chính trị, xã hội, văn hóa, thể
                    thao
                  </Typography.Title>
                  <Select>
                    <Option value="tghd1">
                      Tham gia các hoạt động chính trị, xã hội
                    </Option>
                    <Option value="tghd2">
                      Tham gia các hoạt động văn hóa, thể thao
                    </Option>
                  </Select>
                  <Input
                    placeholder="Nhập điểm"
                    style={{ marginTop: "16px" }}
                  />
                </Form.Item>

                {/* Criterion 5 under Criterion 3 */}
                <Form.Item>
                  <Typography.Title level={5}>
                    5. Ý thức và kết quả phấn đấu trong học tập, rèn luyện
                  </Typography.Title>
                  <Select>
                    <Option value="phandau1">
                      Giấy chứng nhận, thư khen (cấp khoa và tương đương trở
                      lên)
                    </Option>
                    <Option value="phandau2">
                      Giấy khen (cấp trường và tương đương trở lên)
                    </Option>
                    <Option value="phandau3">Bằng khen các cấp</Option>
                  </Select>
                  <Input
                    placeholder="Nhập điểm"
                    style={{ marginTop: "16px" }}
                  />
                </Form.Item>
              </Col>

              {/* Criterion 4 */}
              <Col span={12}>
                <Form.Item>
                  <Typography.Title level={5}>
                    4. Ý thức công dân trong quan hệ cộng đồng
                  </Typography.Title>
                  <Select>
                    <Option value="ytcd1">
                      Chấp hành và tham gia tuyên truyền các chủ trương của
                      Đảng, chính sách, pháp luật của Nhà nước
                    </Option>
                    <Option value="ytcd2">
                      Tham gia các hoạt động tình nguyện, công ích, công tác xã
                      hội, phòng chống tội phạm và các tệ nạn xã hội
                    </Option>
                  </Select>
                  <Input
                    placeholder="Nhập điểm"
                    style={{ marginTop: "16px" }}
                  />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Content>
      </Layout>
    </Layout>
  );
};

export default ScorePage;
