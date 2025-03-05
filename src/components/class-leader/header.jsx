import React from "react";
import SchoolInfo from "./schollinfo";
import UserInfo from "./userInfo";

function Header() {
  return (
    <header className="flex justify-between items-center p-5 border-b border-solid bg-zinc-300 border-b-black max-sm:flex-col max-sm:gap-2.5 max-sm:text-center">
      <SchoolInfo />
      <div className="flex gap-5 items-center ">
        <div className="flex gap-2.5">
          <button aria-label="Search" className="ti ti-search" />
          <button aria-label="Notifications" className="ti ti-bell" />
        </div>
        
        <UserInfo />
      </div>
    </header>
  );
}

export default Header;
