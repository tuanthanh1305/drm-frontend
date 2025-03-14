import React from "react";
import TableStudents from "./TableStudent";
import Navigater from "./navigater";
import LayoutAdmin from "../../../layouts/LayoutAdmin";

const PageKhanh = () => {
    return (
        <div>
            <Navigater></Navigater>
            <TableStudents></TableStudents>
        </div>
    );
};

export default PageKhanh;
