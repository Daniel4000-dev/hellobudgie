'use client'

import OverHead from '@/components/OverHead';
import { Card } from "@/components/ui/card";
import React, { useState } from 'react';
import HelpCenterTableWrapper from '@/components/HelpCenterTableWrapper';
import HelpCenterInfo from '@/components/HelpCenterInfos';

const DeliveryCompany = () => {
  const [selectedCompany, setSelectedCompany] = useState<any>(null);

  const handleRowClick = (rowData: any) => {
    setSelectedCompany(rowData);
  };

  return (
    <div className="flex-1 space-y-4">
      <div>
        <OverHead />
      </div>

      <div className="pt-4">
        <div className="flex gap-4">
          <Card className={`flex-1 custom-scrollbar overflow-y-auto ${selectedCompany ? 'w-2/3' : 'w-full'}`}>
            <HelpCenterTableWrapper onRowClick={handleRowClick} />
          </Card>

          {selectedCompany && (
            <Card className="w-1/3 max-h-[600px] custom-scrollbar overflow-y-auto">
              <HelpCenterInfo selectedCompany={selectedCompany} />
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default DeliveryCompany;
