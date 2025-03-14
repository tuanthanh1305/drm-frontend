import React, { useEffect, useState } from 'react';
import Pagination from '../components/training-office/Pagination';

const DepartmentHeadPage = () => {
  // Dữ liệu giả cho các filter
  const statusOptions = ['Tất cả', 'Đang đi học', 'Nghỉ học', 'Tạm hoãn', 'Đình chỉ'];
  const courseOptions = ['Chọn khóa', 'Khóa 70', 'Khóa 71', 'Khóa 72'];
  const classOptions = ['Chọn Khoa', 'Khoa CNTT', 'Khoa Kinh Tế', 'Khoa Xây Dựng'];
  const yearOptions = ['2024 - 2025', '2025 - 2026', '2026 - 2027'];
  const semesterOptions = ['Học Kỳ 1', 'Học Kỳ 2'];

  // Dữ liệu giả cho bảng
  const initialData = [
    { id: 1, mssv: 'SP-51252', name: 'Phan Văn B', dob: '02/06/2001', score: 9.0, status: 'Đang đi học', course: 'Khóa 71', class: 'Khoa CNTT', year: '2024 - 2025', semester: 'Học Kỳ 1' },
    { id: 2, mssv: 'SP-51253', name: 'Nguyễn Thị A', dob: '05/08/2000', score: 8.5, status: 'Nghỉ học', course: 'Khóa 72', class: 'Khoa CNTT', year: '2024 - 2025', semester: 'Học Kỳ 1' },
    { id: 3, mssv: 'SP-51254', name: 'Trần Minh C', dob: '12/01/1999', score: 7.8, status: 'Tạm hoãn', course: 'Khóa 70', class: 'Khoa Kinh Tế', year: '2025 - 2026', semester: 'Học Kỳ 2' },
    { id: 4, mssv: 'SP-51255', name: 'Lê Quang D', dob: '20/02/2000', score: 8.3, status: 'Đang đi học', course: 'Khóa 72', class: 'Khoa Xây Dựng', year: '2024 - 2025', semester: 'Học Kỳ 2' },
    { id: 5, mssv: 'SP-51256', name: 'Hoàng Thanh E', dob: '10/05/2001', score: 9.4, status: 'Đình chỉ', course: 'Khóa 71', class: 'Khoa CNTT', year: '2025 - 2026', semester: 'Học Kỳ 2' },
    // Thêm dữ liệu vào đây...
  ];

  // State để lưu trữ các lựa chọn của người dùng
  const [statusFilter, setStatusFilter] = useState('Tất cả');
  const [courseFilter, setCourseFilter] = useState('Chọn khóa');
  const [classFilter, setClassFilter] = useState('Chọn khoa');
  const [yearFilter, setYearFilter] = useState('2024 - 2025');
  const [semesterFilter, setSemesterFilter] = useState('Học Kỳ 1');
  const [filteredData, setFilteredData] = useState(initialData);

  // Hàm lọc dữ liệu
  const filterData = () => {
    let filtered = initialData;

    if (statusFilter !== 'Tất cả') {
      filtered = filtered.filter(student => student.status === statusFilter);
    }
    if (courseFilter !== 'Chọn khóa') {
      filtered = filtered.filter(student => student.course === courseFilter);
    }
    if (classFilter !== 'Chọn khoa') {
      filtered = filtered.filter(student => student.class === classFilter);
    }
    if (yearFilter !== '2024 - 2025') {
      filtered = filtered.filter(student => student.year === yearFilter);
    }
    if (semesterFilter !== 'Học Kỳ 1') {
      filtered = filtered.filter(student => student.semester === semesterFilter);
    }

    setFilteredData(filtered);
  };

  // Hàm xử lý khi người dùng thay đổi lựa chọn trong filter
  useEffect(() => {
    filterData()
  }, [statusFilter, courseFilter, classFilter, yearFilter, semesterFilter])

  return (
    <div>
      {/* Filters */}
      <div className="p-4  border-b">
        <div className="flex justify-between mb-4">
          <div className="flex space-x-4">
            <input className="border p-2 rounded" type="text" placeholder='MSSV'/>
            <input className="border p-2 rounded" type="text" placeholder='Tên'/>
            <select className="border p-2 rounded" onChange={(e) => setStatusFilter(e.target.value)} value={statusFilter}>
              {statusOptions.map((status, index) => (
                <option key={index}>{status}</option>
              ))}
            </select>
          </div>

          <div className="flex space-x-4">
            <select className="border p-2 rounded" onChange={(e) => setCourseFilter(e.target.value)} value={courseFilter}>
              {courseOptions.map((course, index) => (
                <option key={index}>{course}</option>
              ))}
            </select>
            <select className="border p-2 rounded" onChange={(e) => setClassFilter(e.target.value)} value={classFilter}>
              {classOptions.map((classItem, index) => (
                <option key={index}>{classItem}</option>
              ))}
            </select>
            <select className="border p-2 rounded" onChange={(e) => setYearFilter(e.target.value)} value={yearFilter}>
              {yearOptions.map((year, index) => (
                <option key={index}>{year}</option>
              ))}
            </select>
            <select className="border p-2 rounded" onChange={(e) => setSemesterFilter(e.target.value)} value={semesterFilter}>
              {semesterOptions.map((semester, index) => (
                <option key={index}>{semester}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="p-4 overflow-auto">
        <table className="min-w-full  border">
          <thead>
            <tr>
              <th className="border p-2">STT</th>
              <th className="border p-2">Mã sinh viên</th>
              <th className="border p-2">Họ tên</th>
              <th className="border p-2">Ngày sinh</th>
              <th className="border p-2">Tổng điểm</th>
              <th className="border p-2">Trạng thái</th>
              <th className="border p-2">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((student, index) => (
              <tr key={student.id} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                <td className="border p-2 text-center">{index + 1}</td>
                <td className="border p-2 text-center">{student.mssv}</td>
                <td className="border p-2 text-center">{student.name}</td>
                <td className="border p-2 text-center">{student.dob}</td>
                <td className="border p-2 text-center">{student.score}</td>
                <td className="border p-2 text-center">{student.status}</td>
                <td className="border p-2 text-center text-blue-600">
                  <a href="#">Xem chi tiết</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination />
      </div>
    </div>
  );
};

export default DepartmentHeadPage;
