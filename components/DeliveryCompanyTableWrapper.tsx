import { GenericTable } from '@/tableInterface/DataTable';
import { DELIVERYCOMPANYTABLE_ITEMS } from '@/constants/Tableitems';
import React from 'react'
import { ProductTableWrapperProps } from '@/types/types';

const DeliveryCompanyTableWrapper = ({ columns, data, onRowClick }: ProductTableWrapperProps) => {
  return (
    <div className="flex flex-col gap-4 pb4">
      <div className="custom-scrollbar overflow-y-auto max-h-[600px]">
        {DELIVERYCOMPANYTABLE_ITEMS.length > 0 ? (
          <GenericTable columns={columns} data={data} onRowClick={onRowClick} />
        ) : (
          <p>No data available.</p>
        )}
      </div>
    </div>
  );
}

export default DeliveryCompanyTableWrapper;
