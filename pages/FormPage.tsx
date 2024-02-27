import FormUser from "@/components/Form/FormUser";
import { users } from "@/components/Table/data";
import Sidebar from "@/components/sidebar";
import React from "react";

const FormPage = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const storedData = localStorage.getItem("data");
      if (storedData) {
        try {
          const parsedData = JSON.parse(storedData);
          setData(parsedData);
        } catch (error) {
          console.error("Error al analizar los datos del localStorage:", error);
        }
      } else {
        localStorage.setItem("data", JSON.stringify(users));
      }
    }
  }, []);

  return (
    <>
      <div className="flex min-h-screen">
        <div className="w-2/12">
          <Sidebar />
        </div>
        <div className="w-10/12 p-4 grid gap-4">
          <FormUser data={data} />
        </div>
      </div>
    </>
  );
};

export default FormPage;
