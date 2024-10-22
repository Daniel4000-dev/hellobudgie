// import { columns } from '@/app/orders/Column';
import { GenericTable } from '@/tableInterface/DataTable';
import { PRODUCTTABLE_ITEMS } from '@/constants/Tableitems';
import React from 'react'
import { ProductTableWrapperProps } from '@/types/types';

const ProductTableWrapper = ({ columns, data, onRowClick }: ProductTableWrapperProps) => {
    return (
        <div className="h-[600px] pb-4 bg-white rounded-lg">
          {PRODUCTTABLE_ITEMS.length > 0 ? (
            <GenericTable columns={columns} data={data} onRowClick={onRowClick} />
          ) : (
            <p>No data available.</p>  // You might want to change this message since data is static
          )}
        </div>
      );
}

export default ProductTableWrapper