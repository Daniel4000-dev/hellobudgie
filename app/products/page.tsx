"use client";

import { Card } from "@/components/ui/card";
import Icon from "../../public/icon";
import Image from "@/node_modules/next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { columns as defaultColumns } from "./Column";
import OrdersTableGridWrapper from "@/components/OrdersTableGridWrapper";
import ProductInfo from "@/components/ProductInfos";
import ProductTableGridWrapper from "@/components/ProductTableGridWrapper";
import ProductTableWrapper from "@/components/ProductTableWrapper";
import Producthead from "@/components/ProductHeader";

const Product = () => {
  const [orderTab, setOrderTab] = useState("allOrdders");
  const [viewType, setViewType] = useState("view");
  const [columns, setColumns] = useState(defaultColumns);
  const [selectedCompany, setSelectedCompany] = useState<any>(null);

  const handleRowClick = (rowData: any) => {
    setSelectedCompany(rowData);
  };

  const toggleViewType = () => {
    setViewType((prevView) => (prevView === "view" ? "grid" : "view"));
  };
  const handleOrderTabChange = (value: string) => {
    setOrderTab(value);
  };

  const handleColumnSort = (selcetedHeader: string) => {
    const reorderedColumns = [...defaultColumns];
    const index = reorderedColumns.findIndex(
      (col) => col.header === selcetedHeader
    );
    if (index !== -1) {
      const [selectedColumn] = reorderedColumns.splice(index, 1);
      reorderedColumns.unshift(selectedColumn);
    }
    setColumns(reorderedColumns);
  };

  useEffect(() => {
    setOrderTab("allOrders");
  }, []);

  return (
    <div className="flex-1 space-y4">
      <div>
        <Producthead />
      </div>
      <div className="flex gap-4">
        <Card
          className={`flex-1 mb-4 custom-scrollbar overflow-y-auto ${
            selectedCompany ? "w-3/4" : "w-full"
          }`}
        >
          <Tabs defaultValue="allOrders" className="flex flex-col">
            <div className="flex justify-between items-center">
              <TabsList className="flex justify-start gap-4 w-full bg-white">
                <TabsTrigger
                  className={`text-[#E8903D] border-b-2 border-[#E8903D] rounded-none ${
                    orderTab === "allOrders" ? "active-tab-class" : ""
                  }`}
                  onClick={() => handleOrderTabChange("allOrders")}
                  value="allOrders"
                >
                  All orders
                </TabsTrigger>
                <TabsTrigger
                  onClick={() => handleOrderTabChange("inProgress")}
                  value="inProgress"
                >
                  In progress
                </TabsTrigger>
                <TabsTrigger
                  onClick={() => handleOrderTabChange("delivered")}
                  value="delivered"
                >
                  Delivered
                </TabsTrigger>
              </TabsList>
              <TabsList className="flex justify-end gap-4 w-full bg-white">
                <div onClick={toggleViewType} className="flex gap-2">
                  <h2>View</h2>
                  <Image
                    src={viewType === "view" ? Icon.View : Icon.Menu}
                    alt="view"
                  />
                </div>
                <Select onValueChange={handleColumnSort}>
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
              </TabsList>
            </div>
            <TabsContent value="allOrders">
              {viewType === "view" ? (
                <ProductTableWrapper
                  columns={columns}
                  onRowClick={handleRowClick}
                />
              ) : (
                <ProductTableGridWrapper onRowClick={handleRowClick} />
              )}
            </TabsContent>
            {/* <TabsContent value="inProgress">
                {viewType === 'view' ? (
                  <OrdersTableWrapper />
                ) : (
                  <AdminTableWrapper />
                )}
              </TabsContent>
              <TabsContent value="delivered">
                {viewType === 'view' ? (
                  <OrdersTableWrapper />
                ) : (
                  <AdminTableWrapper />
                )}
                </TabsContent> */}
          </Tabs>
        </Card>

        {selectedCompany && (
          <Card className="w-1/4 max-h-[550px] custom-scrollbar overflow-y-auto mb-4">
            <ProductInfo selectedCompany={selectedCompany} />
          </Card>
        )}
      </div>
    </div>
  );
};

export default Product;
