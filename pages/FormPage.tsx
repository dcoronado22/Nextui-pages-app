import FormUser from "@/components/Form/FormUser";
import Sidebar from "@/components/sidebar";
import React from "react";

const FormPage = () => {
  return (
    <>
      <div className="flex min-h-screen">
        <div className="w-2/12">
          <Sidebar />
        </div>
        <div className="w-10/12 p-4 grid gap-4">
          <FormUser />
        </div>
      </div>
    </>
  );
};

export default FormPage;
