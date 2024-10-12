'use client'

import OverHead from '@/components/OverHead';
import { Card } from "@/components/ui/card";
import DeliverCompanyTableWrapper from '@/components/DeliveryCompanyTableWrapper';
import DeliveryCompanyInfo from '@/components/DeliveryCompanyInfos';
import React, { useState } from 'react';

const DeliveryCompany = () => {
  const [selectedCompany, setSelectedCompany] = useState<any>(null);

  // Handler for row click
  const handleRowClick = (rowData: any) => {
    console.log("Row clicked with data:", rowData);
    setSelectedCompany(rowData);
  };

  return (
    <div className="flex-1 space-y-4">
      <div>
        <OverHead />
      </div>

      <div className="pt-8">
        <div className="flex gap-4">
          <Card className={`flex-1 custom-scrollbar overflow-y-auto ${selectedCompany ? 'w-3/4' : 'w-full'}`}>
            <DeliverCompanyTableWrapper onRowClick={handleRowClick} />
          </Card>

          {selectedCompany && (
            <Card className="w-1/4 max-h-[350px] custom-scrollbar overflow-y-auto">
              <DeliveryCompanyInfo selectedCompany={selectedCompany} />
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default DeliveryCompany;
