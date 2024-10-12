import Image from "@/node_modules/next/image";
import React from "react";
import Icon from "../public/icon";

const HeaderSearch = ({ currentPath }: { currentPath: string }) => {
  const getPlaceholderText = () => {
    switch (currentPath) {
      case "/":
        return 'Search in "Overview"';
      case "/products":
        return 'Search in "Products"';
      case "/orders":
        return 'Search in "Orders"';
      case "/categories":
        return 'Search in "Categories"';
      case "/admin":
        return "Search in Admin";
      case "/deliverycompany":
        return 'Search in "Delivery Company"';
      case "/helpcentre":
        return 'Search in "Help Centre"';
      default:
        return "Search...";
    }
  };

  return (
    <div className="flex items-center">
      <input
        className="rounded-full text-sm w-[25em] border-[1px] border-black-none bg-gray-50 border-gray-300 p-1.5"
        placeholder={getPlaceholderText()}
      />
      <span className="bg-[#E8903D] rounded-full text-white -ml[15.5vw] -ml-[94px] md:-ml-[98px]">
        <div className="flex items-center gap-2 m-1 pl-2 pr-3 text-sm">
          <Image className="" src={Icon.Search} alt="search" />
          <h3>Search</h3>
        </div>
      </span>
    </div>
  );
};

export default HeaderSearch;
