import React from "react";
import Navigater from "./navigater";
import TableStudents from "./table";

const page = () => {
    return (
        <div>
            <Navigater></Navigater>
            <TableStudents></TableStudents>
        </div>
    );
};

export default page;
