import React, { useState } from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function App() {
  const [dataSample, setDataSample] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  });

  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardBody>
            <div className="app">
              <div className="row">
                <div className="mixed-chart">
                  <Chart
                    options={dataSample.options}
                    series={dataSample.series}
                    type="line"
                    width="100%"
                    height="400px"
                  />
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <div className="app">
              <div className="row">
                <div className="mixed-chart">
                  <Chart
                    options={dataSample.options}
                    series={dataSample.series}
                    type="radar"
                    width="100%"
                    height="400px"
                  />
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
}
