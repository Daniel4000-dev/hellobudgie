'use client'

import { GenericTable } from '@/tableInterface/DataTable';
import { ADMINTABLE_ITEMS } from '@/constants/Tableitems';
import React from 'react'
import { ProductTableWrapperProps } from '@/types/types';

const AdminTableWrapper = ({ columns, data, onRowClick }: ProductTableWrapperProps) => {
    return (
        <div className="h-[600px] pb-4 bg-white rounded-lg">
          {ADMINTABLE_ITEMS.length > 0 ? (
            <GenericTable columns={columns} data={data} onRowClick={onRowClick} />
          ) : (
            <p>No data available.</p>
          )}
        </div>
      );
}

export default AdminTableWrapper