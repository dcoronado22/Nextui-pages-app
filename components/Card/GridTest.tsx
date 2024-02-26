import {
  Card,
  CardBody,
  CardHeader,
  Image,
  Divider,
  CardFooter,
  Link,
  Button,
  Avatar,
} from "@nextui-org/react";
import React from "react";

const GridTest = () => {
  return (
    <div className="h-screen w-full gap-4 p-4 grid grid-cols-2 grid-rows-4">
      <div className="col-span-1 row-span-2">
        <Card>
          <CardBody>
            <p>Esta es la vista de Cards</p>
          </CardBody>
        </Card>
      </div>
      <div className="col-span-1 row-span-1">
        <Card>
          <CardBody>
            <p>Esta es la vista de Cards</p>
          </CardBody>
        </Card>
      </div>
      <div className="col-span-1 row-span-1">
        <Card>
          <CardBody>
            <p>Esta es la vista de Cards</p>
          </CardBody>
        </Card>
      </div>
      <div className="col-span-1 row-span-1">
        <Card>
          <CardBody>
            <p>Esta es la vista de Cards</p>
          </CardBody>
        </Card>
      </div>
      <div className="col-span-1 row-span-2">
        <Card>
          <CardBody>
            <p>Esta es la vista de Cards</p>
          </CardBody>
        </Card>
      </div>
      <div className="col-span-1 row-span-1">
        <Card>
          <CardBody>
            <p>Esta es la vista de Cards</p>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default GridTest;
