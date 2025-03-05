import React from "react";
import ProfileHeader from "./profile";
import NavItem from "./nav";

function Sidebar() {
  const navItems = [
    { icon: "layout-dashboard", text: "Dashboard", active: true },
    { icon: "users", text: "Quản lý sinh viên", active: false },
    { icon: "user", text: "Quản lý giảng viên", active: false },
    { icon: "list", text: "Quản lý danh mục", active: false },
  ];

  return (
    <aside className="bg-[#578FCA] border-r border-solid border-r-black w-[328px] max-md:w-[250px] max-sm:w-full max-sm:h-auto">
      <nav>
        <ProfileHeader />
        <ul className="px-0 py-5">
          {navItems.map((item, index) => (
            <NavItem
              key={index}
              icon={item.icon}
              text={item.text}
              active={item.active}
            />
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
