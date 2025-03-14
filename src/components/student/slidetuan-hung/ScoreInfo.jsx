 import React from "react";
 import { EditOutlined } from "@ant-design/icons";
 import { Divider, Space, Typography } from "antd";
 import NoticeBar from "./NoticeBar";
 const ScoreInfo = () => {
   const { Text } = Typography;
   return (
     <>
       {/* Điểm trung bình */}
       <Space
         style={{
           width: "100%",
           marginTop: 16,
           padding: 10,
           backgroundColor: "#4096ff",
           color: "white",
         }}
       >
         <Text style={{ color: "white" }}>
           <EditOutlined style={{ marginRight: 5 }} />
           Điểm TBC hệ 10: 7.54
         </Text>
 
         {/* Đường gạch dọc */}
         <Divider
           type="vertical"
           style={{ backgroundColor: "white", height: "1.5em" }}
         />
 
         <Text style={{ color: "white" }}>
           <EditOutlined style={{ marginRight: 5 }} />
           Điểm TBC hệ số 4: 3.00
         </Text>
       </Space>
     </>
   );
 };
 
 export default ScoreInfo;
