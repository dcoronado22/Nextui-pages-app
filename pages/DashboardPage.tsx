import DashboardRow1 from "@/components/Dashboard/DashboardRow1";
import DashboardRow2 from "@/components/Dashboard/DashboardRow2";
import Sidebar from "../components/sidebar";
import React from "react";
import LoadingProgress from "@/components/loadingProgress";

const DashboardPage = () => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // Simular una carga ficticia con un temporizador
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <LoadingProgress />}
      {!loading && (
        <div className="flex min-h-screen">
          <div className="w-2/12">
            <Sidebar />
          </div>
          <div className="w-10/12 p-4 grid grid-cols-3 gap-4">
            <DashboardRow1 />
            <div className="col-span-3">
              <DashboardRow2 />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DashboardPage;
