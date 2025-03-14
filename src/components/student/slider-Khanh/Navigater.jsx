import React from "react";
import { Space, Input, Select } from "antd";
const Navigater = () => {
    const onChange = (value: string) => {
        console.log(`selected ${value}`);
    };

    const onSearch = (value: string) => {
        console.log("search:", value);
    };
    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                    <Space.Compact>
                        <Input placeholder="MSV" />
                    </Space.Compact>
                    <Space.Compact>
                        <Input placeholder="Tên" />
                    </Space.Compact>
                    <Select
                        showSearch
                        placeholder="Vai trò"
                        optionFilterProp="label"
                        onChange={onChange}
                        onSearch={onSearch}
                        options={[
                            {
                                value: "1",
                                label: "Vai trò 1",
                            },
                            {
                                value: "2",
                                label: "Vai trò 2",
                            },
                            {
                                value: "3",
                                label: "Vai trò 3",
                            },
                        ]}
                    />
                    <Select
                        showSearch
                        placeholder="Chọn lớp"
                        optionFilterProp="label"
                        onChange={onChange}
                        onSearch={onSearch}
                        options={[
                            {
                                value: "1",
                                label: "Chọn lớp 1",
                            },
                            {
                                value: "2",
                                label: "Chọn lớp 2",
                            },
                            {
                                value: "3",
                                label: "Chọn lớp 3",
                            },
                        ]}
                    />
                </div>
                <div>
                    <Select
                        showSearch
                        placeholder="Chọn lớp"
                        optionFilterProp="label"
                        onChange={onChange}
                        onSearch={onSearch}
                        options={[
                            {
                                value: "1",
                                label: "Chọn lớp 1",
                            },
                            {
                                value: "2",
                                label: "Chọn lớp 2",
                            },
                            {
                                value: "3",
                                label: "Chọn lớp 3",
                            },
                        ]}
                    />
                    <Select
                        showSearch
                        placeholder="Chọn lớp"
                        optionFilterProp="label"
                        onChange={onChange}
                        onSearch={onSearch}
                        options={[
                            {
                                value: "1",
                                label: "Chọn lớp 1",
                            },
                            {
                                value: "2",
                                label: "Chọn lớp 2",
                            },
                            {
                                value: "3",
                                label: "Chọn lớp 3",
                            },
                        ]}
                    />
                    <Select
                        showSearch
                        placeholder="Chọn lớp"
                        optionFilterProp="label"
                        onChange={onChange}
                        onSearch={onSearch}
                        options={[
                            {
                                value: "1",
                                label: "Chọn lớp 1",
                            },
                            {
                                value: "2",
                                label: "Chọn lớp 2",
                            },
                            {
                                value: "3",
                                label: "Chọn lớp 3",
                            },
                        ]}
                    />
                </div>
            </div>
        </div>
    );
};

export default Navigater;
