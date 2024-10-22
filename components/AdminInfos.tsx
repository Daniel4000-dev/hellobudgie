import Image from "@/node_modules/next/image";
import React from "react";
import Button from "./Buttonn";
import { Select } from "./ui/select";
import Icon from "../public/icon";
import { ORDERSTABLE_ITEMS } from "@/constants/Tableitems";
import { AddAdminButton } from "./AddAdminButton";

const AdminInfo = ({ selectedCompany }: { selectedCompany: any }) => {
  return (
    <div className="flex flex-col p-4 min-h-[100px] max-h-[600px] custom-scrollbar overflow-y-scroll">
    <div className="flex items-center justify-between">
      <div>
        <h2 className="font-bold">{selectedCompany.name}</h2>
      </div>
    </div>
    <div className="pt-3">
      <div className="pt-6">
        <div className="flex items-center justify-between pt-2">
          <h2>Name:</h2>
          <h2>{selectedCompany.name}</h2>
        </div>
        <div className="flex items-center justify-between pt-2">
          <h2>ID:</h2>
          <h2>{selectedCompany.adminId}</h2>
        </div>
        <div className="flex items-center justify-between pt-2">
          <h2>Date joined:</h2>
          <h2>{selectedCompany.dateJoined}</h2>
        </div>
      </div>
    </div>
    <div className="pt-2">
      <Button className="w-full p-3 bg-white border-2 border-[#E8903D]" title='Suspend' onClick={AddAdminButton} />
    </div>
  </div>
  );
};

export default AdminInfo;
