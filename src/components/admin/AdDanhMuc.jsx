import React, { useState } from "react";
import { Layout, Table, Input, Button, Select, Pagination } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import Headers from "../common/Headers";

const { Content } = Layout;
const { Option } = Select;

const AdDanhMuc = () => {
  const initialData = [
    { key: "1", name: "Ý thức học tập", maxScore: 25, order: 1, status: "Đang hoạt động" },
    { key: "2", name: "Chấp hành nội quy - quy chế - quy định trong nhà trường", maxScore: 20, order: 3, status: "Đang hoạt động" },
    { key: "3", name: "Tên danh mục", maxScore: 2, order: 2, status: "Đang hoạt động" },
    { key: "4", name: "Tên danh mục", maxScore: 4, order: 4, status: "Ngừng hoạt động" },
  ];

  const [dataSource, setDataSource] = useState(initialData);
  const [filteredData, setFilteredData] = useState(initialData);
  const [pageSize, setPageSize] = useState(3);
  const [searchText, setSearchText] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  const handleSearch = (value) => {
    setSearchText(value);
    filterData(value, filterStatus);
  };

  const handleFilterStatus = (value) => {
    setFilterStatus(value);
    filterData(searchText, value);
  };

  const filterData = (search, status) => {
    let filtered = initialData;
    if (search) {
      filtered = filtered.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
    }
    if (status && status !== "Tất cả") {
      filtered = filtered.filter((item) => item.status === status);
    }
    setFilteredData(filtered);
  };

  const columns = [
    { title: "STT", dataIndex: "key", align: "center" },
    { title: "Tên danh mục", dataIndex: "name", align: "left" },
    { title: "Số điểm tối đa", dataIndex: "maxScore", align: "center" },
    { title: "Thứ tự xuất hiện", dataIndex: "order", align: "center" },
    { title: "Trạng thái", dataIndex: "status", align: "center" },
    { title: "Thao tác", render: () => <a href="#">Xem chi tiết</a>, align: "center" },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout>
        <Headers />
        <Content style={{ background: "#f9f9f9" }}>
          <div style={{ background: "white", padding: "20px", borderRadius: "8px" }}>
            <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
              <Input 
                placeholder="Tên danh mục"
                value={searchText}
                onChange={(e) => handleSearch(e.target.value)}
                style={{ flex: 1,width: "20px" }}
              />
              <Select defaultValue="Trạng thái" onChange={handleFilterStatus} style={{ width: "150px" }}>
                <Option value="Đang hoạt động">Đang hoạt động</Option>
                <Option value="Ngừng hoạt động">Ngừng hoạt động</Option>
              </Select>
            </div>
            <Button type="primary" icon={<PlusOutlined />} style={{ marginBottom: "10px" }}>
              Thêm danh mục
            </Button>
            <Table
              dataSource={filteredData}
              columns={columns}
              pagination={false}
              bordered
              style={{ marginBottom: "16px" }}
            />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <span>Số bản hiển thị</span>
                <Select defaultValue={3} onChange={setPageSize} style={{ width: "60px", marginLeft: "8px" }}>
                  <Option value={3}>3</Option>
                  <Option value={5}>5</Option>
                  <Option value={10}>10</Option>
                </Select>
              </div>
              <Pagination defaultCurrent={1} total={filteredData.length} pageSize={pageSize} />
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdDanhMuc;
