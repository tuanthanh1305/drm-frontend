import React, { useEffect, useState } from 'react';
import { Layout, Input, Select, Table, Modal, Form } from 'antd';


const { Option } = Select;
const { Content } = Layout;

const Main = () => {
  // Dữ liệu giả cho bảng
  const initialData = [
    { id: 1, mssv: 'SP-51252', name: 'Phan Văn B', dob: '02/06/2001', score: 9.0, status: 'Đang đi học', course: 'Khóa 71', class: 'Khoa CNTT', year: '2024 - 2025', semester: 'Học Kỳ 1' },
    { id: 2, mssv: 'SP-51253', name: 'Nguyễn Thị A', dob: '05/08/2000', score: 8.5, status: 'Nghỉ học', course: 'Khóa 72', class: 'Khoa CNTT', year: '2024 - 2025', semester: 'Học Kỳ 1' },
    { id: 3, mssv: 'SP-51254', name: 'Trần Minh C', dob: '12/01/1999', score: 7.8, status: 'Tạm hoãn', course: 'Khóa 70', class: 'Khoa Kinh Tế', year: '2025 - 2026', semester: 'Học Kỳ 2' },
    { id: 4, mssv: 'SP-51255', name: 'Lê Quang D', dob: '20/02/2000', score: 8.3, status: 'Đang đi học', course: 'Khóa 72', class: 'Khoa Xây Dựng', year: '2024 - 2025', semester: 'Học Kỳ 2' },
    { id: 5, mssv: 'SP-51256', name: 'Hoàng Thanh E', dob: '10/05/2001', score: 9.4, status: 'Đình chỉ', course: 'Khóa 71', class: 'Khoa CNTT', year: '2025 - 2026', semester: 'Học Kỳ 2' },
    { id: 6, mssv: 'SP-51252', name: 'Phan Văn B', dob: '02/06/2001', score: 9.0, status: 'Đang đi học', course: 'Khóa 71', class: 'Khoa CNTT', year: '2024 - 2025', semester: 'Học Kỳ 1' },
    { id: 7, mssv: 'SP-51253', name: 'Nguyễn Thị A', dob: '05/08/2000', score: 8.5, status: 'Nghỉ học', course: 'Khóa 72', class: 'Khoa CNTT', year: '2024 - 2025', semester: 'Học Kỳ 1' },
    { id: 8, mssv: 'SP-51254', name: 'Trần Minh C', dob: '12/01/1999', score: 7.8, status: 'Tạm hoãn', course: 'Khóa 70', class: 'Khoa Kinh Tế', year: '2025 - 2026', semester: 'Học Kỳ 2' },
    { id: 9, mssv: 'SP-51255', name: 'Lê Quang D', dob: '20/02/2000', score: 8.3, status: 'Đang đi học', course: 'Khóa 72', class: 'Khoa Xây Dựng', year: '2024 - 2025', semester: 'Học Kỳ 2' },
    { id: 10, mssv: 'SP-51256', name: 'Hoàng Thanh E', dob: '10/05/2001', score: 9.4, status: 'Đình chỉ', course: 'Khóa 71', class: 'Khoa CNTT', year: '2025 - 2026', semester: 'Học Kỳ 2' },
  ];

  // State để lưu trữ các lựa chọn của người dùng
  const [filters, setFilters] = useState({});
  const [filteredData, setFilteredData] = useState(initialData);

  // State để lưu trữ thông tin chi tiết của sinh viên
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  // Hàm lọc dữ liệu
  const filterData = () => {
    let filtered = initialData;

    if (filters.mssv) {
      filtered = filtered.filter(student => student.mssv.includes(filters.mssv));
    }
    if (filters.name) {
      filtered = filtered.filter(student => student.name.includes(filters.name));
    }
    if (filters.status) {
      filtered = filtered.filter(student => student.status === filters.status);
    }
    if (filters.course) {
      filtered = filtered.filter(student => student.course === filters.course);
    }
    if (filters.class) {
      filtered = filtered.filter(student => student.class === filters.class);
    }
    if (filters.year) {
      filtered = filtered.filter(student => student.year === filters.year);
    }
    if (filters.semester) {
      filtered = filtered.filter(student => student.semester === filters.semester);
    }

    setFilteredData(filtered);
  };

  // Hàm xử lý khi người dùng thay đổi lựa chọn trong filter
  useEffect(() => {
    filterData();
  }, [filters]);

  // Hàm mở modal và thiết lập sinh viên được chọn
  const openModal = (student) => {
    setSelectedStudent(student);
    form.setFieldsValue(student);
    setIsModalOpen(true);
  };

  // Hàm đóng modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedStudent(null);
  };

  // Hàm xử lý khi lưu thông tin
  const handleSave = () => {
    form.validateFields().then(values => {
      console.log('Saved values:', values);
      closeModal();
    }).catch(info => {
      console.log('Validate Failed:', info);
    });
  };

  const columns = [
    { title: 'Mã sinh viên', dataIndex: 'mssv', key: 'mssv' },
    { title: 'Họ tên', dataIndex: 'name', key: 'name' },
    { title: 'Ngày sinh', dataIndex: 'dob', key: 'dob' },
    { title: 'Tổng điểm', dataIndex: 'score', key: 'score' },
    { title: 'Trạng thái', dataIndex: 'status', key: 'status' },
    
    {
      title: 'Thao tác',
      key: 'action',
      render: (text, record) => (
        <a href="#" onClick={() => openModal(record)}>Xem chi tiết</a>
      ),
    },
  ];

  return (
    <Layout>
      
      <Content style={{ margin: "16px" }}>
        <div style={{ background: "#fff", padding: 20, borderRadius: 8 }}>
          <div style={{ marginBottom: 16, display: "flex", gap: 8 }}>
            <Input placeholder="Mã sinh viên" onChange={(e) => setFilters({ ...filters, mssv: e.target.value })} />
            <Input placeholder="Họ tên" onChange={(e) => setFilters({ ...filters, name: e.target.value })} />
            {/* <Select placeholder="Trạng thái" onChange={(value) => setFilters({ ...filters, status: value })} allowClear>
              <Option value="Đang đi học">Đang đi học</Option>
              <Option value="Nghỉ học">Nghỉ học</Option>
              <Option value="Tạm hoãn">Tạm hoãn</Option>
              <Option value="Đình chỉ">Đình chỉ</Option>
            </Select> */}
            <Select placeholder="Khóa" onChange={(value) => setFilters({ ...filters, course: value })} allowClear>
              <Option value="Khóa 70">Khóa 70</Option>
              <Option value="Khóa 71">Khóa 71</Option>
              <Option value="Khóa 72">Khóa 72</Option>
            </Select>
            <Select placeholder="Khoa" onChange={(value) => setFilters({ ...filters, class: value })} allowClear>
              <Option value="Khoa CNTT">Khoa CNTT</Option>
              <Option value="Khoa Kinh Tế">Khoa Kinh Tế</Option>
              <Option value="Khoa Xây Dựng">Khoa Xây Dựng</Option>
            </Select>
            <Select placeholder="Năm học" onChange={(value) => setFilters({ ...filters, year: value })} allowClear>
              <Option value="2024 - 2025">2024 - 2025</Option>
              <Option value="2025 - 2026">2025 - 2026</Option>
              <Option value="2026 - 2027">2026 - 2027</Option>
            </Select>
            <Select placeholder="Học kỳ" onChange={(value) => setFilters({ ...filters, semester: value })} allowClear>
              <Option value="Học Kỳ 1">Học Kỳ 1</Option>
              <Option value="Học Kỳ 2">Học Kỳ 2</Option>
            </Select>
          </div>
          <Table columns={columns} dataSource={filteredData} pagination={{ pageSize: 5 }} />
        </div>
      </Content>

      {/* Modal */}
      <Modal title="Chỉnh sửa" open={isModalOpen} onCancel={closeModal} onOk={handleSave}>
        <Form form={form} layout="vertical">
          <Form.Item name="mssv" label="Mã sinh viên" rules={[{ required: true, message: "Vui lòng nhập Mã sinh viên" }]}>
            <Input />
          </Form.Item>
          <Form.Item name="name" label="Họ tên" rules={[{ required: true, message: "Vui lòng nhập Họ tên" }]}>
            <Input />
          </Form.Item>
          <Form.Item name="dob" label="Ngày sinh">
            <Input />
          </Form.Item>
          <Form.Item name="score" label="Tổng điểm">
            <Input />
          </Form.Item>
          <Form.Item name="status" label="Trạng thái">
            <Select>
              <Option value="Đang đi học">Đang đi học</Option>
              <Option value="Nghỉ học">Nghỉ học</Option>
              <Option value="Tạm hoãn">Tạm hoãn</Option>
              <Option value="Đình chỉ">Đình chỉ</Option>
            </Select>
          </Form.Item>
          <Form.Item name="course" label="Khóa">
            <Select>
              <Option value="Khóa 70">Khóa 70</Option>
              <Option value="Khóa 71">Khóa 71</Option>
              <Option value="Khóa 72">Khóa 72</Option>
            </Select>
          </Form.Item>
          <Form.Item name="class" label="Khoa">
            <Select>
              <Option value="Khoa CNTT">Khoa CNTT</Option>
              <Option value="Khoa Kinh Tế">Khoa Kinh Tế</Option>
              <Option value="Khoa Xây Dựng">Khoa Xây Dựng</Option>
            </Select>
          </Form.Item>
          <Form.Item name="year" label="Năm học">
            <Select>
              <Option value="2024 - 2025">2024 - 2025</Option>
              <Option value="2025 - 2026">2025 - 2026</Option>
              <Option value="2026 - 2027">2026 - 2027</Option>
            </Select>
          </Form.Item>
          <Form.Item name="semester" label="Học kỳ">
            <Select>
              <Option value="Học Kỳ 1">Học Kỳ 1</Option>
              <Option value="Học Kỳ 2">Học Kỳ 2</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </Layout>
  );
};

export default Main;