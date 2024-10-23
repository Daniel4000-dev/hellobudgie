"use client";

import { Card } from "@/components/ui/card";
import Icon from "../../public/icon";
import Image from "next/image";
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
import OrdersInfo from "@/components/OrdersInfos";
import { DELIVERYCOMPANYTABLE_ITEMS } from "@/constants/Tableitems";
import OverHead from "@/components/OverHead";
import DeliveryCompanyTableWrapper from "@/components/DeliveryCompanyTableWrapper";
import DeliveryCompanyTableGridWrapper from "@/components/DeliveryCompanyTableGridWrapper";
import DeliveryCompanyInfo from "@/components/DeliveryCompanyInfos";

const DeliveryCompany = () => {
  const [orderTab, setOrderTab] = useState("allOrders");
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

  const handleColumnSort = (selectedHeader: string) => {
    const reorderedColumns = [...defaultColumns];
    const index = reorderedColumns.findIndex(
      (col) => col.header === selectedHeader
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
        <OverHead />
      </div>
      <div className="flex gap-4">
        <Card
          className={`flex-1 mb-4 custom-scrollbar overflow-y-auto ${
            selectedCompany ? "w-3/5" : "w-full"
          }`}
        >
          <Tabs defaultValue="allOrders" className="flex flex-col" value={orderTab} onValueChange={handleOrderTabChange}>
            <div className="flex justify-between items-center">
              <TabsList className="flex justify-start w-full bg-white">
              <div className='border-r-[1px] pr-1'>
                <TabsTrigger
                  className={`rounded-none ${
                    orderTab === "allOrders" ? "active-tab-class text-[#E8903D] border-b-2 border-[#E8903D]" : ""
                  }`}
                  value="allOrders"
                >
                  All Products
                </TabsTrigger>
                </div>
                <TabsTrigger
                  value="active"
                  className={orderTab === "active" ? "active-tab-class text-[#E8903D] border-b-2 border-[#E8903D] rounded-none" : ""}
                >
                 Active
                </TabsTrigger>
                <TabsTrigger
                  value="suspended"
                  className={orderTab === "suspended" ? "active-tab-class text-[#E8903D] border-b-2 border-[#E8903D] rounded-none" : ""}
                >
                  Suspended
                </TabsTrigger>
              </TabsList>
              <TabsList className="flex justify-end gap-4 w-full bg-white">
                <div
                  onClick={toggleViewType}
                  className="flex items-center gap-2 cursor-pointer text-xs pr-3 border-r-[1px]"
                >
                  <h2>View</h2>
                  <Image
                    src={viewType === "view" ? Icon.View : Icon.Menu}
                    alt="view"
                    className='w-4 h-4'
                  />
                </div>
                <Select onValueChange={handleColumnSort}>
                  <SelectTrigger className="w-[120px]">
                    <SelectValue className="pl-8" placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="adminId">ID</SelectItem>
                    <SelectItem value="name">Name</SelectItem>
                    <SelectItem value="title">Title</SelectItem>
                    <SelectItem value="tier">Tier</SelectItem>
                    <SelectItem value="dateJoined">Date Joined</SelectItem>
                  </SelectContent>
                </Select>
              </TabsList>
            </div>

            <TabsContent value="allOrders">
              {viewType === "view" ? (
                <DeliveryCompanyTableWrapper
                  columns={columns}
                  data={DELIVERYCOMPANYTABLE_ITEMS}
                  onRowClick={handleRowClick}
                />
              ) : (
                <DeliveryCompanyTableGridWrapper
                  data={DELIVERYCOMPANYTABLE_ITEMS}
                  onRowClick={handleRowClick}
                />
              )}
            </TabsContent>

            <TabsContent value="active">
              {viewType === "view" ? (
                <DeliveryCompanyTableWrapper
                  columns={columns}
                  data={DELIVERYCOMPANYTABLE_ITEMS.filter(
                    (product) => product.status === "Active"
                  )}
                  onRowClick={handleRowClick}
                />
              ) : (
                <DeliveryCompanyTableGridWrapper
                  data={DELIVERYCOMPANYTABLE_ITEMS.filter(
                    (product) => product.status === "Active"
                  )}
                  onRowClick={handleRowClick}
                />
              )}
            </TabsContent>

            <TabsContent value="suspended">
              {viewType === "view" ? (
                <DeliveryCompanyTableWrapper
                  columns={columns}
                  data={DELIVERYCOMPANYTABLE_ITEMS.filter(
                    (product) => product.status === "Suspended"
                  )}
                  onRowClick={handleRowClick}
                />
              ) : (
                <DeliveryCompanyTableGridWrapper
                  data={DELIVERYCOMPANYTABLE_ITEMS.filter(
                    (product) => product.status === "Suspended"
                  )}
                  onRowClick={handleRowClick}
                />
              )}
            </TabsContent>
          </Tabs>
        </Card>

        {selectedCompany && (
          <Card className="w-2/5 max-h-[650px] custom-scrollbar overflow-y-auto mb-4">
            <DeliveryCompanyInfo selectedCompany={selectedCompany} />
          </Card>
        )}
      </div>
    </div>
  );
};

export default DeliveryCompany;
