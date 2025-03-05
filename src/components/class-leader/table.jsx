import React from "react";
import FilterBar from "./fitterbar";
import Pagination from "./pagination";
import DataTable from "./dataTable";

function TableSection() {
  return (
    <section className="p-5">
      <FilterBar />
      <DataTable />
      <Pagination />
    </section>
  );
}

export default TableSection;
