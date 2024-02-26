import Sidebar from "@/components/sidebar";
import React from "react";
import CardComponent from "@/components/Card/CardComponent";

const CardPage = () => {
  return (
    <div className="flex">
      <div className="w-2/12">
        <Sidebar />
      </div>
      <div className="w-10/12 p-4 ">
        <CardComponent />
      </div>
    </div>
  );
};

export default CardPage;
