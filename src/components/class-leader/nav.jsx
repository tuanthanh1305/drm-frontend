import React from "react";

function NavItem({ icon, text, active }) {
  return (
    <li
      className={`flex items-center px-8 py-4 text-base text-white cursor-pointer ${
        active ? "font-semibold" : ""
      }`}
    >
      <i className={`ti ti-${icon} mr-4`} />
      <span>{text}</span>
    </li>
  );
}

export default NavItem;
