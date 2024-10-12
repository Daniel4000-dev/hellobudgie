import { GenericTable } from '@/tableInterface/DataTable';
import { DELIVERYCOMPANYTABLE_ITEMS } from '@/constants/Tableitems';
import React from 'react'
import { columns } from '@/app/deliverycompany/Column';

const DeliverCompanyTableWrapper = ({ onRowClick }: { onRowClick: (rowData: any) => void }) => {
  return (
    <div className="flex flex-col gap-4 pb4">
      <div className="custom-scrollbar overflow-y-auto max-h-[600px]">
        {DELIVERYCOMPANYTABLE_ITEMS.length > 0 ? (
          <GenericTable columns={columns} data={DELIVERYCOMPANYTABLE_ITEMS} onRowClick={onRowClick} />
        ) : (
          <p>No data available.</p>
        )}
      </div>
    </div>
  );
}

export default DeliverCompanyTableWrapper;
