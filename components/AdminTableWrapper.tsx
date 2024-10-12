'use client'

import { columns } from '@/app/admin/Column';
import { GenericTable } from '@/tableInterface/DataTable';
import { ADMINTABLE_ITEMS } from '@/constants/Tableitems';
import React from 'react'

const AdminTableWrapper = () => {
    return (
        <div className="h-[600px] pb-4 bg-white rounded-lg">
          {ADMINTABLE_ITEMS.length > 0 ? (
            <GenericTable columns={columns} data={ADMINTABLE_ITEMS} />
          ) : (
            <p>No data available.</p>  // You might want to change this message since data is static
          )}
        </div>
      );
}

export default AdminTableWrapper