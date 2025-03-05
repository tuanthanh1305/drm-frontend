import React from 'react';

const Header = () => (
  <header className="bg-gray-300 p-4 flex items-center justify-between border-b border-black">
    <div className="flex items-center">
      <img alt="HNUE logo" className="h-12 w-12" height="50" src="https://storage.googleapis.com/a1aa/image/Dq43waNBEnvWIY24flz7-wOCEzsRfVJZhMtaKWdWebc.jpg" width="50"/>
      <div className="ml-4">
        <div className="text-sm">Trường đại học sư phạm Hà Nội</div>
        <div className="text-lg font-bold text-blue-800">HỆ THỐNG ĐÁNH GIÁ ĐIỂM RÈN LUYỆN</div>
      </div>
    </div>
    <div className="flex items-center space-x-4">
      <i className="fas fa-search text-xl"></i>
      <i className="fas fa-bell text-xl"></i>
      <div className="border-l border-black h-6"></div>
      <div className="text-lg">Nguyễn Văn A - K71CNTT</div>
      <div className="relative flex items-center space-x-2">
        <img alt="User avatar" className="h-10 w-10 rounded-full border border-black" height="40" src="https://storage.googleapis.com/a1aa/image/bgN3vQNZ4x2eSSz-E-OGpQFNkugX3JUumCw4RfRSF3I.jpg" width="40"/>
        <i className="fas fa-angle-down text-xl"></i>
      </div>
    </div>
  </header>
);

export default Header;