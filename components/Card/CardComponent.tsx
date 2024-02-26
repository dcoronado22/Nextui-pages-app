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
import CardRow1 from "./CardRow1";
import CardRow2 from "./CardRow2";

const CardComponent = () => {
  return (
    <>
      <CardRow1 />
      <CardRow2 />
    </>
  );
};

export default CardComponent;
