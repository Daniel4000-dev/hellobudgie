"use client";

import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    getPaginationRowModel,
    useReactTable,
} from "@tanstack/react-table";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
// import { Button } from "@/components/ui/button";
import { Key } from "react";
import Button from "@/components/button";
import Image from "@/node_modules/next/image";

interface CustomerSupportTableProps<TData, TValue> {
    columns: ColumnDef<TValue, TValue>[]
    data: TData[]
}


const customCellRenderer = (cell: { getValue: (arg0: string) => any; column: { id: string; }; }) => {
  const productName = cell.getValue('productName');
  const price = cell.getValue('price');
  const quantity = cell.getValue('quantity');

  const icon = productName?.icon;
  const name = productName?.name;
  
  if((cell.column.id) === "productName") {
    return (
      <div className="flex items-center gap-4">
        <Image src={icon} />
      <h2 className='text-sm line-clamp-1'>{name}</h2>
      </div>
    );
  }else if((cell.column.id) === "price")  {
    return (
      <div className={`flex justify-start w[58px]`}>{price}</div>
    )
  } else {
    return quantity;
  }
};

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}
export function ProductTable<TData, TValue>({
    columns,
    data,
  }: DataTableProps<TData, TValue>) {
    const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
    })

    return (
      <div className="rounded-md border-none">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup: { id: Key | null | undefined; headers: any[]; }) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header: { id: Key | null | undefined; isPlaceholder: any; column: { columnDef: { header: any; }; }; getContext: () => any; }) => {
                  return (
                    <TableHead className='text-black' key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row: { id: Key | null | undefined; getIsSelected: () => any; getVisibleCells: () => any[]; }) => (
                <TableRow
                  className="h-2 hover:bg-[#FFEDDC]"
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell: { id: Key | null | undefined; getValue: (arg0: string) => any; column: { id: string } }) => (
                    <TableCell key={cell.id}>
                      {customCellRenderer(cell)}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    )
  }