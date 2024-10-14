'use client'

import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useState } from "react";

export interface GenericTableProps<TData> {
  columns: ColumnDef<TData>[];
  data: TData[];
  onRowClick?: (rowData: TData) => void;
}

export const GenericTable = <TData,>({ columns, data, onRowClick }: GenericTableProps<TData>) => {
  const [clickedRow, setClickedRow] = useState<number | null>(null);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const handleRowClick = (rowIndex: number, rowData: TData) => {
    setClickedRow(rowIndex);
    onRowClick?.(rowData); 
  };

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
      <TableBody className="">
        {table.getRowModel().rows.map((row, rowIndex) => (
          <TableRow key={row.id} onClick={() => handleRowClick(rowIndex, row.original)}
          className={`cursor-pointer ${rowIndex === clickedRow ? 'bg-[#FFF8F1]' : ""} hover:bg-[#FFF8F1]`}>
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
