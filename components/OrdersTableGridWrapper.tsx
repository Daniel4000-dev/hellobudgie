import { ORDERSTABLE_ITEMS } from "@/constants/Tableitems";
import { GenericTable } from "@/tableInterface/DataTable";
import React from "react";
import Image from "@/node_modules/next/image";
import { Card } from "./ui/card";

const OrdersTableGridWrapper = ({ onRowClick }: { onRowClick: (rowData: any) => void }) => {
  return (
    <div className="max-h-[600px] grid grid-cols-4 p-6 pb-4 gap-3 rounded-lg">
      {ORDERSTABLE_ITEMS.map((item, index) => {
        return (
          <Card key={index} className='bg-[#FFF8F1] h-[300px] p-2' onClick={onRowClick}>
            <div>
                <h2 className="text-sm">{item.orderId}</h2>
            </div>
            <div className='flex flex-col items-center'>
                {item.productName.icon && (
                <Image src={item.productName.icon} alt='Laptop' className="object-cover h-40 w-40" />
                )}
            </div>
            <div>
                <div>
                <h2 className="text-sm">{item.productName.name}</h2>
                <div className="flex items-center text-sm pt-2 gap-1 pb-1 border-b-[1px]">
                    <h2 className="pr-1 border-r-[1px]">{item.price}</h2>
                    <h2 className="">{item.quantity} {`unit`}</h2>
                </div>
                <div className="flex text-xs justify-between pt-2 items-center">
                    <h2 className=''>{item.date}</h2>
                    <h2 className="">{item.status}</h2>
                </div>
                </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default OrdersTableGridWrapper;
