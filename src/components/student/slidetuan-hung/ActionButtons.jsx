import React from "react";
import { Button } from "antd";
import { LeftOutlined } from "@ant-design/icons";

const ActionButtons = () => {
  return (
    <div className="mt-4 flex justify-end gap-5 max-md:flex-wrap max-sm:flex-col max-sm:items-center">
      <Button
        type="primary"
        icon={<LeftOutlined />}
        size="large"
        className="flex items-center gap-2 w-[220px]"
      >
        Xuất file PDF
      </Button>
    </div>
  );
};

export default ActionButtons;
