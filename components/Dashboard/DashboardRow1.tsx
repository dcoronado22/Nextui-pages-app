import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";

export default function DashboardRow1() {
  return (
    <>
      <Card className="max-w-[400px]">
        <CardHeader className="flex gap-3">
          <Image
            alt="nextui logo"
            height={40}
            radius="sm"
            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
            width={40}
          />
          <div className="flex flex-col">
            <p className="text-md">Facturas</p>
            <p className="text-small text-default-500">Innapsis</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>100.000.000</p>
          <br />
          <p>$9.999.999.999</p>
        </CardBody>
        <Divider />
        <CardFooter className="text-emerald-400">+ 99.33%</CardFooter>
      </Card>
      <Card className="max-w-[400px]">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">Daily Mix</p>
          <small className="text-default-500">12 Tracks</small>
          <h4 className="font-bold text-large">Frontend Radio</h4>
        </CardHeader>
        <CardBody>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src="https://nextui.org/images/hero-card-complete.jpeg"
              width={270}
            />
          </CardBody>
        </CardBody>
      </Card>
      <Card className="max-w-[400px]">
        <CardHeader className="flex gap-3">
          <Image
            alt="nextui logo"
            height={40}
            radius="sm"
            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
            width={40}
          />
          <div className="flex flex-col">
            <p className="text-md">Facturas</p>
            <p className="text-small text-default-500">Innapsis</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>100.000.000</p>
          <br />
          <p>$9.999.999.999</p>
        </CardBody>
        <Divider />
        <CardFooter className="text-emerald-400">+ 99.33%</CardFooter>
      </Card>
    </>
  );
}
