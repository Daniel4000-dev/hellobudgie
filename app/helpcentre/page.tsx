"use client";

import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import { columns as defaultColumns } from "./Column";
import OrdersInfo from "@/components/OrdersInfos";
import { HELPCENTERTABLE_ITEMS } from "@/constants/Tableitems";
import OverHead from "@/components/OverHead";
import HelpCenterTableWrapper from "@/components/HelpCenterTableWrapper";
import HelpCenterInfo from "@/components/HelpCenterInfos";

const HelpCenter = () => {
  const [orderTab, setOrderTab] = useState("Pending disputes");
  const [columns, setColumns] = useState(defaultColumns);
  const [selectedCompany, setSelectedCompany] = useState<any>(null);

  const handleRowClick = (rowData: any) => {
    setSelectedCompany(rowData);
  };

  const handleOrderTabChange = (value: string) => {
    setOrderTab(value);
  };


  useEffect(() => {
    setOrderTab("pendingDisputes");
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
                    orderTab === "pendingDisputes" ? "active-tab-class text-[#E8903D] border-b-2 border-[#E8903D]" : ""
                  }`}
                  value="pendingDisputes"
                >
                  Pending disputes
                </TabsTrigger>
                </div>
                <TabsTrigger
                  value="solvedDisputes"
                  className={orderTab === "solvedDisputes" ? "active-tab-class text-[#E8903D] border-b-2 border-[#E8903D] rounded-none" : ""}
                >
                 Solved disputes
                </TabsTrigger>
              </TabsList>
            </div>

            {orderTab === "pendingDisputes" ? (
            <TabsContent value="pendingDisputes">
            <HelpCenterTableWrapper
              columns={columns}
              data={HELPCENTERTABLE_ITEMS.filter(
                (product) => product.status === "Pending disputes"
              )}
              onRowClick={handleRowClick}
            />
        </TabsContent>
              ) : (
                <TabsContent value="solvedDisputes">
                <HelpCenterTableWrapper
                  columns={columns}
                  data={HELPCENTERTABLE_ITEMS.filter(
                    (product) => product.status === "Solved disputes"
                  )}
                  onRowClick={handleRowClick}
                />
            </TabsContent>
              )}
          </Tabs>
        </Card>

        {selectedCompany && (
          <Card className="w-2/5 max-h-[650px] custom-scrollbar overflow-y-auto mb-4">
            <HelpCenterInfo selectedCompany={selectedCompany} />
          </Card>
        )}
      </div>
    </div>
  );
};

export default HelpCenter;
