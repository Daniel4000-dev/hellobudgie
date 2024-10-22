import { GenericTable } from '@/tableInterface/DataTable';
import { DELIVERYCOMPANYTABLE_ITEMS } from '@/constants/Tableitems';
import React from 'react'

const DeliveryCompanyTableWrapper = ({ columns, onRowClick } : { columns: any[], onRowClick: (rowData: any) => void }) => {
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

export default DeliveryCompanyTableWrapper;
