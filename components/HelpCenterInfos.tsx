import Image from "@/node_modules/next/image";
import React from "react";
import Button from "./Buttonn";
import Icon from "../public/icon"; // Make sure the icon path is correct
import { DeliveryCompanyInfoProps } from "@/types/types";

const HelpCenterInfo: React.FC<DeliveryCompanyInfoProps> = ({
  selectedCompany,
}) => {
  return (
    <div className="flex flex-col p-4 min-h-[100px] max-h-[600px] custom-scrollbar overflow-y-scroll">
      <div className="">
        <h2 className="font-bold">{selectedCompany.orderId}</h2>
      </div>
      <div className="pt-4 text-sm">
        <div className="">
          <div className="flex items-center justify-between">
            <h2>Customer's name:</h2>
            <h2>{selectedCompany.name}</h2>
          </div>
          <div className="flex items-center justify-between pt-2">
            <h2>Email address:</h2>
            <h2>{selectedCompany.email}</h2>
          </div>
          <div className="flex items-center justify-between pt-2">
            <h2>Order ID:</h2>
            <h2>{selectedCompany.orderId}</h2>
          </div>
          <div className="flex items-center justify-between pt-2">
            <h2>Subject of message:</h2>
            <h2>{selectedCompany.subject}</h2>
          </div>
          <div className="flex items-center justify-between pt-2">
            <h2>Date:</h2>
            <h2>{selectedCompany.date}</h2>
          </div>
          <div className="flex flex-col first-letter:items-center justify-between pt-5">
            <h2>Message body:</h2>
            <textarea
              className="w-full text-xs bg-[#FFF8F1] border rounded-md pl-3 p-2 resize-none"
              placeholder="Enter message"
              rows={8}
            ></textarea>
          </div>
        </div>
      </div>
      <div className="pt-4">
        <Button className="w-full p-3 text-white" title="Reply customer" />
      </div>
    </div>
  );
};

export default HelpCenterInfo;
