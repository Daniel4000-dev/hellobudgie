'use client'

import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export interface GenericTableProps<TData> {
  columns: ColumnDef<TData>[];
  data: TData[];
  onRowClick?: (rowData: TData) => void;
}

export const GenericTable = <TData,>({ columns, data, onRowClick }: GenericTableProps<TData>) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Table className="min-h-[100px] max-h-[600px] overflow-y-auto">
      <TableHeader>
        {table.getHeaderGroups().map(headerGroup => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map(header => (
              <TableHead key={header.id}>
                {flexRender(header.column.columnDef.header, header.getContext())}
              </TableHead>
            ))}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody className="hover:bg-black table-row">
        {table.getRowModel().rows.map(row => (
          <TableRow key={row.id} onClick={() => onRowClick?.(row.original)} className="cursor-pointer hover:bg-gray-300 bg[#FFF8F1]">
            {row.getVisibleCells().map(cell => (
              <TableCell key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
