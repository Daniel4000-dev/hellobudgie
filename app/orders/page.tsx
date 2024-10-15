'use client'

import OrdersHead from "@/components/OrdersHeader";
import OrdersInfo from "@/components/OrdersInfos";
import OrdersTableWrapper from "@/components/OrdersTableWrapper";
import { Card } from "@/components/ui/card";
import Icon from "../../public/icon";
import Image from "@/node_modules/next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import AdminTableWrapper from "@/components/AdminTableWrapper";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { columns as defaultColumns} from './Column';
import { ORDERSTABLE_ITEMS } from "@/constants/Tableitems";

const Orders = () => {
  const [orderTab, setOrderTab] = useState('allOrdders');
  const [viewType, setViewType] = useState('view');
  const [columns, setColumns] = useState(defaultColumns);

  const toggleViewType = () => {
    setViewType((prevView) => (prevView === 'view' ? 'grid' : 'view'))
  }
  const handleOrderTabChange = (value: string) => {
    setOrderTab(value);
  };

  const handleColumnSort = (selcetedHeader: string) => {
    const reorderedColumns = [...defaultColumns]
    const index = reorderedColumns.findIndex((col) => col.header === selcetedHeader);
    if (index !== -1) {
      const [selectedColumn] = reorderedColumns.splice(index, 1);
      reorderedColumns.unshift(selectedColumn);
    }
    setColumns(reorderedColumns);
  };

  useEffect(() => {
    setOrderTab('allOrders')
  }, []);

  return (
    <div className="flex-1 space-y4">
      <div>
        <OrdersHead />
      </div>
      <div className="grid grid-cols-7 gap-4 pt-4">
        <div className="col-span-5 space-y-4 custom-scrollbar overflow-y-scroll  max-h-[600px]">
          <div>
            <Card className="mb-4">
              <Tabs defaultValue='allOrders' className="flex flex-col">
                <div className='flex justify-between items-center'>
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
                  <TabsTrigger onClick={() => handleOrderTabChange('inProgress')} value="inProgress">In progress</TabsTrigger>
                  <TabsTrigger onClick={() => handleOrderTabChange('delivered')} value="delivered">Delivered</TabsTrigger>
                </TabsList>
                <TabsList className="flex justify-end gap-4 w-full bg-white">
                  <div  onClick={toggleViewType} className="flex gap-2">
                    <h2>View</h2>
                    <Image src={viewType === 'view' ? Icon.View : Icon.Menu} alt="view" />
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
                {viewType === 'view' ? (
                  <OrdersTableWrapper columns={columns} />
                ) : (
                  <AdminTableWrapper /> 
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
          </div>
        </div>

        <div className="col-span-2 custom-scrollbar overflow-y-scroll  max-h-[600px] mb-4">
          <div className="w-full bg-white rounded-xl">
            <div>
              <h2 className="text-xl font-light p-4">
                MacBook Pro 14" M2 chip 2022
              </h2>
            </div>
            <div className="w-full p-4">
              <OrdersInfo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
