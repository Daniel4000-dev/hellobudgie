import Image from "@/node_modules/next/image";
import React from "react";
import Button from "./Buttonn";
import Icon from "../public/icon"; // Make sure the icon path is correct
import { DeliveryCompanyInfoProps } from "@/types/types";

const DeliveryCompanyInfo: React.FC<DeliveryCompanyInfoProps> = ({ selectedCompany }) => {
  if (!selectedCompany) {
    return <p>Please select a company to see details.</p>;
  }

  return (
    <div className="flex flex-col p-4 min-h-[100px] max-h-[600px] custom-scrollbar overflow-y-scroll">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-bold">{selectedCompany.name.name}</h2>
        </div>
        <div className='bg-green-50 p-1 pl-2 '>
          <h2 className="text-xs">{selectedCompany.status}</h2>
        </div>
      </div>
      <div className="pt-3">
        <Image className="w-20 h-20" src={selectedCompany.name.icon} alt="" /> {/* Ensure correct path to icon */}
        <div className="pt-6">
          <div className="flex items-center justify-between pt-2">
            <h2>Name:</h2>
            <h2>{selectedCompany.name.name}</h2>
          </div>
          <div className="flex items-center justify-between pt-2">
            <h2>ID:</h2>
            <h2>{selectedCompany.deliveryCompanyId}</h2>
          </div>
          <div className="flex items-center justify-between pt-2">
            <h2>Date joined:</h2>
            <h2>{selectedCompany.dateAdded}</h2>
          </div>
        </div>
      </div>
      <div className="pt-2">
        <Button className="w-full p-3 bg-white border-2 border-[#E8903D]" title='Suspend' />
      </div>
    </div>
  );
};

export default DeliveryCompanyInfo;
