import React from 'react';

const Header = () => (
  <header className="bg-gray-300 p-4 flex items-center justify-between border-b border-black">
    <div className="flex items-center">
      <img alt="HNUE logo" className="h-12 w-12" height="50" src="https://cdn.haitrieu.com/wp-content/uploads/2021/10/Logo-Dai-hoc-Su-pham-Ha-Noi-HNUE.png" width="50"/>
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
        <img  className="h-10 w-10 rounded-full border border-black" height="39" src="https://static.vecteezy.com/system/resources/previews/005/005/788/non_2x/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-free-vector.jpg" width="39"/>
        <i className="fas fa-angle-down text-xl"></i>
      </div>
    </div>
  </header>
);

export default Header;