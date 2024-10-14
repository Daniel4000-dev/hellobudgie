import Image from "@/node_modules/next/image";
import React from "react";
import Icon from "../public/icon";
import { AddDeliveryCompanyButton } from "./AddDeliveryCompanyButton";

const HeaderOps = ({ currentPath }: { currentPath: string }) => {
  const renderHeaderOps = () => {
    switch (currentPath) {
      case "/":
        return (
          <div className="flex gap-2">
            <h2 className="whitespace-nowrap">Month</h2>
            <Image src={Icon.ArrowDown} alt="arrow down" />
          </div>
        );
      case "/products":
        return (
          <div className="flex gap-2">
            <h2 className="whitespace-nowrap">Category</h2>
            <Image src={Icon.ArrowDown} alt="arrow down" />
          </div>
        );
      case "/orders":
        return <h2 className="whitespace-nowrap">Order Type</h2>;
      case "/categories":
        return <h2 className="whitespace-nowrap">Product Category</h2>;
      case "/admin":
        return <h2 className="whitespace-nowrap">Admin Settings</h2>;
      case "/deliverycompany":
        return (
        <div>
            <AddDeliveryCompanyButton />
        </div>
        );
      case "/helpcentre":
        return <h2 className="whitespace-nowrap"></h2>;
      default:
        return null;
    }
  };

  return <div className={`${currentPath === "/helpcentre" ? "mr-0": "pl-5"}`}>{renderHeaderOps()}</div>;
};

export default HeaderOps;
