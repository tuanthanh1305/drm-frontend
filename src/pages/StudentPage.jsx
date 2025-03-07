import React, { useState } from 'react';

const DataTable = () => {
  const [data, setData] = useState([
    { id: 1, muc: 'I', tieuChi: 'Ý thức học tập (Tối đa 25 điểm)', tongDiem: '', diemSV: '' },
    { id: 2, muc: '1.1', tieuChi: 'Kết quả học tập', tongDiem: 6, diemSV: '' },
    { id: 3, muc: '1.2', tieuChi: 'Pototo', tongDiem: 8, diemSV: '' },
    { id: 4, muc: '1.3', tieuChi: 'Val', tongDiem: 10, diemSV: '' },
    { id: 5, muc: '1.1', tieuChi: 'Kết quả học tập', tongDiem: 6, diemSV: '' },
    { id: 6, muc: '1.2', tieuChi: 'Pototo', tongDiem: 8, diemSV: '' },
    { id: 7, muc: '1.3', tieuChi: 'Val', tongDiem: 10, diemSV: '' },
    { id: 8, muc: '1.1', tieuChi: 'Kết quả học tập', tongDiem: 6, diemSV: '' },
    { id: 9, muc: '1.2', tieuChi: 'Pototo', tongDiem: 8, diemSV: '' },
    { id: 10 , muc: '1.3', tieuChi: 'Val', tongDiem: 10, diemSV: '' },
    
    // Các hàng khác...
  ]);

  const handleInputChange = (id, value) => {
    setData(data.map(item => item.id === id ? { ...item, diemSV: value } : item));
  };

  return (
    <div style={{ width: '100vw', height: '100vh', padding: '20px' }}>
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
          {data.map((item, index) => (
            <tr key={index}>
              <td style={{ padding: '10px', border: '1px solid black' }}>{index + 1}</td>
              <td style={{ padding: '10px', border: '1px solid black' }}>{item.muc}</td>
              <td style={{ padding: '10px', border: '1px solid black' }}>{item.tieuChi}</td>
              <td style={{ padding: '10px', border: '1px solid black' }}>{item.tongDiem}</td>
              <td style={{ padding: '10px', border: '1px solid black' }}>
                <input
                  type="text"
                  value={item.diemSV}
                  onChange={e => handleInputChange(item.id, e.target.value)}
                  style={{ width: '100%', padding: '5px' }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <button style={{ margin: '10px', padding: '10px 20px' }}>Lưu</button>
        <button style={{ margin: '10px', padding: '10px 20px' }}>Nhập lại</button>
        <button style={{ margin: '10px', padding: '10px 20px' }}>Nộp đơn</button>
        <button style={{ margin: '10px', padding: '10px 20px' }}>Xuất file</button>
      </div>
    </div>
  );

};

export default DataTable