import { ADMINTABLE_ITEMS } from "@/constants/Tableitems";
import React from "react";
import Image from "@/node_modules/next/image";
import { Card } from "./ui/card";
import Button from "./Buttonn";

const AdminTableGridWrapper = ({ onRowClick }: { onRowClick: (rowData: any) => void }) => {
  return (
    <div className="max-h-[600px] grid grid-cols-4 p-6 pb-4 gap-3 rounded-lg">
      {ADMINTABLE_ITEMS.map((item, index) => {
        return (
          <Card key={index} className='bg-[#FFF8F1] h-[300px] p-2' onClick={onRowClick}>
            <div>
                <h2 className="text-sm">{item.adminId}</h2>
            </div>
            {/* <div className='flex flex-col items-center'>
                {item.productName.icon && (
                <Image src={item.productName.icon} alt='Laptop' className="object-cover h-40 w-40" />
                )}
            </div> */}
            <div>
                <div>
                <h2 className="text-sm">{item.name}</h2>
                <div className="flex items-center text-sm pt-2 gap-1 pb-1 border-b-[1px]">
                    <h2 className="pr-1 border-r-[1px]">{item.title}</h2>
                    <h2 className="">{item.id} {`unit`}</h2>
                </div>
                <div className="flex text-xs justify-between pt-2 items-center">
                    <h2 className=''>{item.dateJoined}</h2>
                    <h2 className="">{item.tier}</h2>
                </div>
                </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default AdminTableGridWrapper;
