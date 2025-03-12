import React, { useState, useEffect } from 'react';
import Headers from "../components/common/Headers";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DataTable = () => {
  const [data, setData] = useState({ criteriaDetail: [] });
 

  // Fake data
  const fakeData = [
    { id: 1, childCriteriaId: 'C001', proof: 'Proof 1', teacherScore: 9, studentScore: '' },
    { id: 2, childCriteriaId: 'C002', proof: 'Proof 2', teacherScore: 8, studentScore: '' },
    { id: 3, childCriteriaId: 'C003', proof: 'Proof 3', teacherScore: 7, studentScore: '' },
    { id: 4, childCriteriaId: 'C004', proof: 'Proof 4', teacherScore: 6, studentScore: '' },
    { id: 5, childCriteriaId: 'C005', proof: 'Proof 5', teacherScore: 10, studentScore: '' }
  ];

  // Load data from localStorage if available, otherwise use fakeData
  useEffect(() => {
    const storedData = localStorage.getItem('criteriaDetail');
    if (storedData) {
      setData({ criteriaDetail: JSON.parse(storedData) });
    } else {
      setData({ criteriaDetail: fakeData });
    }
  }, []);

  // Save data to localStorage
  const saveDataToLocalStorage = (updatedData) => {
    localStorage.setItem('criteriaDetail', JSON.stringify(updatedData));
    
  };

  const handleInputChange = (id, value) => {
    // Update student score in the criteria detail
    const updatedData = data.criteriaDetail.map(item =>
      item.id === id ? { ...item, studentScore: value } : item
    );

    // Update the state and save to localStorage
    setData({ criteriaDetail: updatedData });
    saveDataToLocalStorage(updatedData);  // Save the updated data to localStorage
  };
  const handleBlur = () => {
    toast.success("🦄 Thông báo thành công!", {
      position: "top-right",
      autoClose: 3000, // Thời gian tự đóng (ms)
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Headers />
      <ToastContainer />
      <div style={{ height: '100%', padding: '20px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ padding: '10px', border: '1px solid black' }}>STT</th>
              <th style={{ padding: '10px', border: '1px solid black' }}>Mục</th>
              <th style={{ padding: '10px', border: '1px solid black' }}>Tiêu chí</th>
              <th style={{ padding: '10px', border: '1px solid black' }}>Tổng điểm</th>
              <th style={{ padding: '10px', border: '1px solid black' }}>Điểm SV đánh giá</th>
            </tr>
          </thead>
          <tbody>
            {data.criteriaDetail.map((item, index) => (
              <tr key={index}>
                <td style={{ padding: '10px', border: '1px solid black' }}>{index + 1}</td>
                <td style={{ padding: '10px', border: '1px solid black' }}>{item.childCriteriaId}</td>
                <td style={{ padding: '10px', border: '1px solid black' }}>{item.proof}</td>
                <td style={{ padding: '10px', border: '1px solid black' }}>{item.teacherScore}</td>
                <td style={{ padding: '10px', border: '1px solid black' }}>
                  <input
                    type="text"
                    value={item.studentScore || ''}
                    onChange={e => handleInputChange(item.id, e.target.value)}
                    onBlur={handleBlur}
                    style={{ width: '100%', padding: '5px' }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <button style={{ margin: '10px', padding: '10px 20px' }}>Lưu</button>
          <button style={{ margin: '10px', padding: '10px 20px' }}>Nhập lại</button>
          <button style={{ margin: '10px', padding: '10px 20px' }}>Nộp đơn</button>
          <button style={{ margin: '10px', padding: '10px 20px' }}>Xuất file</button>
        </div> */}
       
      </div>
    </div>
  );
};

export default DataTable;
