import TableComponent from "@/components/Table/table";
import Sidebar from "@/components/sidebar";
import React from "react";

const GridPage = () => {
  return (
    <div className="flex">
      <div className="w-2/12">
        <Sidebar />
      </div>
      <div className="w-10/12 p-4 min-h-screen">
        <TableComponent />
      </div>
    </div>
  );
};

export default GridPage;
