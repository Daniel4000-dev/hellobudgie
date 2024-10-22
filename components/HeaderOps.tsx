import Image from "@/node_modules/next/image";
import React from "react";
import Icon from "../public/icon";
import { AddAdminButton } from "./AddAdminButton";
import { AddDeliveryCompanyButton } from "./AddDeliveryCompanyButton";
import { AddProductButton } from "./AddProductButton";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

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
          <div className="flex gap-4 items-center">
            <div>
            <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Order ID">Order ID</SelectItem>
                    <SelectItem value="Product Name">Product Name</SelectItem>
                    <SelectItem value="Price">Price</SelectItem>
                    <SelectItem value="Quantity">Quantity</SelectItem>
                    <SelectItem value="Date">Date</SelectItem>
                    <SelectItem value="Status">Status</SelectItem>
                  </SelectContent>
                </Select>
            </div>
            <AddProductButton />
        </div>
        );
      case "/orders":
        return <h2 className="whitespace-nowrap">Order Type</h2>;
      case "/categories":
        return <h2 className="whitespace-nowrap">Product Category</h2>;
      case "/admin":
        return (
        <div>
          <AddAdminButton />
        </div>
        );
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
