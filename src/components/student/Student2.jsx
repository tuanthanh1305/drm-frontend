import React from 'react';
import { Button, InputNumber, Table } from 'antd';
import "../../css/student.css";

const Student2 = () => {

    const columns = [
        {
            title: 'STT',
            dataIndex: 'stt',
            key: 'stt',
            align: 'center',
        },
        {
            title: 'Mục',
            dataIndex: 'muc',
            key: 'muc',
            align: 'center',
        },
        {
            title: 'Tiêu chí',
            dataIndex: 'tieuchi',
            key: 'tieuchi',
        },
        {
            title: 'Tổng điểm',
            dataIndex: 'tongdiem',
            key: 'tongdiem',
            align: 'center',
        },
        {
            title: 'Điểm SV đánh giá',
            dataIndex: 'diemsv',
            key: 'diemsv',
            align: 'center',
            render: (text, record) => (
                <InputNumber 
                    min={0}
                    placeholder='Nhập điểm'
                    className='input-item'
                />
            ),
        },
    ];
      
    const data = [
        { stt: 1, muc: 'I', tieuchi: 'Ý thức học tập (Tối đa 25 điểm)', tongdiem: 6 },
        { stt: 2, muc: '1.1', tieuchi: 'Kết quả học tập', tongdiem: 6 },
        { stt: 3, muc: '1.2', tieuchi: 'Pototo', tongdiem: 8 },
        { stt: 4, muc: '1.3', tieuchi: 'Val', tongdiem: 10 },
        { stt: 5, muc: '1.4', tieuchi: 'Kết quả học tập', tongdiem: 6 },
        { stt: 6, muc: '1.5', tieuchi: 'Pototo', tongdiem: 8 },
        { stt: 7, muc: '1.6', tieuchi: 'Val', tongdiem: 10 },
        { stt: 8, muc: '1.7', tieuchi: 'Kết quả học tập', tongdiem: 6 },
        { stt: 9, muc: '1.8', tieuchi: 'Pototo', tongdiem: 8 },
        { stt: 10, muc: '1.9', tieuchi: 'Val', tongdiem: 10 },
        { stt: 11, muc: '1.10', tieuchi: 'Kết quả học tập', tongdiem: 6 },
        { stt: 12, muc: '1.11', tieuchi: 'Pototo', tongdiem: 8 },
        { stt: 13, muc: '1.12', tieuchi: 'Val', tongdiem: 10 },
        { stt: 14, muc: '1.13', tieuchi: 'Kết quả học tập', tongdiem: 6 },
        { stt: 15, muc: '1.14', tieuchi: 'Pototo', tongdiem: 8 },
        { stt: 16, muc: '1.15', tieuchi: 'Val', tongdiem: 10 },
        { stt: 17, muc: '1.16', tieuchi: 'Kết quả học tập', tongdiem: 6 },
        { stt: 18, muc: '1.17', tieuchi: 'Pototo', tongdiem: 8 },
    ];

    return (
        <div>
            <Table
                columns={columns}
                dataSource={data}
                rowKey="stt"
                pagination={false}
                bordered
            />

            <div className="add">
                <Button htmlType="submit" type="primary" className="btn-item">
                    Lưu
                </Button>
                <Button htmlType="submit" type="primary" className="btn-item">
                    Nhập lại
                </Button>
                <Button htmlType="submit" type="primary" className="btn-item">
                    Nộp đơn
                </Button>
                <Button htmlType="submit" type="primary" className="btn-item">
                    Xuất file
                </Button>   
            </div>
        </div>

    );
};

export default Student2;
