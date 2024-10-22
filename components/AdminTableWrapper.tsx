'use client'

import { GenericTable } from '@/tableInterface/DataTable';
import { ADMINTABLE_ITEMS } from '@/constants/Tableitems';
import React from 'react'

const AdminTableWrapper = ({ columns, onRowClick } : { columns: any[], onRowClick: (rowData: any) => void }) => {
    return (
        <div className="h-[600px] pb-4 bg-white rounded-lg">
          {ADMINTABLE_ITEMS.length > 0 ? (
            <GenericTable columns={columns} data={ADMINTABLE_ITEMS} onRowClick={onRowClick} />
          ) : (
            <p>No data available.</p>  // You might want to change this message since data is static
          )}
        </div>
      );
}

export default AdminTableWrapper