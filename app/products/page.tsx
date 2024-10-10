import Producthead from "@/components/ProductHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import { columns, Payment } from "./Column";
import { ProductTable } from "./DataTable";
import Icon from '../../public/icon'
import ProductInfo from "@/components/ProductInfos";

async function getData(): Promise<Payment[]> {
    // Fetch data from your API here.
    return [
      {
        id: "m5gr84i9",
        productName: {icon: Icon.Laptop, name:'MacBook Pro 14" M2 chip 2022'},
        price: "₦1,400,000",
        quantity: '1',
      },
      {
        id: "m5e4i4i9",
        productName: {icon: Icon.Laptop, name:"MacBook Pro 2022"},
        price: "₦1,400,000",
        quantity: '1',
      },
      {
        id: "m5e4i4i9",
        productName: {icon: Icon.Laptop, name:"MacBook Pro 2022"},
        price: "₦1,400,000",
        quantity: '1',
      },
       {
        id: "m5e4i4i9",
        productName: {icon: Icon.Laptop, name:"MacBook Pro 2022"},
        price: "₦1,400,000",
        quantity: '1',
      },
       {
        id: "m5e4i4i9",
        productName: {icon: Icon.Laptop, name:"MacBook Pro 2022"},
        price: "₦1,400,000",
        quantity: '1',
      },
      {
        id: "m5e4i4i9",
        productName: {icon: Icon.Laptop, name:"MacBook Pro 2022"},
        price: "₦1,400,000",
        quantity: '1',
      },
       {
        id: "m5e4i4i9",
        productName: {icon: Icon.Laptop, name:"MacBook Pro 2022"},
        price: "₦1,400,000",
        quantity: '1',
      },
       {
        id: "m5e4i4i9",
        productName: {icon: Icon.Laptop, name:"MacBook Pro 2022"},
        price: "₦1,400,000",
        quantity: '1',
      },
      {
        id: "m5e4i4i9",
        productName: {icon: Icon.Laptop, name:"MacBook Pro 2022"},
        price: "₦1,400,000",
        quantity: '1',
      },
      {
        id: "m5e4i4i9",
        productName: {icon: Icon.Laptop, name:"MacBook Pro 2022"},
        price: "₦1,400,000",
        quantity: '1',
      },
      {
        id: "m5e4i4i9",
        productName: {icon: Icon.Laptop, name:"MacBook Pro 2022"},
        price: "₦1,400,000",
        quantity: '1',
      },
    ];
  }

const Products = async () => {
    const data = await getData();
  return (
    <div className="flex-1 space-y4">
      <div>
        <Producthead />
      </div>
      <div className="grid grid-cols-5 gap-4 pt-8">
        <div className="col-span-3 space-y-4 custom-scrollbar overflow-y-scroll  max-h-[600px]">
          <div>
            <Card className="mb-4">
              <CardHeader>
                <CardTitle className="text-xl font-light">
                  Recent Invoices
                </CardTitle>
              </CardHeader>
              <div>
                <ProductTable columns={columns} data={data} />
              </div>
            </Card>
          </div>
        </div>

        <div className="col-span-2 custom-scrollbar overflow-y-scroll  max-h-[600px] mb-4">
          <div className="w-full bg-white rounded-xl">
            <div>
              <h2 className="text-xl font-light p-4">MacBook Pro 14" M2 chip 2022</h2>
            </div>
            <div className="w-full p-4">
              <ProductInfo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
