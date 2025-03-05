import React, { useState } from "react";

function Dropdown({ label, options = [], onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex justify-between items-center px-2.5 py-1.5 bg-white border-2 border-black border-solid cursor-pointer min-w-[110px]"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span>{label}</span>
        <i className="ti ti-chevron-down" />
      </button>

      {isOpen && options.length > 0 && (
        <ul
          className="absolute z-10 w-full mt-1 bg-white border border-black border-solid"
          role="listbox"
        >
          {options.map((option, index) => (
            <li
              key={index}
              className="px-2.5 py-1.5 hover:bg-gray-100 cursor-pointer"
              role="option"
              onClick={() => {
                onChange && onChange(option);
                setIsOpen(false);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
