import { GenericTable } from '@/tableInterface/DataTable';
import { HELPCENTERTABLE_ITEMS } from '@/constants/Tableitems';
import React from 'react'
import { columns } from '@/app/helpcentre/Column';

const HelpCenterTableWrapper = ({ onRowClick }: { onRowClick: (rowData: any) => void }) => {
  return (
    <div className="flex flex-col gap-4 pb4">
      <div className="custom-scrollbar overflow-y-auto max-h-[600px]">
        {HELPCENTERTABLE_ITEMS.length > 0 ? (
          <GenericTable columns={columns} data={HELPCENTERTABLE_ITEMS} onRowClick={onRowClick} />
        ) : (
          <p>No data available.</p>
        )}
      </div>
    </div>
  );
}

export default HelpCenterTableWrapper;
