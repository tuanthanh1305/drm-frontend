import React, { useState } from "react";
import { Layout, Table, Input, Button, Select, Pagination, Modal, Form } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import Headers from "../common/Headers";

const { Content } = Layout;
const { Option } = Select;

const AdDanhMuc = () => {
  const initialData = [
    { key: "1", name: "Ý thức học tập", maxScore: 25, order: 1, status: "Đang hoạt động" },
    { key: "2", name: "Chấp hành nội quy - quy chế - quy định trong nhà trường", maxScore: 25, order: 3, status: "Đang hoạt động" },
    { key: "3", name: "Tên danh mục", maxScore: 20, order: 3, status: "Đang hoạt động" },
    { key: "4", name: "Tên danh mục", maxScore: 25, order: 2, status: "Ngừng hoạt động" },
    { key: "5", name: "Ý thức học tập", maxScore: 25, order: 4, status: "Ngừng hoạt động" },
    { key: "6", name: "Ý thức học tập", maxScore: 25, order: 4, status: "Ngừng hoạt động" },
    { key: "7", name: "Chấp hành nội quy - quy chế - quy định trong nhà trường", maxScore: 25, order: 2, status: "Ngừng hoạt động" },
    { key: "8", name: "Chấp hành nội quy - quy chế - quy định trong nhà trường", maxScore: 25, order: 2, status: "Ngừng hoạt động" },
    { key: "9", name: "Chấp hành nội quy - quy chế - quy định trong nhà trường", maxScore: 25, order: 2, status: "Ngừng hoạt động" },
    { key: "10", name: "Tên danh mục", maxScore: 25, order: 3, status: "Ngừng hoạt động" },
    { key: "11", name: "Tên danh mục", maxScore: 25, order: 3, status: "Ngừng hoạt động" },
    { key: "12", name: "Tên danh mục", maxScore: 25, order: 3, status: "Ngừng hoạt động" },
    { key: "13", name: "Tên danh mục", maxScore: 25, order: 5, status: "Ngừng hoạt động" },
    { key: "14", name: "Tên danh mục", maxScore: 25, order: 5, status: "Ngừng hoạt động" },
    { key: "15", name: "Tên danh mục", maxScore: 25, order: 5, status: "Ngừng hoạt động" },
    { key: "16", name: "Tên danh mục", maxScore: 25, order: 5, status: "Ngừng hoạt động" },
    { key: "17", name: "Tên danh mục", maxScore: 25, order: 5, status: "Ngừng hoạt động" },
    { key: "18", name: "Chấp hành nội quy - quy chế - quy định trong nhà trường", maxScore: 20, order: 7, status: "Ngừng hoạt động" },
    { key: "19", name: "Chấp hành nội quy - quy chế - quy định trong nhà trường", maxScore: 20, order: 7, status: "Ngừng hoạt động" },
    { key: "20", name: "Chấp hành nội quy - quy chế - quy định trong nhà trường", maxScore: 20, order: 7, status: "Ngừng hoạt động" },
    { key: "21", name: "Chấp hành nội quy - quy chế - quy định trong nhà trường", maxScore: 20, order: 7, status: "Ngừng hoạt động" },
    { key: "22", name: "Chấp hành nội quy - quy chế - quy định trong nhà trường", maxScore: 20, order: 7, status: "Ngừng hoạt động" },
    { key: "23", name: "Chấp hành nội quy - quy chế - quy định trong nhà trường", maxScore: 20, order: 7, status: "Ngừng hoạt động" },
    { key: "24", name: "Chấp hành nội quy - quy chế - quy định trong nhà trường", maxScore: 20, order: 7, status: "Ngừng hoạt động" },
    { key: "25", name: "Chấp hành nội quy - quy chế - quy định trong nhà trường", maxScore: 20, order: 7, status: "Đang hoạt động" },
  ];

  const [dataSource, setDataSource] = useState(initialData);
  const [filteredData, setFilteredData] = useState(initialData);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(3);
  const [searchText, setSearchText] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  const handleSearch = (value) => {
    setSearchText(value);
    filterData(value, filterStatus);
  };

  const handleFilterStatus = (value) => {
    setFilterStatus(value);
    filterData(searchText, value);
  };

  const filterData = (search, status) => {
    let filtered = dataSource;
    if (search) {
      filtered = filtered.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
    }
    if (status && status !== "Tất cả") {
      filtered = filtered.filter((item) => item.status === status);
    }
    setFilteredData(filtered);
    setCurrentPage(1);
  };

  const handleAddCategory = (values) => {
    const newCategory = {
      key: (dataSource.length + 1).toString(),
      name: values.name,
      maxScore: values.maxScore,
      order: values.order,
      status: values.status,
    };
    setDataSource([...dataSource, newCategory]);
    setFilteredData([...dataSource, newCategory]);
    setIsModalOpen(false);
    form.resetFields();
  };

  const columns = [
    { title: "STT", dataIndex: "key", align: "center" },
    { title: "Tên danh mục", dataIndex: "name", align: "left" },
    { title: "Số điểm tối đa", dataIndex: "maxScore", align: "center" },
    { title: "Thứ tự xuất hiện", dataIndex: "order", align: "center" },
    { title: "Trạng thái", dataIndex: "status", align: "center" },
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
                style={{ flex: 1 }}
              />
              <Select defaultValue="Tất cả" onChange={handleFilterStatus} style={{ width: "150px" }}>
                <Option value="Tất cả">Tất cả</Option>
                <Option value="Đang hoạt động">Đang hoạt động</Option>
                <Option value="Ngừng hoạt động">Ngừng hoạt động</Option>
              </Select>
            </div>
            <Button type="primary" icon={<PlusOutlined />} onClick={() => setIsModalOpen(true)} style={{ marginBottom: "10px" }}>
              Thêm danh mục
            </Button>
            <Table
              dataSource={filteredData.slice((currentPage - 1) * pageSize, currentPage * pageSize)}
              columns={columns}
              pagination={false}
              bordered
              style={{ marginBottom: "16px" }}
            />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <span>Số bản hiển thị</span>
                <Select defaultValue={3} onChange={(value) => { setPageSize(value); setCurrentPage(1); }} style={{ width: "60px", marginLeft: "8px" }}>
                  <Option value={3}>3</Option>
                  <Option value={5}>5</Option>
                  <Option value={10}>10</Option>
                </Select>
              </div>
            <Pagination 
              current={currentPage} 
              total={filteredData.length} 
              pageSize={pageSize} 
              onChange={setCurrentPage} 
            />
          </div> 
        </div>
        </Content>
      </Layout>
      <Modal
        title="Thêm danh mục"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onOk={() => form.submit()}
      >
        <Form form={form} onFinish={handleAddCategory} layout="vertical">
          <Form.Item name="name" label="Tên danh mục" rules={[{ required: true, message: "Vui lòng nhập tên danh mục" }]}> 
            <Input />
          </Form.Item>
          <Form.Item name="maxScore" label="Số điểm tối đa" rules={[{ required: true, message: "Vui lòng nhập số điểm" }]}> 
            <Input type="number" />
          </Form.Item>
          <Form.Item name="order" label="Thứ tự xuất hiện" rules={[{ required: true, message: "Vui lòng nhập thứ tự" }]}> 
            <Input type="number" />
          </Form.Item>
          <Form.Item name="status" label="Trạng thái" rules={[{ required: true, message: "Vui lòng chọn trạng thái" }]}> 
            <Select>
              <Option value="Đang hoạt động">Đang hoạt động</Option>
              <Option value="Ngừng hoạt động">Ngừng hoạt động</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </Layout>
  );
};

export default AdDanhMuc;
