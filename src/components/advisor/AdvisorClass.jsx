import React, { useState, useEffect } from "react";
import { Avatar, Input, Pagination, Card, Row, Col } from "antd";
import { Layout, Select } from "antd";
// import { useNavigate } from "react-router-dom";
import { CaretDownOutlined, CaretUpOutlined, SearchOutlined } from "@ant-design/icons";
import LayoutAvs from "./LayoutAvs";

const { Header, Content, Sider } = Layout;
const { Option } = Select;

const AdvisorClass = () => {
  // Dữ liệu mẫu cho các lớp - trong dự án thực tế có thể lấy từ API
  const allClasses = [
    { id: 1, name: "E4-CNTT" },
    { id: 2, name: "E4-Du lịch" },
    { id: 3, name: "E4-Luật" },
    { id: 4, name: "E1-Marketing" },
    { id: 5, name: "E2-Marketing" },
    { id: 6, name: "E1-QTKD" },
    { id: 7, name: "E2-QTKD" },
    { id: 8, name: "E1-Kế toán" },
    { id: 9, name: "E2-Kế toán" },
    { id: 10, name: "E1-Ngôn ngữ Anh" },
    { id: 11, name: "E2-Ngôn ngữ Anh" },
    { id: 12, name: "E1-Điện tử" },
    { id: 13, name: "E2-Điện tử" },
    { id: 14, name: "E1-Cơ khí" },
    { id: 15, name: "E2-Cơ khí" },
    { id: 16, name: "E1-Xây dựng" },
    { id: 17, name: "E2-Xây dựng" },
    { id: 18, name: "E1-Luật" },
    { id: 19, name: "E2-Luật" },
    { id: 20, name: "E1-Du lịch" },
    { id: 21, name: "E2-Du lịch" },
    { id: 22, name: "E3-Du lịch" },
    { id: 23, name: "E4-Du lịch" },
    { id: 24, name: "E5-Du lịch" },
    { id: 25, name: "E6-Du lịch" },
    { id: 26, name: "E7-Du lịch" },
    { id: 27, name: "E8-Du lịch" },
  ];

  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 24; // Số lớp hiển thị trên mỗi trang
  // const navigate = useNavigate();

  // Lọc danh sách lớp dựa trên từ khóa tìm kiếm
  const filteredClasses = allClasses.filter(cls =>
    cls.name.toLowerCase().includes(searchText.toLowerCase())
  );

  // Tính toán chỉ số bắt đầu và kết thúc cho trang hiện tại
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, filteredClasses.length);
  const currentClasses = filteredClasses.slice(startIndex, endIndex);

  // Xử lý khi thay đổi trang
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Xử lý khi click vào một lớp
  // const handleClassClick = (classId) => {
  //   // Chuyển hướng đến trang chi tiết lớp
  //   navigate(`/class/${classId}`);
  // };

  // Reset về trang 1 khi thay đổi tìm kiếm
  useEffect(() => {
    setCurrentPage(1);
  }, [searchText]);

  return (
    <>
    <LayoutAvs>
      <Layout className="site-layout">
        <Content style={{ margin: "16px" }}>
          <div style={{ padding: 24 }}>
            <div style={{ display: "flex", justifyContent: "right", marginBottom: "30px" }}>
              <Input
                addonBefore={<SearchOutlined />}
                placeholder="Tìm kiếm lớp"
style={{ width: "300px" }}
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                allowClear
              />
            </div>

            <Row gutter={[32, 32]}>
              {currentClasses.map((cls) => (
                <Col key={cls.id} xs={24} sm={12} md={8} lg={6} xl={6} xxl={4}>
                  <Card
                    hoverable
                    style={{ width: "100%", textAlign: "center" }}
                  // onClick={() => handleClassClick(cls.id)}
                  >
                    <div>{cls.name}</div>
                  </Card>
                </Col>
              ))}
            </Row>

            {/* Hiển thị thông báo khi không có kết quả */}
            {currentClasses.length === 0 && (
              <div style={{ textAlign: "center", padding: "30px 0" }}>
                Không tìm thấy lớp nào phù hợp với từ khóa "{searchText}"
              </div>
            )}
          </div>
          <div>
            <div style={{ marginTop: "30px", display: "flex", justifyContent: "center" }}>
              <Pagination
                current={currentPage}
                total={filteredClasses.length}
                pageSize={pageSize}
                onChange={handlePageChange}
                showSizeChanger={false}
              />
            </div>
          </div>
        </Content>
      </Layout>
      </LayoutAvs>
    </>
  );
};

export default AdvisorClass;