import Image from "@/node_modules/next/image";
import React from "react";
import Button from "./Buttonn";
import { Select } from "./ui/select";
import Icon from "../public/icon";
import { ORDERSTABLE_ITEMS } from "@/constants/Tableitems";

const OrdersInfo = ({ selectedCompany }: {selectedCompany: any}) => {
  return (
    <div className="flex flex-col p-2">
            <div className='flex font-bold'>
              <h2 className="pr-1">ID:</h2>
              <h2>{selectedCompany.orderId}</h2>
            </div>
            <div>
              <Image src={selectedCompany.productName.icon} alt="" className="flex items-center w-60 h-60 object-fill" />
            </div>
            <div className="text-sm">
                <div className='flex justify-between itemscenter'>
                    <h2>Product name:</h2>
                    <h2 className="text-right w-[132px]">{selectedCompany.productName.name}</h2>
                </div>
                <div className='flex justify-between items-center pt-2'>
                <h2>Order ID:</h2>
                    <h2>{selectedCompany.orderId}</h2>
                </div>
                <div className='flex justify-between items-center pt-2'>
                    <h2>Price:</h2>
                    <h2>{selectedCompany.price}</h2>
                </div>
                <div className='flex justify-between items-center pt-2'>
                    <h2>Quantity:</h2>
                    <h2>{selectedCompany.quantity}</h2>
                </div>
                <div className='flex justify-between items-center pt-2'>
                <h2>Customer name:</h2>
                    <h2>{selectedCompany.customerName}</h2>
                </div>
                <div className='flex justify-between items-center pt-2'>
                <h2>Customer email:</h2>
                    <h2>{selectedCompany.customerEmail}</h2>
                </div>
                <div className='text-sm flex justify-between items-center pt-2'>
                <h2>Delivery by:</h2>
                    <div className='flex items-center gap-2'>
                    <Image src={selectedCompany.deliveryBy.icon} alt={selectedCompany.deliveryBy.name} className='w-4 h-4' />
                    <h2>{selectedCompany.deliveryBy.name}</h2>
                    </div>
                </div>
                <div className='flex justify-between items-center pt-2'>
                <h2>Status:</h2>
                    <h2>{selectedCompany.status}</h2>
                </div>
            </div>
          </div>
  );
};

export default OrdersInfo;
